import React, { HtmlHTMLAttributes, FC } from "react";

export const Input: FC<HtmlHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...args
}) => {
  return (
    <div className="relative flex">
      <input
        className={`bg-[rgba(0,0,0,0.06)] dark:bg-secondary-3 rounded-[100px] flex-1 outline-none p-[.5rem_1rem]  ${className}`}
        {...args}
      />
    </div>
  );
};
