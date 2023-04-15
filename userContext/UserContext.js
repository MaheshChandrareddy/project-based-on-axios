import { createContext, useState, useEffect } from "react";

export let contextApi = createContext();

export const UserContext = ({ children }) => {
  let [state, setState] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setState(true);
    } else {
      setState(false);
    }
  }, []);
  return <contextApi.Provider value={state}>{children}</contextApi.Provider>;
};
