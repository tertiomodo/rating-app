"use client";

import { Props } from "./Body.props";
import { useState } from "react";
import { H, Button, P, Tag, Counter, Rating } from "@/components";

export function Body({ customClass }: Props) {
  const [rating, setRating] = useState(3);

  return (
    <main className={customClass}>
      <H size="h1">Привет мир!</H>
      <H size="h2">Привет мир!</H>
      <H size="h3">Привет мир!</H>
      <Counter />
      <Button color="primary">Primary button</Button>
      <Button color="white" arrowImg>
        Button with arrow
      </Button>
      <Button color="white">Button without arrow</Button>
      <P size="L">Large</P>
      <P size="M">Medium</P>
      <P size="S">Small</P>
      <Tag largeSize color="primary" link="http://www.google.com">
        primary
      </Tag>
      <Tag color="white">white</Tag>
      <Tag color="blue" largeSize>
        blue
      </Tag>
      <Tag color="red" link="http://www.google.com">
        red
      </Tag>
      <Tag color="gray">gray</Tag>
      <Rating isEditable rating={rating} setRating={setRating} />
      <h2 style={{ color: "#00b900" }}>Main (app/page.tsx)</h2>
    </main>
  );
}
