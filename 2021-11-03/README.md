## Working with objects
자바스크립트 세상에서는 거의 모든 것들이 객체이다. null 과 undefined를 제외한 모든 원시 타입도 객체로 취급된다.
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects#%EA%B0%9D%EC%B2%B4_%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0

## class 문
class 선언은 프로토타입 기반 상속을 사용하여, 주어진 이름의 새로운 클래스를 만듭니다.
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class

## class 식
class 표현식은 ECMAScript 2015 (ES6)에서 클래스를 정의하는 한 방법입니다. function 식과 비슷하게, class 식은 기명(named) 또는 익명(unnamed)일 수 있습니다. 기명인 경우, 클래스명은 클래스 본체(body)에서만 지역(local)입니다. JavaScript 클래스는 프로토타입(원형) 기반 상속을 사용합니다.
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/class

## Object.keys()
Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
<pre>
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
</pre>
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

## Object.values()
Object.values() 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다. 이 배열은 for...in 구문과 동일한 순서를 가집니다. (for in 반복문은 프로토타입 체인 또한 열거한다는 점에서 차이가 있습니다.)
<pre>
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
</pre>
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values

## Object.entries()
Object.entries() 메서드는 for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다. (for-in 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점입니다).
<pre>
const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
</pre>
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

## Array.prototype.filter()
filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
<pre>
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
</pre>
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## Array.prototype.map()
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다
<pre>
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
</pre>
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Array.prototype.reduce()
reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
<pre>
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
</pre>
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

## String.prototype.split()
split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
<pre>
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);
// expected output: "fox"

const chars = str.split('');
console.log(chars);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
</pre>
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split

### Set
Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있습니다.
<pre>
var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add('some text'); // Set { 1, 5, 'some text' }
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o와 다른 객체를 참조하므로 괜찮음
</pre>
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

### Map
맵은 객체와 달리 키를 문자형으로 변환하지 않습니다. 키엔 자료형 제약이 없습니다. map을 사용할 땐 map전용 메서드 set, get 등을 사용해야만 합니다.
<pre>
let map = new Map();

map.set('1', 'str1');   // 문자형 키
map.set(1, 'num1');     // 숫자형 키
map.set(true, 'bool1'); // 불린형 키

// 객체는 키를 문자형으로 변환한다는 걸 기억하고 계신가요?
// 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다. 따라서 아래의 코드는 출력되는 값이 다릅니다.
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
</pre>
- https://ko.javascript.info/map-set

### Set과 Map이 Object/Array와 다른 점
객체 – 키가 있는 컬렉션을 저장함
배열 – 순서가 있는 컬렉션을 저장함
맵(Map)은 키가 있는 데이터를 저장한다는 점에서 객체와 유사합니다. 다만, 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있습니다.
셋(Set)은 중복을 허용하지 않는 값을 모아 놓은 특별한 컬렉션입니다. 셋에 키가 없는 값이 저장됩니다.

### 언제 Set과 Map이 유용하게 쓰이나

방문자 방명록을 만든다고 가정해 봅시다. 한 방문자가 여러 번 방문해도 방문자를 중복해서 기록하지 않겠다고 결정 내린 상황입니다. 즉, 한 방문자는 '단 한 번만 기록’되어야 합니다.
이때 적합한 자료구조가 바로 Set입니다.
- https://ko.javascript.info/map-set
