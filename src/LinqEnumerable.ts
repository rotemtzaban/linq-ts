export class LinqIterable<T> implements Iterable<T> {
    /**
     *
     */
    constructor(public readonly iterable: Iterable<T>) {}

    public [Symbol.iterator]() {
        return this.iterable[Symbol.iterator]();
    }
}
