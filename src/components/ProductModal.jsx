"use client"

export default function ProductModal({ product, onClose, onAddToCart }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-slate-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-96 object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h2 className="text-3xl font-sans font-bold text-white mb-2">{product.name}</h2>
            <p className="text-4xl font-bold text-amber-500">₱{product.price}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-500 mb-2">Description</h3>
              <p className="text-slate-300 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-500 mb-2">Specifications</h3>
              <p className="text-slate-400 font-mono text-sm">{product.specs}</p>
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t border-slate-700">
            <button
              onClick={() => {
                onAddToCart(product)
                onClose()
              }}
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-lg transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={onClose}
              className="px-6 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
