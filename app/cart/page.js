'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Cheese Burger', price: 8.99, quantity: 1 },
    { id: 2, name: 'Pepperoni Pizza', price: 12.99, quantity: 1 },
  ])

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-4">
            <input 
              type="number" 
              value={item.quantity} 
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="w-16 p-2 border rounded"
            />
            <button 
              onClick={() => removeItem(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Link href="/checkout">
          <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  )
}