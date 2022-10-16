import Link from "next/link";
import { DevButton } from "./shared/button";
export const NavBar = () => {
  return (
    <nav className="flex h-screen gap-2 pt-2 font-mono text-cyber-mint-500 vertical-text bg-cyber-black-500">
      <Link href="/dev">
        <DevButton title="Home" />
      </Link>
      <Link href="/">
        <DevButton title="About" />
      </Link>
    </nav>
  );
};
