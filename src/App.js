import "./App.css";
import useInput from "./Hooks/useInput";
function App() {
  const {
    inputValueFromFunction: inputValue,
    touchedHookFromFunction: touched,
    onchangeDataHandlerFunction: onchangeDataHandler1,
    setInputValueHookFromFunction: setInputValue,
    setIsTouchedHookFromFunction: setIsTouched,
  } = useInput();

  const {
    inputValueFromFunction: inputValue2,
    touchedHookFromFunction: touched2,
    onchangeDataHandlerFunction: onchangeDataHandler2,
    setInputValueHookFromFunction: setInputValue2,
    setIsTouchedHookFromFunction: setIsTouched2,
  } = useInput();

  const onsubmitHandler = (event) => {
    event.preventDefault();
    setIsTouched(true);
    setIsTouched2(true);

    if (inputValue === "" || inputValue2 === "") {
      console.log("none complete form");
      if (inputValue === "") {
        setInputValue(false);
      } else {
        setInputValue2(false);
      }
      return;
    }
  };

  return (
    <div className="parent">
      <form>
        <label htmlFor="nameInput1">Enter Data: </label>
        <input
          className="input1"
          id="nameInput1"
          placeholder="Enter anything"
          onChange={onchangeDataHandler1}
        ></input>
        <br />
        <label htmlFor="nameInput2">Enter Data: </label>
        <input
          className="input2"
          id="nameInput2"
          placeholder="Enter anything"
          onChange={onchangeDataHandler2}
        ></input>

        {(inputValue === false && touched === true) ||
        (inputValue2 === false && touched2 === true) ? (
          <p className="erroeMessage">Please Write Anything</p>
        ) : (
          console.log(inputValue + " " + inputValue2)
        )}

        <button onClick={onsubmitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default App;
