"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface CartContextProps {
  addedToCart: boolean;
  persistCartItem: (value: boolean) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const persistCartItem = (value: boolean) => {
    setAddedToCart(value);
    sessionStorage.setItem("addedToCart", JSON.stringify(value));
  };

  useEffect(() => {
    const savedCartState = sessionStorage.getItem("addedToCart");
    if (savedCartState) {
      persistCartItem(JSON.parse(savedCartState));
    }
  }, []);

  return (
    <CartContext.Provider value={{ addedToCart, persistCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
