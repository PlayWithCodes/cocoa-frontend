class MyMap {
    constructor(iterable) {
        this.keyValueArr = [];

        iterable?.forEach(element => {
            this.keyValueArr.push({ [Object.keys(element)[0]] : Object.values(element)[0] });
        });
    }
    put(key, value) {
        this.keyValueArr.push({ [key]: value });

    }

    getIndex(key) {
        return this.keyValueArr.findIndex(o => Object.keys(o)[0] === key);
    }

    remove(key) {
        const index = this.getIndex(key);
        if (index !== -1) {
            this.keyValueArr.splice(index, 1);
        }
    }

    containsKey(key) {
        let result = true;
        const index = this.getIndex(key);

        if (index === -1) {
            result = false;
        }

        return result;
    }

    get(key) {
        const obj = this.keyValueArr.find(o => Object.keys(o)[0] === key);

        if (typeof obj !== 'undefined') {
            return obj[key];
        }

        return obj;
    }

    getLength() {
        return this.keyValueArr.length;
    }

    isEmpty() {
        let result = true;
        if (this.getLength() > 0) {
            result = false;
        }
        return result;
    }

    keys() {
        const keys = [];
        this.keyValueArr.forEach(function (item, i, array) {
            keys.push(...Object.keys(item));
        });
        return keys;
    }

    replace(key, value) {
        this.remove(key);
        this.keyValueArr.push({ [key]: value });
    }

    size() {
        return this.getLength();
    }

    clear() {
        this.keyValueArr = [];
    }
}



const mapConstructorTest = new MyMap([{ '1': 'one' }, { '2': 'two' }]);
console.log(`put: ${mapConstructorTest.put('3', 'three')}`);
console.log(`remove: ${mapConstructorTest.remove('2')}`);
console.log(`containsKey: ${mapConstructorTest.containsKey('2')}`);
console.log(`get: ${mapConstructorTest.get('2')}`);
console.log(`isEmpty: ${mapConstructorTest.isEmpty()}`);
console.log(`keys: ${mapConstructorTest.keys()}`);
console.log(`replace: ${mapConstructorTest.replace('3', '3')}`);
console.log(`size: ${mapConstructorTest.size()}`);
console.log(`size: ${mapConstructorTest.clear()}`);


