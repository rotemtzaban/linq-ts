export function average(iterable: Iterable<number | null>): number | null;
export function average<TSource>(
    iterable: Iterable<TSource>,
    func: (source: TSource) => number | null
): number | null;

export function average<TSource>(
    iterable: Iterable<TSource> | Iterable<number | null>,
    func?: (source: TSource) => number | null
): number | null {
    const iterator = iterable[Symbol.iterator]();
    let sum = 0;
    let item = iterator.next();
    let count = 0;
    if (func) {
        while (!item.done) {
            const value = func(item.value as TSource);
            if (value) {
                sum += value;
                count++;
            }

            item = iterator.next();
        }
    } else {
        while (!item.done) {
            if (item.value) {
                sum += item.value as number;
                count++;
            }

            item = iterator.next();
        }
    }

    if (count === 0) {
        return null;
    } else {
        return sum / count;
    }
}
