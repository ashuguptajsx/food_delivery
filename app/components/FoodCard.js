'use client'
import toast from 'react-hot-toast'

export default function FoodCard({ item, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(item)
    toast.success(`${item.name} added to cart!`)
  }

  return (
    <div className="border rounded-lg p-4 hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out bg-white">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded mb-4 hover:scale-105 transition-transform duration-300"
      />
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600">${item.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        Add to Cart
      </button>
    </div>
  )
}