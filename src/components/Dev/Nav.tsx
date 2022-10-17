import Link from "next/link";
import { FC } from "react";
import { DevPageProps } from "../../layouts/DevPage.layout";
import { DevButton } from "./shared/button";
export const NavBar: FC<{ nav: DevPageProps["nav"] }> = ({ nav }) => {
  return (
    <nav className="flex h-screen gap-2 pt-2 font-mono text-cyber-mint-500 vertical-text bg-cyber-black-500">
      {nav.map((item) => (
        <DevButton key={item.name} title={item.name} href={item.href} />
      ))}
    </nav>
  );
};
