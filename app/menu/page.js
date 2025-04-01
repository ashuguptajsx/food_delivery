'use client'
import { useState } from 'react'
import FoodCard from '../components/FoodCard'

const menuItems = [
  { id: 1, name: 'Cheese Burger', price: 8.99, image: '/burger.jpg', category: 'Burgers' },
  { id: 2, name: 'Pepperoni Pizza', price: 12.99, image: '/pizza.jpg', category: 'Pizzas' },
]

export default function Menu() {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map(item => (
          <FoodCard key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}