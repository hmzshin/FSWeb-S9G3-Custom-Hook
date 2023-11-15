import React from "react";
import { useState } from "react";
import useLocalStorageKullan from "./localStorageKullan";

const useGeceModuAc = (initialValue) => {
  const isLocalDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? true
    : false;
  const [geceModu, setGeceModu] = useLocalStorageKullan(
    "geceModu",
    initialValue ? initialValue : isLocalDarkTheme
  );

  const changeHandler = (val) => {
    setGeceModu(val);
    localStorage.setItem("geceModu", JSON.stringify(val));
  };

  return [geceModu, changeHandler];
};

export default useGeceModuAc;
