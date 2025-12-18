"use client"

export default function SortFilter({ 
  sortBy, 
  onSortChange, 
  selectedType, 
  onTypeChange, 
  showTypeFilter = false 
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6 animate-fade-in">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-slate-300">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-smooth"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {showTypeFilter && (
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-slate-300">Type:</label>
          <div className="flex gap-2">
            {["all", "HDD", "SD", "SSD", "DVD"].map((type) => (
              <button
                key={type}
                onClick={() => onTypeChange(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-smooth hover:scale-105 active:scale-95 ${
                  selectedType === type
                    ? "bg-amber-500 text-slate-900"
                    : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                }`}
              >
                {type === "all" ? "All Types" : type}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

