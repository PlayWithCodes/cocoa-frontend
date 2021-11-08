### Java에서 Hash
Hashtable은 구버전으로 동기화가 되어있고  
HashMap은 신버전으로 동기화가 되어있지 않음  
자료 저장 순서를 유지하지 않음  
key(중복x), value(중복o) (e.g. id, pwd)    
존재하는 key로 새로운 value입력 시 기존 value을 새로운 value로 변경함  
key, value 한 쌍을 Entry라고 함
Hashing기법으로 데이터를 저장해서 데이터가 많아도 검색이 빠르다  
Hashing은 Hash함수를 이용해서 Hash table의 자료를 저장하고 읽어오는 방법
Hash함수는 key를 입력하면 저장 위치인 배열의 index인 hash code를 리턴하고 배열 index의 linked list를 순차적으로 검색함
서로 다른 key라도 같은 값의 hash code를 반환할 수도 있다. 배열의 index로 이동하여 linked list에 서로 다른 key로 저장된 것을 찾음
Hashtable 이름의 유래는 1차원 배열의 요소에 linked list가 2차원 배열로 연결된 모습이 table과 같아서 붙여짐
배열의 접근성과 linked list의 변경이 유리한 장점을 합친 형태
HashMap은 배열 초기 용량을 생성자로 받기도 함
