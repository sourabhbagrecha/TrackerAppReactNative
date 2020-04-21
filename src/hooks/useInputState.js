import { useState } from "react"

export default ( initialVal="" ) => {
  const [state, setState] = useState(initialVal);
  const handleChange = val => {
    setState(val);
  };
  const reset = () => {
    setState("");
  };
  return [state, handleChange, reset];
}