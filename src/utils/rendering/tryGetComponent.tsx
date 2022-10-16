import { FC, ReactNode } from "react";

export const tryGetComponent = (
  component: FC<any>,
  props: any
): ReactNode | undefined => {
  // if no data is passed, return undefined
  if (!props) return;

  // if not a function, return undefined
  if (typeof component !== "function") return undefined;

  // return the component if it is available
  return component(props);
};
