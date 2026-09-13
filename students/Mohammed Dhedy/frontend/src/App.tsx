import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [name]=useState("mohammed dhedy");

  return (
    <>
      <Header />
      <div>
        my name is {name}
      </div>
    </>
  );
}

export default App;
