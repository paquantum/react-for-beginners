import { useState, useEffect } from "react";

// component가 destroy될 때 실행 될 function 생성
// Cleanup function으로, 그냥 함수이지만 destroy될 때 뭔가 할 수 있도록 해줌
// 사라질 때 분석 API를 보내거나 이벤트리스너를 지욱거나 콘솔로그하거나 등등
// 중요한건 언제 create되고 언제 destroy 된다는 것
function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;