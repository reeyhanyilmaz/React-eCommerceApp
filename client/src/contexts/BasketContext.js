import { useState, useEffect, createContext, useContext } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  //sepetteki ürünlerimiz.
  const [basketItems, setBasketItems] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [count, setCount] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //     const totalPrice = basketItems.reduce((total, item) => total + item.price, 0);
  //     setTotal(totalPrice);
  //     setCount(basketItems.length);
  // }, [basketItems]);

  //sepete ekleyeceğimiz func.
  const addToBasket = (data, findBasketItems) => {
    //sepette yoksa sepete ekleyecek.
    if (!findBasketItems) {
      return setBasketItems((basketItems) => [...basketItems, data]);
    }

    //sepette varsa sepetten kaldıracak.
    const filtered = basketItems.filter(
      (item) => item.id !== findBasketItems.id
    );
    setBasketItems(filtered);
  };

  // const removeFromBasket = (id) => {
  //     const newBasket = basketItems.filter((item) => item.id !== id);
  //     setBasketItems(newBasket);
  // };

  // const clearBasket = () => {
  //     setBasketItems([]);
  // };

  // const updateBasket = (id, quantity) => {
  //     const newBasket = basketItems.map((item) => {
  //     if (item.id === id) {
  //         return { ...item, quantity };
  //     }
  //     return item;
  //     });
  //     setBasketItems(newBasket);
  // };

  const values = {
    basketItems,
    setBasketItems,
    // total,
    // count,
    // isLoading,
    // isError,
    addToBasket,
    // removeFromBasket,
    // clearBasket,
    // updateBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
