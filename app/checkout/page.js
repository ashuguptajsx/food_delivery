'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order placed:', formData)
    toast.success('Order placed successfully!', {
      style: {
        border: '1px solid #f97316',
        padding: '16px',
        color: '#333',
      },
      iconTheme: {
        primary: '#f97316',
        secondary: '#fff',
      },
    })
    setFormData({
      name: '',
      address: '',
      phone: '',
    })
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Delivery Address</label>
            <textarea 
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Phone Number</label>
            <input 
              type="tel" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Place Order
          </button>
        </form>
        <div>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="border p-4 rounded">
            <p className="text-lg font-semibold mt-4">Total: $21.98</p>
          </div>
        </div>
      </div>
    </div>
  )
}