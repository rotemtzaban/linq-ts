import { Predicate } from './types';

export const first = <T>(
    iterable: Iterable<T>,
    predicate?: Predicate<T>
): T => {
    const iterator = iterable[Symbol.iterator]();
    if (predicate) {
        let next = iterator.next();
        while (!next.done) {
            if (predicate(next.value)) {
                return next.value;
            }

            next = iterator.next();
        }

        throw new Error(
            'No element was found thay matches the predicate supplied'
        );
    } else {
        const firstElement = iterator.next();
        if (!firstElement.done) {
            return firstElement.value;
        }

        throw new Error(
            'Sequence contains no elements'
        );
    }
};
