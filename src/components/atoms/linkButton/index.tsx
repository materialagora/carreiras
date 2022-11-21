import React, { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

export const LinkButton: FC<LinkProps> = ({ children, className, ...args }) => {
  return (
    <Link
      className={`bg-[rgba(0,0,0,0.06)] p-[.5rem_1rem] dark:bg-[rgba(255,255,255,.06)] text-primary-1 rounded-[100px] ${className}`}
      {...args}
    >
      {children}
    </Link>
  );
};
