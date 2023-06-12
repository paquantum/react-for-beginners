// import Button from "./Button";
// import styles from "./App.module.css"
import { useState, useEffect } from "react";

/*
  useEffect()는 특정 부분이 변경됐을 때,
  원하는 코드만 실행할 수 있도록 도와줌
*/
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(() => {
    console.log("i run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} 
          type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;