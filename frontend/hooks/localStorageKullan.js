import { useState } from "react";

const useLocalStorageKullan = (key, initialValue) => {
  const [saved, setSaved] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const changeHandler = (val) => {
    setSaved(val);
    localStorage.setItem(key, JSON.stringify(val));
  };

  return [saved, changeHandler];
};

export default useLocalStorageKullan;
