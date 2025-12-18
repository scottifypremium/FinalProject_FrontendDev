"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import CategoryFilter from "@/components/category-filter"
import SearchBar from "@/components/search-bar"
import ProductGrid from "@/components/product-grid"
import ProductModal from "@/components/product-modal"
import Cart from "@/components/cart"
import Footer from "@/components/footer"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  const products = [
    {
      id: 1,
      name: "Pro Wireless Microphone System",
      category: "microphones",
      price: 299,
      image: "/professional-wireless-microphone-system.jpg",
      description:
        "Premium UHF wireless microphone system with crystal-clear audio and 300ft range. Perfect for karaoke venues and live events.",
      specs: "UHF Band | 300ft Range | 20Hz-20kHz Response",
    },
    {
      id: 2,
      name: "Professional Karaoke Amplifier",
      category: "amplifiers",
      price: 599,
      image: "/professional-karaoke-amplifier.jpg",
      description:
        "1000W stereo karaoke amplifier with echo and reverb effects. Dual microphone inputs and line-in for backing tracks.",
      specs: "1000W | Echo/Reverb | Dual Mic Input | USB Support",
    },
    {
      id: 3,
      name: "Studio Monitor Speakers (Pair)",
      category: "speakers",
      price: 449,
      image: "/studio-monitor-speakers-professional.jpg",
      description:
        "High-fidelity studio monitor speakers with 6.5-inch woofers. Ideal for karaoke backing tracks and professional audio reproduction.",
      specs: '2x 6.5" Woofers | 150W Total | Flat Response',
    },
    {
      id: 4,
      name: "Compact PA Speaker System",
      category: "speakers",
      price: 399,
      image: "/compact-pa-speaker-system-portable.jpg",
      description:
        "Portable 400W PA speaker system with built-in mixer. Perfect for small venues and portable karaoke setups.",
      specs: "400W | Built-in Mixer | 2 Mic Inputs | Portable",
    },
    {
      id: 5,
      name: "Dynamic Vocal Microphone",
      category: "microphones",
      price: 129,
      image: "/dynamic-vocal-microphone-professional.jpg",
      description:
        "Industry-standard dynamic microphone for lead vocals. Cardioid pattern reduces feedback and ambient noise.",
      specs: "Cardioid Pattern | 50Hz-15kHz | Feedback Resistant",
    },
    {
      id: 6,
      name: "Karaoke Digital Mixer",
      category: "amplifiers",
      price: 799,
      image: "/digital-mixer-karaoke-professional.jpg",
      description:
        "Professional digital mixer with voice effects, echo, reverb, and harmonizer. USB recording capabilities.",
      specs: "Digital Effects | Harmonizer | USB Recording | 8-Channel",
    },
    {
      id: 7,
      name: "Condenser Karaoke Microphone",
      category: "microphones",
      price: 189,
      image: "/condenser-karaoke-microphone-professional.jpg",
      description:
        "Condenser microphone with superior sensitivity for studio-quality vocal recordings and live performances.",
      specs: "Omnidirectional | USB Connection | Low Noise",
    },
    {
      id: 8,
      name: "Portable Karaoke Speaker Box",
      category: "speakers",
      price: 249,
      image: "/portable-karaoke-speaker-box.jpg",
      description:
        "Compact all-in-one karaoke speaker with built-in amplifier and effects. Wireless connectivity for easy setup.",
      specs: "200W | Wireless | Effects | Rechargeable Battery",
    },
  ]

  const categories = ["all", "karaoke", "cds", "microphone", "amplifiers", "speakers"]

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId)
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)))
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />

      {showCart ? (
        <Cart
          items={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onContinueShopping={() => setShowCart(false)}
        />
      ) : (
        <main className="container mx-auto px-4 py-12 flex-1">
          <div className="mb-12">
            <h1 className="text-balance text-4xl font-serif mb-2 text-accent">Pro Audio Systems</h1>
            <p className="text-muted-foreground max-w-2xl">
              Premium karaoke and sound systems engineered for professionals. From wireless microphones to professional
              amplifiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <aside className="md:col-span-1">
              <div className="space-y-6 sticky top-24">
                <div>
                  <h2 className="text-sm font-semibold mb-4 uppercase tracking-wide text-accent">Categories</h2>
                  <CategoryFilter categories={categories} selected={selectedCategory} onSelect={handleCategorySelect} />
                </div>
              </div>
            </aside>

            <div className="md:col-span-3">
              <div className="mb-8">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>

              <ProductGrid
                products={filteredProducts}
                onProductClick={setSelectedProduct}
                onAddToCart={handleAddToCart}
              />

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No products found. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  )
}
