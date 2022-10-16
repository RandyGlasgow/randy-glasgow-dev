import { FC } from "react";

export const DevButton: FC<{ title: string }> = ({ title }) => {
  return (
    <a className="py-1 font-mono lowercase border border-transparent cursor-pointer hover:border-cyber-mint-500">
      {title}
    </a>
  );
};
