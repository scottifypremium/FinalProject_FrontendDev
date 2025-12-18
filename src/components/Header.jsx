/* eslint-disable react/prop-types */
"use client"

import { useState } from "react"
import CategoryFilter from "./CategoryFilter"
import SearchBar from "./SearchBar"

export default function Header({
  cartCount,
  onCartClick,
  categories = [],
  selectedCategory,
  onCategorySelect,
  searchQuery = "",
  onSearchChange,
  onLogoClick,
}) {
  const [showCategories, setShowCategories] = useState(false)

  const handleSelect = (category) => {
    onCategorySelect?.(category)
    setShowCategories(false)
  }

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40 animate-slide-in-down">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onLogoClick}
          className="flex items-center gap-2 animate-slide-in-left focus:outline-none"
        >
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center transition-smooth hover:scale-110">
            <span className="text-slate-900 font-bold text-lg">
              <img src="spectrum.png" alt="logo" />
            </span>
          </div>
          <h1 className="text-2xl font-sans font-bold text-white">AudioVista</h1>
        </button>

        <div className="flex items-center gap-3 animate-slide-in-right">
          <div className="flex-1 max-w-md">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowCategories((s) => !s)}
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-smooth font-medium hover:scale-105 active:scale-95"
            >
              Categories
            </button>

            {showCategories && (
              <div className="absolute right-0 mt-2 w-56 p-3 bg-slate-900 border border-slate-800 rounded-lg shadow-lg z-50 animate-scale-in">
                <CategoryFilter
                  categories={categories}
                  selected={selectedCategory}
                  onSelect={handleSelect}
                />
              </div>
            )}
          </div>

          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-smooth text-amber-500 font-semibold hover:scale-105 active:scale-95"
          >
            <span>🛒</span>
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-900 font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
