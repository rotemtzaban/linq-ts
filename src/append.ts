import { createIterable, done } from './utils';

export const append = <T>(iterable: Iterable<T>, value: T): Iterable<T> => {
    return createIterable(
        () => new AppendIterator(iterable[Symbol.iterator](), value)
    );
};

class AppendIterator<T> implements Iterator<T> {
    private valueReturned = false;

    constructor(
        private readonly iterator: Iterator<T>,
        private readonly value: T
    ) {}

    public next() {
        if (this.valueReturned) {
            return done<T>();
        }
        const result = this.iterator.next();
        if (result.done) {
            this.valueReturned = true;
            return { value: this.value, done: false };
        } else {
            return result;
        }
    }
}
