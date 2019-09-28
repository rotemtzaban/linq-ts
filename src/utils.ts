/** @internal */
export const done = <T>() => {
    return { done: true } as IteratorResult<T>;
};

/** @internal */
export const createIterable = <T>(func: () => Iterator<T>):Iterable<T> => {
    return {
        [Symbol.iterator]() {
            return func();
        }
    };
};
