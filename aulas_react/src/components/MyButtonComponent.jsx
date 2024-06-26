import { useState } from "react";

export default function () {
  const [counter, setCounter] = useState(0);

  const addCounterOnClick = () => setCounter(counter + 1);

  return <button onClick={addCounterOnClick}>Clicou {counter} vezes</button>;
}
