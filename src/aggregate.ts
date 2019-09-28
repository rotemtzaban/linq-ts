export function aggregate<TSource>(
    iterable: Iterable<TSource>,
    aggreagtion: (first: TSource, second: TSource) => TSource
): TSource;
export function aggregate<TSource, TAccumulate>(
    iterable: Iterable<TSource>,
    aggreagtion: (first: TAccumulate, second: TSource) => TAccumulate,
    seed: TAccumulate
): TAccumulate;

export function aggregate<TSource, TAccumulate>(
    iterable: Iterable<TSource>,
    aggreagtion:
        | ((first: TAccumulate, second: TSource) => TAccumulate)
        | ((first: TSource, second: TSource) => TSource),
    seed?: TAccumulate
) {
    const iterator = iterable[Symbol.iterator]();
    if (seed) {
        const actualAggregation = aggreagtion as (
            first: TAccumulate,
            second: TSource
        ) => TAccumulate;

        let accumulator = seed;

        let item = iterator.next();
        while (!item.done) {
            accumulator = actualAggregation(accumulator, item.value);
            item = iterator.next();
        }

        return accumulator;
    } else {
        const first = iterator.next();
        if (first.done) {
            throw new Error('Sequence contains no elements');
        }

        const actualAggregation = aggreagtion as (
            first: TSource,
            second: TSource
        ) => TSource;

        let accumulator = first.value;
        let item = iterator.next();
        while (!item.done) {
            accumulator = actualAggregation(accumulator, item.value);
            item = iterator.next();
        }

        return accumulator;
    }
}
