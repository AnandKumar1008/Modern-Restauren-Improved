import React, { createContext, useContext, useState } from "react";

export const MyContext = createContext();

const Provider = ({ children }) => {
  const [recipes, setReceipes] = useState([]);
  return (
    <>
      <MyContext.Provider value={{ recipes, setReceipes }}>
        {children}
      </MyContext.Provider>
    </>
  );
};
export default Provider;
