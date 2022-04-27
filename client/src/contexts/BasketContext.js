import { useState, useEffect, createContext, useContext } from "react";

const BasketContext = createContext();

//localS. tanım varsa onu al yoksa bos array tanımla.
const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];

const BasketProvider = ({ children }) => {
  //sepetteki ürünlerimiz.
  const [basketItems, setBasketItems] = useState(defaultBasket);
  // const [total, setTotal] = useState(0);
  // const [count, setCount] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //     const totalPrice = basketItems.reduce((total, item) => total + item.price, 0);
  //     setTotal(totalPrice);
  //     setCount(basketItems.length);
  // }, [basketItems]);

  //useEffect ile basketItems değiştiğinde localStorage'a kaydet.
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItems));
  }, [basketItems]);
   
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

  //verilen item_id haricindekiler sepette olacak.
  const removeFromBasket = (item_id) => {
      const newBasket = basketItems.filter((item) => item.id !== item_id);
      setBasketItems(newBasket);
  };

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
    removeFromBasket,
    // clearBasket,
    // updateBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
