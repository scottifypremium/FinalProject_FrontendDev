"use client"

export default function Cart({ items, onRemove, onUpdateQuantity, onContinueShopping }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.01
  const total = subtotal + tax

  return (
    <main className="container mx-auto px-4 py-12 flex-1">
      <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg mb-6">Your cart is empty</p>
          <button
            onClick={onContinueShopping}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-slate-800 p-6 rounded-lg flex gap-6">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />

                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-white text-lg">{item.name}</h3>
                  <p className="text-amber-500 font-bold">₱{item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="bg-slate-700 hover:bg-slate-600 text-white w-8 h-8 rounded transition-colors"
                  >
                    −
                  </button>
                  <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="bg-slate-700 hover:bg-slate-600 text-white w-8 h-8 rounded transition-colors"
                  >
                    +
                  </button>
                </div>

                <div className="text-right space-y-2">
                  <p className="text-white font-bold">₱{(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 p-6 rounded-lg h-fit sticky top-24">
            <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6 pb-6 border-b border-slate-700">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>P{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Tax (1%)</span>
                <span>₱{tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between text-white font-bold text-lg mb-6">
              <span>Total</span>
              <span className="text-amber-500">₱{total.toFixed(2)}</span>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-lg transition-colors">
                Checkout
              </button>
              <button
                onClick={onContinueShopping}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
