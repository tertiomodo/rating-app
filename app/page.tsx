// import Htag from "@/components/Htag/Htag";
// import Button from "@/components/Button/Button";
import { Htag, Button } from "@/components";

export default function Home() {
  return (
    <>
      <Htag tag="h1">Привет мир!</Htag>
      <Button appearance="primary">Primary button</Button>
      <Button appearance="ghost">Ghost button</Button>
    </>
  );
}
