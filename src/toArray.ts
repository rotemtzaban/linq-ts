export const toArray = <T>(iterable: Iterable<T>): T[] => {
    if (Array.from) {
        return Array.from(iterable);
    } else {
        const arr: T[] = [];
        const iter = iterable[Symbol.iterator]();
        let item = iter.next();
        while (!item.done) {
            arr.push(item.value);
            item = iter.next();
        }

        return arr;
    }
};
