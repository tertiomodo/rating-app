import { Htag, Button } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Привет мир!</Htag>
      <Image src="./next.svg" alt="Next logo" width={100} height={20} priority />
      <Button disabled appearance="primary">
        Primary button
      </Button>
      <Button appearance="ghost">Ghost button</Button>
    </>
  );
}
