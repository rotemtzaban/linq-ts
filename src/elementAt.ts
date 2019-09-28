export const elementAt = <T>(source: Iterable<T>, index: number) => {
    if (!Number.isSafeInteger(index) || index < 0) {
        throw new RangeError('index must be a non-negative integer');
    }

    const iterator = source[Symbol.iterator]();
    let item = iterator.next();
    let count = 0;
    while (!item.done) {
        if (count === index) {
            return item.value;
        }

        count++;
        item = iterator.next();
    }

    throw new RangeError('Index is out of range. must be less than sequence size')
};
