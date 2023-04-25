import logo from "./logo.svg";
import "./App.css";
import Birthday from "./Birthday";
import "./style/style.css";
import { useState } from "react";

function App() {
  const [notclicked, setnotclicked] = useState(true);
  if (notclicked) {
    return (
      <div
        style={{
          height: "100vh",
          // width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "black",
        }}
      >
        <button
          onClick={(e) => setnotclicked(null)}
          style={{
            display: "inline-block",
            outline: "none",
            cursor: "pointer",
            fontWeight: 500,
            border: " 1px solid transparent",
            borderRadius: "2px",
            height: "36px",
            lineHeight: "34px",
            fontSize: "14px",
            color: "#ffffff",
            backgroundColor: "#007c89",
            transition:
              "background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s",
            padding: "0 18px",

            // :hover {
            //     color: #ffffff,
            //     background-color: #006570,
            // }
          }}
        >
          click me
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Birthday />
    </div>
  );
}

export default App;
