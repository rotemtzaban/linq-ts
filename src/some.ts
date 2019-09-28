import { Predicate } from './types';
export const some = <T>(
    iterable: Iterable<T>,
    predicate?: Predicate<T>
): boolean => {
    const iter = iterable[Symbol.iterator]();
    if (predicate) {
        let next = iter.next();
        while (!next.done) {
            if (predicate(next.value)) {
                return true;
            }

            next = iter.next();
        }
        return false;
    } else {
        return !iter.next().done;
    }
};
