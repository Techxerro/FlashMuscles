import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const {
    items,
    addOneToCart,
    removeOneFromCartItem,
    deleteFromCart,
    getTotalCost,
    updateQuantity,
  } = useContext(CartContext);

  const totalCost = getTotalCost();

  return (
    <div className="cart-page mx-4 md:mx-16 lg:mx-24 my-10 md:my-24">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {items.length === 0 ? (
        <p className="text-xl">Your cart is empty</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item flex justify-between items-center mb-8">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
              <div className="flex-1">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <p className="text-lg">Price: ₹{item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => removeOneFromCartItem(item.id)}
                    className="text-lg font-bold px-2 py-1 border rounded mr-2"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    className="text-lg text-center border rounded w-12"
                    min="1"
                  />
                  <button
                    onClick={() => addOneToCart(item.id, item.name, item.image, item.price)}
                    className="text-lg font-bold px-2 py-1 border rounded ml-2"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-lg font-bold">Total: ₹{item.price * item.quantity}</p>
                <button
                  onClick={() => deleteFromCart(item.id)}
                  className="text-red-600 font-bold mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="subtotal mt-8">
            <h2 className="text-2xl font-bold">Subtotal: ₹{totalCost}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
