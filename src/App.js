import React from "react";
import SignUp from "./components/SignUp";
import Buttons from "./components/Buttons";
import PostHome from "./components/PostHome";

export default function App() {
  return (
    <div className="App">
      <SignUp />

      <br></br>
      <br></br>
      <PostHome />

      <Buttons />
    </div>
  );
}
