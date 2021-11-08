function MyMap(iterable) {
    this.keyValueArr = [];

    iterable?.forEach(element => {
        this.keyValueArr.push({ [Object.keys(element)[0]]: Object.values(element)[0] });
    });
}

MyMap.prototype.isKeyExist = function (key) {
    if (this.containsKey(key)) {
        throw new Error("The same key exists in the map.");
    }
}

MyMap.prototype.put = function (key, value) {
    this.isKeyExist(key);
    // const test = [].reduce.call(value,
    //     function (hash, i) {
    //         var chr = i.charCodeAt(0);
    //         hash = (hash << 5 - hash) + chr;
    //         return hash | 0;
    //     }, 0);
    console.log()
    this.keyValueArr.push({ [key]: value });
}

MyMap.prototype.getIndex = function (key) {
    return this.keyValueArr.findIndex(o => Object.keys(o)[0] === key);
}

MyMap.prototype.remove = function (key) {
    const index = this.getIndex(key);
    if (index !== -1) {
        this.keyValueArr.splice(index, 1);
    }
}

MyMap.prototype.containsKey = function (key) {
    let result = true;
    if (this.getIndex(key) === -1) {
        result = false;
    }

    return result;
}

MyMap.prototype.get = function (key) {
    const obj = this.keyValueArr.find(o => Object.keys(o)[0] === key);

    if (typeof obj !== 'undefined') {
        return obj[key];
    }

    return obj;
}

MyMap.prototype.getLength = function () {
    return this.keyValueArr.length;
}

MyMap.prototype.isEmpty = function () {
    let result = true;
    if (this.getLength() > 0) {
        result = false;
    }
    return result;
}

MyMap.prototype.keys = function () {
    const keys = [];
    this.keyValueArr.forEach(function (item, i, array) {
        keys.push(...Object.keys(item));
    });
    return keys;
}

MyMap.prototype.replace = function (key, value) {
    this.remove(key);
    this.keyValueArr.push({ [key]: value });
}

MyMap.prototype.size = function () {
    return this.getLength();
}

MyMap.prototype.clear = function () {
    this.keyValueArr = [];
}

const mapConstructorTest = new MyMap([{ '1': 'one' }, { '2': 'two' }]);
mapConstructorTest.put('3', 'three');
mapConstructorTest.remove('2');
console.log(`containsKey: ${mapConstructorTest.containsKey('2')}`);
console.log(`get: ${mapConstructorTest.get('1')}`);
console.log(`isEmpty: ${mapConstructorTest.isEmpty()}`);
console.log(`keys: ${mapConstructorTest.keys()}`);
mapConstructorTest.replace('3', '3');
console.log(`size: ${mapConstructorTest.size()}`);
mapConstructorTest.clear();