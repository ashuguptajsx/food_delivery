'use client'
import PropTypes from 'prop-types'

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
          className="w-16 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          min="1"
        />
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 transition-colors duration-300"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}