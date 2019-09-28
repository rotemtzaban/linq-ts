import { createIterable, done } from './utils';

export const select = <TSource, TResult>(
    iterable: Iterable<TSource>,
    selector: (source: TSource, index?: number) => TResult
) => {
    return createIterable(
        () => new SelectIterator(iterable[Symbol.iterator](), selector)
    );
};

class SelectIterator<TSource, TResult> implements Iterator<TResult> {
    constructor(
        private readonly iterator: Iterator<TSource>,
        private readonly selector: (source: TSource, index?: number) => TResult
    ) {}

    public next() {
        const next = this.iterator.next();
        if (next.done) {
            return done<TResult>();
        }

        return { value: this.selector(next.value), done: false };
    }
}
