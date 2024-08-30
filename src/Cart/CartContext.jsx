import React, { useState, useEffect } from 'react';
import { createContext } from 'react';

// Function to get cart data from localStorage
const getLocalCartData = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : []; // Return empty array if no cart data
};

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCartItem: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  updateQuantity: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState(getLocalCartData()); // Initialize with localStorage data

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartProducts));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartProducts]);

  function getProductQuantity(id) {
    const product = cartProducts.find((product) => product.id === id);
    return product ? product.quantity : 0;
  }

  function addOneToCart(id, name, image, price) {
    const qty = getProductQuantity(id);
    if (qty === 0) {
      setCartProducts((prevCart) => [
        ...prevCart,
        {
          id,
          name,
          quantity: 1,
          image,
          price,
        },
      ]);
    } else {
      setCartProducts((prevCart) =>
        prevCart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCartItem(id) {
    const qty = getProductQuantity(id);
    if (qty === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts((prevCart) =>
        prevCart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((prevCart) =>
      prevCart.filter((product) => product.id !== id)
    );
  }

  function getTotalCost() {
    return cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
  }

  function updateQuantity(id, quantity) {
    if (quantity < 0) return; // Prevent negative quantities
    setCartProducts((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  }

  return (
    <CartContext.Provider
      value={{
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCartItem,
        deleteFromCart,
        getTotalCost,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
