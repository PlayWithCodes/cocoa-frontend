class Entry {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

function MyMap(iterable) {
    this.keyValueObjArr = [];

    iterable?.forEach(keyValueObj => {
        this.keyValueObjArr.push(new Entry(...Object.keys(keyValueObj), ...Object.values(keyValueObj)));
    });
}

MyMap.prototype.put = function (key, value) {
    // const test = [].reduce.call(value,
    //     function (hash, i) {
    //         var chr = i.charCodeAt(0);
    //         hash = (hash << 5 - hash) + chr;
    //         return hash | 0;
    //     }, 0);
    if (this.containsKey(key)) {
        this.replace(key, value);
    }
    else{
        this.keyValueObjArr.push(new Entry(key, value));
    }
}

MyMap.prototype.getIndex = function (key) {
    return this.keyValueObjArr.findIndex(o => o.key === key);
}

MyMap.prototype.remove = function (key) {
    const index = this.getIndex(key);
    if (index !== -1) {
        this.keyValueObjArr.splice(index, 1);
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
    const keyValueObj = this.keyValueObjArr.find(keyValueObj => keyValueObj.key === key);

    if (typeof keyValueObj !== 'undefined') {
        return keyValueObj.value;
    }

    return keyValueObj;
}

MyMap.prototype.getLength = function () {
    return this.keyValueObjArr.length;
}

MyMap.prototype.isEmpty = function () {
    let result = true;
    if (this.getLength()) {
        result = false;
    }
    return result;
}

MyMap.prototype.keys = function () {
    const keys = [];
    this.keyValueObjArr.forEach(keyValueObj => {
        keys.push(keyValueObj.key);
    });
    return keys;
}

MyMap.prototype.replace = function (key, value) {
    this.remove(key);
    this.keyValueObjArr.push(new Entry(key, value));
}

MyMap.prototype.size = function () {
    return this.getLength();
}

MyMap.prototype.clear = function () {
    this.keyValueObjArr = [];
}

const mapConstructorTest = new MyMap([{ '1': 'one' }, { '2': 'two' }]);
mapConstructorTest.put('3', 'three');
mapConstructorTest.put('3', 'sam');
mapConstructorTest.remove('2');
console.log(`containsKey: ${mapConstructorTest.containsKey('1')}`);
console.log(`get: ${mapConstructorTest.get('1')}`);
console.log(`isEmpty: ${mapConstructorTest.isEmpty()}`);
console.log(`keys: ${mapConstructorTest.keys()}`);
mapConstructorTest.replace('3', '3');
console.log(`size: ${mapConstructorTest.size()}`);
mapConstructorTest.clear();