import { createIterable } from './utils';

export const concat = <T>(first: Iterable<T>, second: Iterable<T>) => {
    return createIterable(
        () =>
            new ConcatIterator(
                first[Symbol.iterator](),
                second[Symbol.iterator]()
            )
    );
};

class ConcatIterator<T> implements Iterator<T> {
    private iteratedFirst = false;

    constructor(
        private readonly first: Iterator<T>,
        private readonly second: Iterator<T>
    ) {}

    public next() {
        if (!this.iteratedFirst) {
            const item = this.first.next();
            if (item.done) {
                this.iteratedFirst = true;
            } else {
                return item;
            }
        }

        return this.second.next();
    }
}
