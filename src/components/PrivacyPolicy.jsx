"use client"

export default function PrivacyPolicy({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-slate-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        <div className="p-8 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              AudioVista ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <div className="ml-4 space-y-4">
              <div>
                <h3 className="font-semibold text-white mb-2">Personal Data</h3>
                <p>
                  Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic
                  information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the
                  site or when you choose to participate in various activities related to the site.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Financial Data</h3>
                <p>
                  Financial information, such as funds associated with your account, that we use to help you purchase products from our site.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Data From Social Networks</h3>
                <p>
                  User information from social media platforms, including your name, your social media username, location, gender, birth date,
                  email address, profile picture, and public data for contacts, if you connect your account to such social networks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Mobile Device Data</h3>
                <p>
                  Device information, such as your mobile device ID, model, manufacturer, operating system, and information about the way you
                  interact with our site.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Use of Your Information</h2>
            <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.</p>
            <p className="mb-4">Specifically, we may use information collected about you via the site to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Email you regarding your account or order</li>
              <li>Fulfill and send you related information pertaining to your order, purchase or transaction</li>
              <li>Generate a personal profile about you in order to better serve you</li>
              <li>Process your transactions and send related information</li>
              <li>Request feedback and contact you about your use of the site</li>
              <li>Respond to your inquiries and offer customer support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-4">We may share your information in the following situations:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>By Law or to Protect Rights: If we believe the release of information is necessary to comply with the law.</li>
              <li>Third-Party Service Providers: We may share your information with third parties that perform services for us.</li>
              <li>Business Transfers: If AudioVista is involved in a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Security of Your Information</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or
              impenetrable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="ml-4 space-y-2">
              <p>AudioVista</p>
              <p>Email: privacy@audiovista.com</p>
              <p>Phone: 1-800-AUDIO-VISTA</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other
              operational, legal or regulatory reasons. If we make material changes to how we treat our users' personal information, we will
              notify you by email to the primary email address specified in your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We may use cookies, web beacons, pixels, and similar tracking technologies to track activity on our site and hold certain
              information. This helps us understand how users interact with our site and enhances user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
            <p className="mb-4">
              AudioVista does not knowingly solicit information from or market to children under the age of 13. If we learn that we have
              collected personal information from a child under 13 without verification of parental consent, we will delete that information
              as quickly as possible.
            </p>
          </section>

          <p className="text-sm text-slate-400 mt-12">
            Last updated: December 2025
          </p>
        </div>
      </div>
    </div>
  )
}
