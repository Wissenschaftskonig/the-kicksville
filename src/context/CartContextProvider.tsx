"use client";
import { StaticImageData } from "next/image";
import React, { createContext, useContext, useEffect, useState } from "react";

interface CartItem {
	id: string;
	name: string;
	size?: string;
	price: string;
	image: StaticImageData | string;
	quantity: number;
}

interface CartContextProps {
	cartItems: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: string, size: string) => void;
	updateQuantity: (id: string, size: string, quantity: number) => void;
	clearCart: () => void;
	calculateTotal: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	useEffect(() => {
		const savedCartItems = sessionStorage.getItem("cartItems");
		if (savedCartItems) {
			setCartItems(JSON.parse(savedCartItems));
		}
	}, []);

	const calculateTotal = () => {
		return cartItems.reduce((total, item) => {
			const price = parseFloat(item.price.replace(/,/g, ""));
			return total + price * item.quantity;
		}, 0);
	};

	const addToCart = (item: CartItem) => {
		setCartItems((currentItems) => {
			const existingItemIndex = currentItems.findIndex(
				(cartItem) => cartItem.id === item.id
			);

			let updatedItems;
			if (existingItemIndex > -1) {
				updatedItems = [...currentItems];
				updatedItems[existingItemIndex].quantity += item.quantity;
			} else {
				updatedItems = [...currentItems, item];
			}

			sessionStorage.setItem("cartItems", JSON.stringify(updatedItems));
			return updatedItems;
		});
	};

	const removeFromCart = (id: string) => {
		setCartItems((currentItems) => {
			const updatedItems = currentItems.filter((item) => !(item.id === id));

			sessionStorage.setItem("cartItems", JSON.stringify(updatedItems));
			return updatedItems;
		});
	};

	const updateQuantity = (id: string, size: string, quantity: number) => {
		setCartItems((currentItems) => {
			const updatedItems = currentItems.map((item) =>
				item.id === id ? { ...item, quantity } : item
			);

			sessionStorage.setItem("cartItems", JSON.stringify(updatedItems));
			return updatedItems;
		});
	};

	const clearCart = () => {
		setCartItems([]);
		sessionStorage.removeItem("cartItems");
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				calculateTotal,
			}}
		>
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
