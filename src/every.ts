import { Predicate } from './types';
export const some = <T>(
    iterable: Iterable<T>,
    predicate: Predicate<T>
): boolean => {
    const iter = iterable[Symbol.iterator]();
    let next = iter.next();
    while (!next.done) {
        if (!predicate(next.value)) {
            return false;
        }
        
        next = iter.next();
    }
    return true;
};
