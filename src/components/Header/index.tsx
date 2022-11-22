import { ReactNode } from "react";
import { PromptProps } from "react-router-dom";

type Props = {
  children: ReactNode;
  className: string;
};

export const Header = ({ children, className }: Props) => {
  return <header className={className}>{children}</header>;
};
