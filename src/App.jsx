"use client"

import { useState, useMemo } from "react"
import Header from "./components/Header"
import ProductGrid from "./components/ProductGrid"
import ProductModal from "./components/ProductModal"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import TermsOfService from "./components/TermsOfService"
import PrivacyPolicy from "./components/PrivacyPolicy"
import FAQ from "./components/FAQ"
import ContactUs from "./components/ContactUs"
import Warranty from "./components/Warranty"
import SortFilter from "./components/SortFilter"
import Toast from "./components/Toast"
import "./App.css"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("default")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showFAQ, setShowFAQ] = useState(false)
  const [showContactUs, setShowContactUs] = useState(false)
  const [showWarranty, setShowWarranty] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [showToast, setShowToast] = useState(false)

  const products = [ 

    {
      id: 1,
      name: "Alpha 2",
      category: "karaoke",
      type: "SD",
      price: 22999,
      image: "alpha2.jpg",
      description:
        "Platinum Karaoke Alpha 2 4K Wireless Mic Player with Digital and Android TV.",
      specs: "SD Card Player | 25,000+ Songs | HD Video | DreamSAM 5716B| Wireless Mic",
    },

    {
      id: 9,
      name: "Piano XL HDD",
      category: "karaoke",
      type: "HDD",
      price: 13999,
      image: "pianoxlhdd.png",
      description:
        "Platinum Karaoke Piano XL HDD Player with 23,000++ OPM & English Songs with Wired Microphone.",
      specs: "1TB HDD | HDMI | Mic Treble & Bass Effects | 15W",
    },
    {
      id: 10,
      name: "PIANO 4K",
      category: "karaoke",
      type: "SSD",
      price: 24999,
      image: "piano4k.jpg",
      description:
        "Platinum Karaoke Piano 4K Smart SSD Multimedia Player with Karaoke",
      specs: "SSD Player | 30,000+ Songs | 4K HD Video | DreamSAM 5716B | Android",
    },
    {
      id: 11,
      name: "PIANO XL SD",
      category: "karaoke",
      type: "SD",
      price: "8999",
      image: "pianoxlsd.jpg",
      description:
        "Platinum Karaoke Piano XL SD Player with 23,000++ Songs with Wired Microphone",
      specs: "32GB SD Card | 23,000+ Songs | HDMI | Mic EQ | DreamSAM 2634",
    },
    {
      id: 12,
      name: "Reyna 4",
      category: "karaoke",
      type: "DVD",
      price: 6999,
      image: "reyna4.jpg",
      description:
        "Affordable DVD karaoke player with 23,000+ songs. Great for home use and business investment.",
      specs: "DVD Support | 23,000+ Songs | HDMI | MIC EQ Control | DreamSAM 2634",
    },
    {
      id: 13,
      name: "KBOX 2",
      category: "karaoke",
      type: "DVD",
      price: 3999,
      image: "kbox2.jpg",
      description:
        "Platinum Karaoke K-BOX 2 KS40 Player 23,000++ OPM & English Songs with Wired Microphone.",
      specs: "DVD karaoke player | 23,000+ Songs | Karaoke Scoring | USB Song Expansion",
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

  const categories = ["all", "karaoke", "cds", "microphones", "amplifiers", "speakers"]

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setSelectedType("all") // Reset type filter when category changes
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Category-specific hero content
  const getHeroContent = () => {
    const categoryContent = {
      all: {
        title: "AudioVista",
        highlight: "Audio",
        description: "Premium karaoke players and sound systems engineered for professionals. From wireless microphones to professional amplifiers.",
      },
      karaoke: {
        title: "Karaoke",
        highlight: "Karaoke",
        description: "Discover our premium collection of karaoke players and systems. From HDD to SD and DVD formats, find the perfect karaoke solution for your venue or home.",
      },
      microphones: {
        title: "Microphones",
        highlight: "Microphones",
        description: "Professional-grade microphones for crystal-clear vocals. From wireless UHF systems to studio-quality condenser mics.",
      },
      amplifiers: {
        title: "Amplifiers",
        highlight: "Amplifiers",
        description: "Powerful karaoke amplifiers and digital mixers with advanced effects. Perfect for professional sound reinforcement.",
      },
      speakers: {
        title: "Speakers",
        highlight: "Speakers",
        description: "High-fidelity speakers and PA systems designed for karaoke and live performances. Studio monitors to portable solutions.",
      },
      cds: {
        title: "CDs",
        highlight: "CDs",
        description: "Browse our collection of karaoke CDs and music discs. Quality audio content for your karaoke sessions.",
      },
    }

    return categoryContent[selectedCategory] || categoryContent.all
  }

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = 
        selectedCategory !== "karaoke" || 
        selectedType === "all" || 
        product.type === selectedType
      
      return matchesCategory && matchesSearch && matchesType
    })

    // Apply sorting
    if (sortBy === "price-low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [selectedCategory, searchQuery, sortBy, selectedType])

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        setToastMessage(`Added another ${product.name} to cart`)
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      setToastMessage(`${product.name} added to cart`)
      return [...prev, { ...product, quantity: 1 }]
    })
    setShowToast(true)
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

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToFAQ = () => {
    const footer = document.querySelector("footer")
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" })
      // Open FAQ after a short delay
      setTimeout(() => {
        setShowFAQ(true)
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header
        cartCount={cartItems.length}
        onCartClick={() => {
          setShowCart(!showCart)
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {showCart ? (
        <Cart
          items={cartItems}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onContinueShopping={() => {
            setShowCart(false)
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        />
      ) : (
        <>
          <section className="relative mb-16 rounded-2xl overflow-hidden
                    bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800
                    p-10 md:p-14
                    shadow-xl shadow-black/40
                    animate-fade-in">

  {/* subtle glow accent */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_40%)]" />

  <div className="relative z-10 max-w-3xl">
    <h1 key={selectedCategory} className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 hero-content">
      <span className="text-amber-500">{getHeroContent().highlight}</span>
      {selectedCategory === "all" ? "Vista" : ""}
    </h1>

    <p key={`${selectedCategory}-desc`} className="text-gray-300 text-lg leading-relaxed hero-content" style={{ animationDelay: "0.1s", opacity: 0 }}>
      {getHeroContent().description}
    </p>

    {/* optional CTA */}
    <div className="mt-6 flex gap-4 animate-slide-in-up animate-delay-200">
      <button 
        onClick={scrollToProducts}
        className="bg-amber-500 text-slate-900 font-semibold
                         px-6 py-3 rounded-lg
                         hover:bg-orange-400
                         shadow-md shadow-amber-500/30
                         transition-smooth
                         hover:scale-105
                         active:scale-95">
        Browse Products
      </button>

      <button 
        onClick={scrollToFAQ}
        className="border border-slate-600 text-gray-300
                         px-6 py-3 rounded-lg
                         hover:border-amber-500 hover:text-amber-500
                         transition-smooth
                         hover:scale-105
                         active:scale-95">
        Learn More
      </button>
    </div>
  </div>
</section>


        <main id="products-section" className="container mx-auto px-4 py-12 flex-1 animate-fade-in animate-delay-300">

          <div>
            <SortFilter
              sortBy={sortBy}
              onSortChange={setSortBy}
              selectedType={selectedType}
              onTypeChange={setSelectedType}
              showTypeFilter={selectedCategory === "karaoke"}
            />
            
            <ProductGrid
              products={filteredProducts}
              onProductClick={setSelectedProduct}
              onAddToCart={handleAddToCart}
            />

            {filteredProducts.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <p className="text-muted-foreground">No products found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </main>
        </>
      )}

      <Footer 
        onTermsClick={() => setShowTerms(true)} 
        onPrivacyClick={() => setShowPrivacy(true)}
        onFAQClick={() => setShowFAQ(true)}
        onContactUsClick={() => setShowContactUs(true)}
        onWarrantyClick={() => setShowWarranty(true)}
      />

      {showTerms && <TermsOfService onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      {showFAQ && <FAQ onClose={() => setShowFAQ(false)} />}
      {showContactUs && <ContactUs onClose={() => setShowContactUs(false)} />}
      {showWarranty && <Warranty onClose={() => setShowWarranty(false)} />}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  )
}

export default App
