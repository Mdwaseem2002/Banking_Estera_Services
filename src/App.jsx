import { useState } from 'react';
import './index.css';

function App() {
  const [toastVisible, setToastVisible] = useState(false);

  const copyToClipboard = (text, buttonRef) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast();

      // Visual feedback
      if (buttonRef) {
        const originalContent = buttonRef.innerHTML;

        if (buttonRef.innerText.includes('Copy')) {
          buttonRef.innerHTML = '<i class="fas fa-check"></i> <span>Copied!</span>';
          buttonRef.classList.remove('bg-[#E31E24]', 'hover:bg-red-700');
          buttonRef.classList.add('bg-green-600', 'hover:bg-green-700');
        } else {
          buttonRef.innerHTML = '<i class="fas fa-check text-green-600"></i>';
        }

        setTimeout(() => {
          buttonRef.innerHTML = originalContent;
          if (buttonRef.innerText.includes('Copy')) {
            buttonRef.classList.add('bg-[#E31E24]', 'hover:bg-red-700');
            buttonRef.classList.remove('bg-green-600', 'hover:bg-green-700');
          }
        }, 2000);
      }
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy details. Please copy manually.');
    });
  };

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <div className="font-['Open_Sans',sans-serif] text-gray-800 antialiased bg-gray-50 flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold font-['Montserrat',sans-serif]">
            <span className="text-[#E31E24]">800</span>
            <span className="text-[#1A1A1A]">Docs</span>
          </a>
          <div className="flex items-center gap-6">
            <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
              Services
              <i className="fas fa-chevron-down text-xs"></i>
            </button>
            <a
              href="#"
              className="bg-[#E31E24] text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition flex items-center gap-2"
            >
              <i className="fas fa-globe"></i>
              Chat Now
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="hero-section" className="flex-grow pt-24 md:pt-32 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          {/* Page Heading */}
          <div className="text-center mb-6 md:mb-10">
            <h1 className="text-2xl md:text-5xl font-['Montserrat',sans-serif] font-extrabold text-[#1A1A1A] mb-2 md:mb-4">
              Banking Information
            </h1>
            <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto">
              Please use the details below for wire transfers.
            </p>
          </div>

          {/* Bank Details Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Card Header */}
            <div className="bg-[#1A1A1A] px-4 py-3 md:px-6 md:py-5 border-b border-gray-800 relative overflow-hidden">
              <div className="absolute right-0 top-0 h-full w-20 bg-[#E31E24] opacity-10 transform skew-x-12"></div>
              <div className="flex justify-between items-center relative z-10">
                <h2 className="text-lg md:text-xl font-['Montserrat',sans-serif] font-bold text-white flex items-center gap-3">
                  <i className="fas fa-university text-[#E31E24]"></i> Account Details
                </h2>
                <span className="bg-gray-800 border border-gray-700 text-white text-[10px] md:text-xs px-2 py-1 md:px-3 rounded-full uppercase tracking-wider font-semibold">
                  <i className="fas fa-check-circle text-green-500 mr-1"></i> Verified
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="px-4 py-5 sm:p-8 space-y-4 md:space-y-6">
              {/* Account Name */}
              <div className="group text-left md:text-left">
                <label className="block text-xs md:text-sm font-bold text-gray-500 mb-1 md:mb-2 uppercase tracking-wide">
                  Account Name
                </label>
                <div className="flex items-center gap-2 w-full md:gap-3">
                  <div className="flex-grow bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-200 font-mono text-[#1A1A1A] font-bold text-sm md:text-lg break-all text-center md:text-left">
                    800 DOCS L.L.C S.O.C
                  </div>
                  <button
                    onClick={(e) => copyToClipboard('800 DOCS L.L.C S.O.C', e.currentTarget)}
                    className="text-gray-400 hover:text-[#E31E24] transition p-2 flex-shrink-0"
                    title="Copy Account Name"
                  >
                    <i className="far fa-copy text-lg md:text-xl"></i>
                  </button>
                </div>
              </div>

              {/* Bank Name & Branch Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="text-left md:text-left">
                  <div className="flex items-center gap-4">
                    <label className="block text-xs md:text-sm font-bold text-gray-500 mb-1 md:mb-2 uppercase tracking-wide">
                      Bank Name
                    </label>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="bg-green-800 text-white text-[8px] px-1 py-0.5 rounded">
                        <span className="font-bold">EI</span>
                      </div>
                      <div className="text-[8px] leading-tight">
                        <div className="text-gray-600">الإمارات الإسلامي</div>
                        <div className="text-gray-500">EMIRATES ISLAMIC</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-200 text-[#1A1A1A] font-bold text-sm md:text-base text-center md:text-left">
                    Emirates Islamic Bank
                  </div>
                </div>
                <div className="text-left md:text-left">
                  <label className="block text-xs md:text-sm font-bold text-gray-500 mb-1 md:mb-2 uppercase tracking-wide">
                    Branch Name
                  </label>
                  <div className="w-full bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-200 text-[#1A1A1A] font-bold text-sm md:text-base text-center md:text-left mt-6 sm:mt-0">
                    SHIEK ZAYED ROAD
                  </div>
                </div>
              </div>

              {/* IBAN Section (Highlighted) */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-5 border border-gray-200 shadow-sm text-left md:text-left">
                <label className="block text-xs md:text-sm font-bold text-[#E31E24] mb-2 uppercase tracking-wide">
                  IBAN
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                  <div
                    id="iban-text"
                    className="flex-grow font-mono text-base md:text-2xl text-[#1A1A1A] font-bold break-all tracking-wider text-center md:text-left"
                  >
                    AE14 0340 0037 0850 7945 801
                  </div>
                  <button
                    onClick={(e) => copyToClipboard('AE140340003708507945801', e.currentTarget)}
                    className="w-full sm:w-auto flex-shrink-0 bg-[#E31E24] hover:bg-red-700 text-white px-6 py-2 md:py-3 rounded-lg text-sm font-bold transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="far fa-copy"></i>
                    <span>Copy</span>
                  </button>
                </div>
              </div>

              {/* Swift & Account Number Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="text-left md:text-left">
                  <label className="block text-xs md:text-sm font-bold text-gray-500 mb-1 md:mb-2 uppercase tracking-wide">
                    SWIFT Code
                  </label>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex-grow bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-200 font-mono text-[#1A1A1A] font-bold text-sm md:text-base text-center md:text-left">
                      MEBLAEAD
                    </div>
                    <button
                      onClick={(e) => copyToClipboard('MEBLAEAD', e.currentTarget)}
                      className="text-gray-400 hover:text-[#E31E24] transition p-2 flex-shrink-0"
                      title="Copy Swift Code"
                    >
                      <i className="far fa-copy text-lg md:text-xl"></i>
                    </button>
                  </div>
                </div>
                <div className="text-left md:text-left">
                  <label className="block text-xs md:text-sm font-bold text-gray-500 mb-1 md:mb-2 uppercase tracking-wide">
                    Account Number
                  </label>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex-grow bg-gray-50 p-3 md:p-4 rounded-xl border border-gray-200 font-mono text-[#1A1A1A] font-bold text-sm md:text-base text-center md:text-left">
                      3708507945801
                    </div>
                    <button
                      onClick={(e) => copyToClipboard('3708507945801', e.currentTarget)}
                      className="text-gray-400 hover:text-[#E31E24] transition p-2 flex-shrink-0"
                      title="Copy Account Number"
                    >
                      <i className="far fa-copy text-lg md:text-xl"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="border-t border-gray-100 pt-4 md:pt-6 mt-2 text-left md:text-left">
                <label className="block text-xs md:text-sm font-bold text-gray-400 mb-1 md:mb-2 uppercase tracking-wide">
                  Registered Address
                </label>
                <a
                  href="https://maps.app.goo.gl/oK6sEsqy93w78uti9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium hover:text-[#E31E24] transition"
                >
                  709, Business Village Block B, Port Saeed,<br />
                  Dubai, United Arab Emirates (624692)
                </a>
              </div>
            </div>

            {/* Card Footer / Help Text */}
            <div className="bg-gray-50 px-4 py-3 md:px-6 md:py-4 border-t border-gray-100">
              <div className="flex items-start justify-center md:justify-start gap-2 md:gap-3 text-center md:text-left">
                <i className="fas fa-exclamation-circle text-[#1A1A1A] mt-0.5 flex-shrink-0"></i>
                <p className="text-xs text-gray-500 font-medium">
                  Please ensure the beneficiary name matches exactly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <a href="/" className="text-2xl font-bold font-['Montserrat',sans-serif]">
                <span className="text-[#E31E24]">800</span>
                <span className="text-[#1A1A1A]">Docs</span>
              </a>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#1A1A1A] transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#1A1A1A] transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#1A1A1A] transition">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#1A1A1A] transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#1A1A1A] transition">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-500">
              <a href="#" className="flex items-center gap-2 hover:text-[#E31E24] transition">
                <i className="fas fa-map-marker-alt text-[#E31E24]"></i>
                Port Saeed, Dubai, UAE
              </a>
              <a href="tel:800-3627" className="flex items-center gap-2 hover:text-[#E31E24] transition">
                <i className="fas fa-phone text-[#E31E24]"></i>
                800-DOCS (3627)
              </a>
              <a href="mailto:info@800docs.ae" className="flex items-center gap-2 hover:text-[#E31E24] transition">
                <i className="fas fa-envelope text-[#E31E24]"></i>
                info@800docs.ae
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Notification Toast */}
      <div
        id="toast"
        className={`fixed bottom-10 right-5 transform transition-all duration-300 z-50 ${toastVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
      >
        <div className="bg-[#1A1A1A] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 border-l-4 border-[#E31E24]">
          <i className="fas fa-check-circle text-green-400"></i>
          <span>Copied to clipboard!</span>
        </div>
      </div>
    </div>
  );
}

export default App;