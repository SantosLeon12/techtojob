import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  const classes = ["mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
