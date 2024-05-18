import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="mx-auto max-w-lg text-center">
      <h1 className="text-6xl font-bold">
        Fund your
        <br /> creative work
      </h1>
      <h2 className="mb-8 mt-4">
        Accept support for your work.
        <br /> It&apos;s easier than yo think
      </h2>
      <Button className="rounded-full bg-yellow-300 font-bold text-foreground">
        Start my page
      </Button>
    </section>
  );
}
