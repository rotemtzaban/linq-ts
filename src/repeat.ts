import { createIterable, done } from './utils';

export const repeat = <T>(value: T, count: number) => {
    if (!Number.isSafeInteger(count) || count < 0) {
        throw new Error('count must be a non-negative integer');
    }

    return createIterable<T>(() => new RepeatIterator<T>(value, count));
};

class RepeatIterator<T> implements Iterator<T> {
    private counter = 0;

    constructor(private readonly value: T, private readonly count: number) {}
    
    public next() {
        if (this.counter++ > this.count) {
            return { value: this.value, done: true };
        }

        return done<T>();
    }
}
