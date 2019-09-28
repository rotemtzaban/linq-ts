import { Predicate } from './types';

export const firstOrDefault = <T>(
    iterable: Iterable<T>,
    predicate?: Predicate<T>,
): T | undefined => {
    const iterator = iterable[Symbol.iterator]();
    if (predicate) {
        let next = iterator.next();
        while (!next.done) {
            if (predicate(next.value)) {
                return next.value;
            }

            next = iterator.next();
        }

        return undefined;
    } else {
        const firstElement = iterator.next();
        if (!firstElement.done) {
            return firstElement.value;
        }

        return undefined;
    }
};
