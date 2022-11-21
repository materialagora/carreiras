import React, { HtmlHTMLAttributes, FC } from "react";

export const Button: FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...args
}) => {
  return (
    <div className="relative flex">
      <button
        className={`bg-primary-1 dark:bg-secondary-3 rounded-[100px] flex-1 outline-none p-[.5rem_1rem] text-white ${className}`}
        {...args}
      />
    </div>
  );
};
