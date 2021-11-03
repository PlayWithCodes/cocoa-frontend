## 1. Breakpoints?
개발자가 의도적으로 프로그램을 멈추고 변수, 버퍼, 또는 메모리의 내용을 자세히 보기 위해 표시하는 지점입니다. 디버깅 하려는 함수의 일부 또는 코드 라인이 breakpoint로 표시됩니다. 실행 중인 프로그램이 breakpoint에 도달하면 프로그램은 멈추고 컨트롤은 개발자에게 넘겨집니다. 개발자는 한번에 한줄씩 프로그램을 실행하며 종료지점까지 가거나, 다음 breakpoint까지, 또는 오류가 날 때까지 진행합니다. - _https://www.pcmag.com/encyclopedia/term/breakpoint_

## 2. Watch 사용법
Visual Studio 기준으로 Watch창을 열고 검사하려는 변수명을 Name 컬럼에 타이핑하거나, 소스에서 변수를 우클릭하여 추가하거나, 또는 Watch창에 변수명을 Drag & Drop방식으로 추가하여 사용합니다. Watch창에 입력된 변수의 값을 확인하고 값을 변경하여 테스트도 가능하며 'v1 == v2' 같은 표현식을 입력하여 결과를 볼 수도 있고 함수명을 입력한 후에 매개변수를 넘겨서 호출도 가능합니다. Watch창에 추가된 변수의 값이 실행 중에 변경되면 새로운 값으로 반영되고
Watch창의 모든 변수를 제거하려면 우클릭하고 Clear All 하면 됩니다. Watch창을 여러 개 같은 선상에 띄워서 배열 속 컴플렉스한 객체 등을 쉽게 검사할 수도 있고 서로 다른 창의 객체를 Drag & Drop방식으로 이동 가능하며 Watch창의 현재 인스턴스를 Immediate창을 통해 새로운 객체의 인스턴스 할당도 가능합니다. - _https://csharp-video-tutorials.blogspot.com/2014/04/part-6-watch-window-in-visual-studio_27.html_

## 3. Call Stack 의미
Call Stack은 현재 실행지점까지 호출된 활성화된 함수들의 목록으로 새로운 함수가 호출되면 호출된 함수는 Call Stack의 최상단에 추가되며 현재 함수가 실행을 마치면 호출한 지점으로 돌아가는데 이때 Call Stack의 최상단에서 제거되고 컨트롤은 바로 아래 함수로 돌아갑니다. - _https://www.learncpp.com/cpp-tutorial/using-an-integrated-debugger-the-call-stack/_

## 4. Step over / Step into / Step out
Step over는 Breakpoint라인을 실행하면서 함수가 있더라도 함수 내부로 들어가지 않고 호출만 한 후에 다음으로 넘어갑니다. Step into와 Step over의 차이점은 해당 라인에 함수가 있으면 함수 내부로 들어갑니다. Step out은 함수의 끝까지 실행시키고 호출시킨 곳으로 되돌아 갑니다. - _https://okky.kr/article/605812_
