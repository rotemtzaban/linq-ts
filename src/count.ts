import { Predicate } from './types';
export const count = <T>(
    iterable: Iterable<T>,
    predicate?: Predicate<T>
): number => {
    let counter = 0;
    const iter = iterable[Symbol.iterator]();
    if (predicate) {
        let next = iter.next();
        while (!next.done) {
            if (predicate(next.value)) {
                counter++;
            }

            next = iter.next();
        }
    } else {
        while(!iter.next().done){
            counter++;
        }
    }

    return counter;
};
