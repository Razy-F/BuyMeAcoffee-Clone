import Link from "next/link";
import { LiaMugHotSolid } from "react-icons/lia";

import { Button } from "./ui/button";
import { auth, signOut } from "@/auth";
import { FaUser } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = async () => {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0];

  return (
    <header className="mb-16">
      <div className="mx-auto flex max-w-2xl justify-between px-4 py-4">
        <Link href="/" className="inline-flex items-center gap-1">
          <LiaMugHotSolid className="text-[32px]" />

          <span className="mt-2">Buy me a coffe</span>
        </Link>
        <nav className="mt-2 flex items-center gap-6">
          <Link href={"/about"}>About</Link>
          <Link href={"/about"}>FAQ</Link>
          <Link href={"/about"}>Contact</Link>
          <div className="flex gap-4">
            {session && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <FaUser />
                    My Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="flex gap-2">
                    {firstName} ☕
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link className="w-full" href={"/profile"}>
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <form
                      action={async () => {
                        "use server";
                        await signOut();
                      }}
                      className="w-full"
                    >
                      <Button className="w-full">Log out</Button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            {!session && (
              <>
                <Button
                  className="ml-4 rounded-full border-2 bg-transparent text-foreground"
                  asChild
                >
                  <Link href={"/log-in"}>Log in</Link>
                </Button>
                <Button className="rounded-full" asChild>
                  <Link href={"/sign-in"}>Sign up</Link>
                </Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
