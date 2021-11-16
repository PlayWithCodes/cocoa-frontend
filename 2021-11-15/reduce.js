const array1 = [1, 2, 3];

function reduce(arr, reducer) {
    let result = 0;
    for (let i = 0; i < arr.length; i+=2) {
        result += reducer(arr[i], i+1 >= arr.length ? 0 : arr[i+1]);
    }
    return result;
}

const addReducer = (prev, curr) => prev + curr;

console.log(reduce(array1, addReducer));