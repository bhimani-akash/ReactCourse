import React from "react";
import ReactDOM from "react-dom";

// function getButtonText() {
//   return "Click on Me!";
// }

const App = () => {
  //   const buttonText = "Click Me!";
  const buttonText = { text: "Click Me!" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
        {/* {getButtonText()} */}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
