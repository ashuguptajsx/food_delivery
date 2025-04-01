'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Banner() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-400 to-red-500 py-16 min-h-[300px] w-full">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            initial={{ 
              x: Math.random() * 100 - 50, 
              y: Math.random() * 100 - 50,
              scale: 0,
            }}
            animate={{ 
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              scale: [0, 2 + Math.random() * 8],
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 8 + Math.random() * 12
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '300px',
              height: '300px',
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
            Summer Food Festival!
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-xl mb-8 text-white font-medium max-w-lg mx-auto">
            Enjoy <span className="font-bold text-yellow-200">25% OFF</span> on all menu items this weekend! 
            Use code <span className="bg-white text-orange-600 px-2 py-1 rounded-md font-bold">SUMMER25</span>
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#f97316" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Order Now
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold shadow-md transition-all duration-300"
          >
            View Menu
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}