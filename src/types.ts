export type Predicate<T> = (value: T) => boolean;
export type IndexedPredicate<T> = (value: T, index?: number) => boolean;
export type EqualityComparer<T> = (first: T, second: T) => boolean;
