class InMemoryCache {
    constructor() {
        this.cache = new Map();
        this.size = 30; 
    }

    get(key) {
        return this.cache.get(key);
    }

    set(key, value) {
        if (this.cache.size >= this.size) {
            this.clear(); // очистить кэш если размер превышает лимиты
        }
        this.cache.set(key, value);
    }

    clear() {
        this.cache.clear();
    }

    setSize(size) {
        this.size = size;
        if (this.cache.size > this.size) {
            this.clear(); // удалить лишние записи
        }
    }
}

module.exports = InMemoryCache;
