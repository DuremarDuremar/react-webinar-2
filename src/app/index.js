import React from "react";
import useSelector from "../hooks/use-selector";
import { Routes, Route } from "react-router-dom";
import Main from "./main";
import Basket from "./basket";
import Article from "./article";
import Authorization from "./authorization";

/**
 * Приложение
 * @return {React.ReactElement} Виртуальные элементы React
 */
function App() {
  const modal = useSelector((state) => state.modals.name);

  return (
    <>
      <Routes>
        <Route path={""} element={<Main />} />
        <Route path={"/login"} element={<Authorization />} />
        <Route path={"/articles/:id"} element={<Article />} />
      </Routes>
      {modal === "basket" && <Basket />}
    </>
  );
}

export default React.memo(App);
