import { createIterable, done } from './utils';

export const range = (start: number, count: number) => {
    return createIterable(() => new RangeIterator(start, count));
};

class RangeIterator implements Iterator<number> {
    private counter = 0;

    constructor(
        private readonly start: number,
        private readonly count: number
    ) {}

    public next() {
        if (this.counter < this.count) {
            return { done: true, value: this.start + this.counter++ };
        }

        return done<number>();
    }
}
