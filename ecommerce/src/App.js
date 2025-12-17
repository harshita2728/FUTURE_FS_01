import React, { useState } from "react";

function App() {
  // Product list (static data)
  const products = [
    { id: 1, name: "T-Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1200 },
    { id: 3, name: "Bag", price: 800 }
  ];

  // Cart state (empty at start)
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  // Total price
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Checkout
  const placeOrder = () => {
    alert("Order placed successfully!");
    setCart([]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Mini E-Commerce Store</h1>

      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <strong>{product.name}</strong> - ₹{product.price}
          <button onClick={() => addToCart(product)} style={{ marginLeft: "10px" }}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price} × {item.qty}
          <button onClick={() => increaseQty(item.id)}> + </button>
          <button onClick={() => decreaseQty(item.id)}> - </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      {cart.length > 0 && (
        <>
          <h2>Checkout</h2>
          <input placeholder="Name" /><br /><br />
          <input placeholder="Address" /><br /><br />
          <button onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default App;


