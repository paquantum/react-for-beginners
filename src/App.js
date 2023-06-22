import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

/*
  BrowserRouter, HashRouter 중에
  BrowserRouter를 사용한 방식
*/
function App() {
  return <Router>
    <Routes>
      <Route path="/hello" element={<h1>hello</h1>}></Route>
      <Route path="/movie/:id" element={<Detail />}></Route>
      <Route path="/" element={<Home />}></Route> 
    </Routes>
  </Router>
}

export default App;