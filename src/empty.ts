import { createIterable, done } from './utils';

export const empty = <T>(): Iterable<T> => {
    return createIterable<never>(() => {
        return {
            next() {
                return done<never>();
            }
        };
    });
};
