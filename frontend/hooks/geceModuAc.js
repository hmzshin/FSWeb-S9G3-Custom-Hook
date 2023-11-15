import React from "react";
import { useState } from "react";

const useGeceModuAc = (key, initialValue) => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("theme");

    if (initialValue) {
      return initialValue;
    }

    if (localTheme) {
      return JSON.parse(localTheme);
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? true
        : false;
    }
  });

  const changeHandler = (val) => {
    setTheme(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [theme, changeHandler];
};

export default useGeceModuAc;
