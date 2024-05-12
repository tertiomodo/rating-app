"use client";

import { useState } from "react";
import { H } from "../H/H";
import { Button } from "../Button/Button";
import { P } from "../P/P";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <H size="h3">Counter is: {counter}</H>
      <P size="L">Counter is: {counter}</P>
      <Button color="primary" onClick={() => setCounter(counter + 1)}>
        Up counter
      </Button>
    </>
  );
}
