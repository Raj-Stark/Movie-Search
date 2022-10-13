import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/movies/:id"
            element={<SingleMovie></SingleMovie>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
