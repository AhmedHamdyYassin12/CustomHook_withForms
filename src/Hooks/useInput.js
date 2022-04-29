import { useState } from "react";
const useInput = () => {
  const [inputValueHook, setInputValueHook] = useState(false);
  const [touchedHook, setIsTouchedHook] = useState(false);

  const onchangeDataHandler = (event) => {
    setInputValueHook(event.target.value);
    console.log(inputValueHook);
  };

  return {
    inputValueFromFunction: inputValueHook,
    touchedHookFromFunction: touchedHook,
    onchangeDataHandlerFunction: onchangeDataHandler,
    setInputValueHookFromFunction: setInputValueHook,
    setIsTouchedHookFromFunction: setIsTouchedHook,
  };
};
export default useInput;
