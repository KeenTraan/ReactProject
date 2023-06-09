/** @format */

import React, { useState } from "react";
export default function Home() {
  const [state, setState] = useState(0);
  const changeProps = () => {
    setState(state + 1);
  };
  return (
    <>
      <div>
        <h1>{state}</h1>
        <button onClick={changeProps}>click me</button>
      </div>
    </>
  );
}
