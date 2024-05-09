import { H, Button, P, Tag } from "@/components";

export default function Home() {
  return (
    <>
      <H size="h1">Привет мир!</H>
      <H size="h2">Привет мир!</H>
      <H size="h3">Привет мир!</H>
      <Button disabled appearance="primary">
        Primary button
      </Button>
      <Button appearance="ghost" arrowImg={true}>
        Button with arrow
      </Button>
      <Button appearance="ghost">Button without arrow</Button>
      <P size="L">Large</P>
      <P size="M">Medium</P>
      <P size="S">Small</P>
      <Tag>This is tag</Tag>
    </>
  );
}
