function* selectMany<T>(source: Iterable<Iterable<T>>) {
    for (const iterator of source) {
        yield* iterator;
    }
}

class SelectManyIterator<T> implements Iterator<T> {
    private current?: Iterator<T>;
    constructor(private readonly source: Iterator<Iterable<T>>) {}

    next() {
        while (true) {
            this.s;
        }
    }
}
