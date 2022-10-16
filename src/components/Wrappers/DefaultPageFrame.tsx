import React, { FC, ReactNode } from "react";

const DefaultPageFrame: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
export default DefaultPageFrame;
