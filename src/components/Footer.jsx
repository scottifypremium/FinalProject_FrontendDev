export default function Footer({
  onTermsClick,
  onPrivacyClick,
  onFAQClick,
  onContactUsClick,
  onWarrantyClick,
  onCategoryClick,
}) {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">AudioVista</h3>
            <p className="text-slate-400 text-sm">Premium karaoke and sound systems for professionals.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick?.("karaoke")}
                  className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                  Karaoke Players
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick?.("microphones")}
                  className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                  Microphones
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick?.("speakers")}
                  className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                  Speakers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick?.("amplifiers")}
                  className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                  Amplifiers & Mixers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onCategoryClick?.("cds")}
                  className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                  Song Discs (CDs)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={onContactUsClick} className="hover:text-amber-500 transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={onFAQClick} className="hover:text-amber-500 transition-colors cursor-pointer">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={onWarrantyClick} className="hover:text-amber-500 transition-colors cursor-pointer">
                  Warranty
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; 2025 AudioVista. All rights reserved.</p>
            <div className="flex gap-6">
              <button onClick={onPrivacyClick} className="hover:text-amber-500 transition-colors">
                Privacy Policy
              </button>
              <button onClick={onTermsClick} className="hover:text-amber-500 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
