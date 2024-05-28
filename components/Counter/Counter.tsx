"use client";

import { useState } from "react";
import { H } from "../H/H";
import { Button } from "../Button/Button";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <H size="h3">Counter is: {counter}</H>
      <Button color="primary" onClick={() => setCounter(counter + 1)}>
        Up counter
      </Button>
    </>
  );
}
