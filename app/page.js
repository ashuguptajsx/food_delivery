'use client'
import { useState, useEffect } from 'react'
import Banner from './components/Banner'
import FoodCard from './components/FoodCard'
import { motion } from 'framer-motion'

const categories = [
  { id: 1, name: 'Burgers', icon: '🍔' },
  { id: 2, name: 'Pizzas', icon: '🍕' },
  { id: 3, name: 'Drinks', icon: '🥤' },
  { id: 4, name: 'Desserts', icon: '🍰' }
]

const featuredItems = [
  { id: 1, name: 'Classic Cheese Burger', price: 8.99, image: '/burger.jpg', category: 'Burgers', rating: 4.7, description: 'Juicy beef patty with melted cheese, fresh lettuce, and our special sauce' },
  { id: 2, name: 'Pepperoni Pizza', price: 12.99, image: '/pizza.jpg', category: 'Pizzas', rating: 4.8, description: 'Hand-tossed pizza topped with premium pepperoni and mozzarella' },
  { id: 3, name: 'Refreshing Cola', price: 2.99, image: '/cola.jpg', category: 'Drinks', rating: 4.5, description: 'Ice cold cola served in a chilled glass' },
  { id: 4, name: 'Chocolate Brownie', price: 5.99, image: '/brownie.jpg', category: 'Desserts', rating: 4.9, description: 'Warm chocolate brownie with vanilla ice cream' }
]

export default function Home() {
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showNotification, setShowNotification] = useState(false)
  
  const filteredItems = selectedCategory 
    ? featuredItems.filter(item => item.category === selectedCategory) 
    : featuredItems
  
  const addToCart = (item) => {
    setCart([...cart, item])
    setShowNotification(true)
    
    setTimeout(() => {
      setShowNotification(false)
    }, 2000)
  }
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-orange-50">
      <Banner />
      
      {showNotification && (
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
        >
          Item added to cart! 🎉
        </motion.div>
      )}
      
      <div className="fixed bottom-4 right-4 z-30">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-orange-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer relative"
        >
          <span className="text-xl">🛒</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </motion.div>
      </div>
      
      <section className="container mx-auto py-8 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-gray-800"
        >
          Browse Categories
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4 mb-8 justify-center"
        >
          <motion.button
            variants={item}
            whileHover={{ scale: 1.05, backgroundColor: "#f97316", color: "white" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out ${!selectedCategory ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            All
          </motion.button>
          
          {categories.map(category => (
            <motion.button
              key={category.id}
              variants={item}
              whileHover={{ scale: 1.05, backgroundColor: "#f97316", color: "white" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out flex items-center gap-2 ${selectedCategory === category.name ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>
        
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-extrabold mb-8 text-orange-600 relative inline-block"
          >
            {selectedCategory || "Featured Items"}
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 rounded-full origin-left"
            />
          </motion.h2>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={item}
                whileHover={{ y: -10, transition: { type: 'spring', stiffness: 200 } }}
                className="h-full"
              >
                <FoodCard item={item} onAddToCart={addToCart} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-orange-100 rounded-2xl p-6 shadow-inner"
        >
          <h2 className="text-2xl font-bold mb-3 text-orange-800">Today&apos;s Special Offer 🔥</h2>
          <p className="text-orange-700 mb-4">Order any two items and get a free dessert! Limited time offer.</p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ea580c" }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            View Details
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}