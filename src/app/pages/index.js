import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import Layout from "../../components/layout";
import BasketSimple from "../../components/basket-simple";

function Page() {
  let { id = "none" } = useParams();

  const store = useStore();

  useEffect(() => {
    store.get("details").loadDetails(id);
  }, []);

  const select = useSelector((state) => ({
    item: state.details.item,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Открытие корзины
    openModalBasket: useCallback(() => store.get("modals").open("basket"), []),
    // Добавление в корзину
    addToBasket: useCallback((_id) => store.get("basket").addToBasket(_id), []),
  };

  return (
    <Layout head={<h1>{select.item.title}</h1>}>
      <BasketSimple
        sum={select.sum}
        amount={select.amount}
        onOpen={callbacks.openModalBasket}
      />
      <Link to={"/"}>back</Link>
      <div>{select.item.title}</div>
    </Layout>
  );
}

export default React.memo(Page);
