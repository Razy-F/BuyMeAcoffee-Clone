import Link from "next/link";
import React from "react";
import { PiCoffeeFill } from "react-icons/pi";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="mb-16">
      <div className="mx-auto flex max-w-2xl justify-between px-4 py-4">
        <Link href="/" className="inline-flex items-center gap-1">
          <PiCoffeeFill className="text-[32px]" />
          <span className="mt-2">Buy me a coffe</span>
        </Link>
        <nav className="mt-2 flex items-center gap-6">
          <Link href={"/about"}>About</Link>
          <Link href={"/about"}>FAQ</Link>
          <Link href={"/about"}>Contact</Link>
          <div className="flex gap-4">
            <Button className="ml-4 rounded-full border-2 bg-transparent text-foreground">
              Login
            </Button>
            <Button className="rounded-full bg-yellow-300 text-foreground">
              Sign up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
