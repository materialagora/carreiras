import React, { FC, ReactNode, useEffect } from "react";

import { Header } from "components/organisms";

export const AppTemplate: FC<{ children: ReactNode }> = ({ children }) => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="fixed flex flex-col w-full h-full overflow-y-scroll dark:bg-secondary-1 dark:text-white">
      <Header />
      <div className="flex justify-center items-center">
        <div className="container">{children}</div>
      </div>
    </div>
  );
};
