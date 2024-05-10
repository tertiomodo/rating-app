import { H, Button, P, Tag } from "@/components";

export default function Home() {
  return (
    <>
      <H size="h1">Привет мир!</H>
      <H size="h2">Привет мир!</H>
      <H size="h3">Привет мир!</H>
      <Button disabled color="primary">
        Primary button
      </Button>
      <Button color="white" arrowImg={true}>
        Button with arrow
      </Button>
      <Button color="white">Button without arrow</Button>
      <P size="L">Large</P>
      <P size="M">Medium</P>
      <P size="S">Small</P>
      <Tag size="L" color="primary" link="http://www.google.com">
        primary
      </Tag>
      <Tag color="white">white</Tag>
      <Tag color="blue">blue</Tag>
      <Tag color="red" link="http://www.google.com">
        red
      </Tag>
      <Tag size="L" color="gray">
        gray
      </Tag>
    </>
  );
}
