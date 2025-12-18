"use client"

export default function ProductGrid({ products, onProductClick, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="bg-slate-900 rounded-lg overflow-hidden shadow-md shadow-slate-800/50 hover:shadow-lg hover:shadow-amber-500/20 transition-smooth cursor-pointer group flex flex-col h-full animate-fade-in animate-delay-100"
          style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
        >
          <div className="relative overflow-hidden h-64 bg-slate-700">
              <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
            />
          </div>

          <div className="p-4 space-y-3 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-white group-hover:text-amber-500 transition-colors">
              {product.name}
            </h3>

            <p className="text-sm text-slate-400 line-clamp-2 flex-grow">{product.description}</p>

            <div className="flex items-center justify-between pt-2 border-t border-slate-700 mt-auto">
              <span className="text-2xl font-bold text-amber-500">₱{product.price}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => onProductClick(product)}
                  className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-smooth hover:scale-105 active:scale-95"
                >
                  Details
                </button>
                <button
                  onClick={() => onAddToCart(product)}
                  className="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded font-semibold text-sm transition-smooth hover:scale-105 active:scale-95"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
