import Link from "next/link";
import { FC } from "react";

export const DevButton: FC<{ title: string; href: string }> = ({
  title,
  href,
}) => {
  return (
    <Link href={href}>
      <a className="py-1 font-mono lowercase border border-transparent cursor-pointer hover:border-cyber-mint-500">
        {title}
      </a>
    </Link>
  );
};
