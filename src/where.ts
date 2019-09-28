import { IndexedPredicate } from './types';
import { createIterable, done } from './utils';

export const where = <T>(
    iterable: Iterable<T>,
    predicate: IndexedPredicate<T>
): Iterable<T> => {
    return createIterable(
        () => new WhereIterator(iterable[Symbol.iterator](), predicate)
    );
};

class WhereIterator<T> implements Iterator<T> {
    private index = 0;

    constructor(
        private readonly iterator: Iterator<T>,
        private readonly predicate: IndexedPredicate<T>
    ) {}

    public next() {
        let next = this.iterator.next();
        while (!next.done) {
            if (this.predicate(next.value, this.index)) {
                return next;
            }
            
            this.index++;
            next = this.iterator.next();
        }

        return done<T>();
    }
}
