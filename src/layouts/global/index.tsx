import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: Props) => {
  return (
    <header className="fixed w-screen py-4 bg-blue-dark">{children}</header>
  );
};
