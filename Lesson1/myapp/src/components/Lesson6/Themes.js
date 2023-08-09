import React, { useContext } from "react";
import { ThemeContext } from "./Context";
import { LangContext } from "./Context2";

const Themes = () => {
  const { mode, setMode, language, setLanguage, dataLang } =
    useContext(ThemeContext);
  // truy cap key Object :
  // const obj = {key : value}
  // 1. obj.key === normal
  // 2. obj.["key"] === number
  // 3. obj.[key] === vari
  return (
    <div>
      <p>{dataLang[language].profile}</p>
      <button onClick={() => setLanguage("en")}>Click</button>
    </div>
  );
};

export default Themes;
