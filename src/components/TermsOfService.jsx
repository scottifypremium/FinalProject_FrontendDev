"use client"

export default function TermsOfService({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-slate-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        <div className="p-8 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on AudioVista's
              website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
              and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on AudioVista's website are provided on an 'as is' basis. AudioVista makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other
              violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
            <p className="mb-4">
              In no event shall AudioVista or its suppliers be liable for any damages (including, without limitation, damages for loss
              of data or profit, or due to business interruption) arising out of the use or inability to use the materials on
              AudioVista's website, even if AudioVista or an authorized representative has been notified orally or in writing of the
              possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
            <p className="mb-4">
              The materials appearing on AudioVista's website could include technical, typographical, or photographic errors. AudioVista
              does not warrant that any of the materials on its website are accurate, complete, or current. AudioVista may make changes
              to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
            <p className="mb-4">
              AudioVista has not reviewed all of the sites linked to its website and is not responsible for the contents of any such
              linked site. The inclusion of any link does not imply endorsement by AudioVista of the site. Use of any such linked website
              is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
            <p className="mb-4">
              AudioVista may revise these terms of service for its website at any time without notice. By using this website, you are
              agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which AudioVista
              operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Product Warranty</h2>
            <p className="mb-4">
              All products sold through AudioVista come with manufacturer warranties. Specific warranty details vary by product and
              manufacturer. Please refer to individual product pages for detailed warranty information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Return Policy</h2>
            <p className="mb-4">
              Products may be returned within 30 days of purchase in original condition with all original packaging. Returns must be
              authorized before shipment. Refunds will be processed within 7-10 business days of receiving returned items.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at support@audiovista.com or call our customer
              service team.
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
