import { EqualityComparer } from './types';

export const contains = <T>(
    source: Iterable<T>,
    value: T,
    comparer?: EqualityComparer<T>
) => {
    const iterator = source[Symbol.iterator]();
    let item = iterator.next();
    while (!item.done) {
        if (comparer) {
            if (comparer(value, item.value)) {
                return true;
            }
        } else {
            if (value === item.value) {
                return true;
            }
        }
        item = iterator.next();
    }

    return false;
};
