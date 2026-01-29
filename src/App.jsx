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
          buttonRef.classList.remove('bg-[#D4A574]', 'hover:bg-[#C49664]');
          buttonRef.classList.add('bg-[#0D5A6F]');
        } else {
          buttonRef.innerHTML = '<i class="fas fa-check text-[#0D5A6F]"></i>';
        }

        setTimeout(() => {
          buttonRef.innerHTML = originalContent;
          if (buttonRef.innerText.includes('Copy')) {
            buttonRef.classList.add('bg-[#D4A574]', 'hover:bg-[#C49664]');
            buttonRef.classList.remove('bg-[#0D5A6F]');
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
    <div className="font-['Inter',sans-serif] text-[#2C3E50] antialiased bg-[#F5F7FA] flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-100 fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold font-['Playfair_Display',serif]">
            <span className="text-[#001F4D]">Estera</span>
            <span className="text-[#D4A574]">Services</span>
          </a>
          <div className="flex items-center gap-8">
            <button className="nav-link-hover text-[#001F4D] hover:text-[#0D5A6F] font-medium flex items-center gap-2 transition-colors">
              Services
              <i className="fas fa-chevron-down text-xs text-[#D4A574]"></i>
            </button>
            <a
              href="#"
              className="gold-btn-hover bg-[#D4A574] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C49664] transition-all flex items-center gap-2"
            >
              <i className="fas fa-comments"></i>
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="hero-section" className="flex-grow pt-32 md:pt-40 pb-12 md:pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          {/* Page Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-3xl md:text-5xl font-['Playfair_Display',serif] font-bold text-[#001F4D] mb-4 md:mb-6 tracking-tight">
              Banking Information
            </h1>
            <p className="text-base md:text-lg text-[#2C3E50]/70 max-w-xl mx-auto leading-relaxed">
              Please use the details below for secure wire transfers.
            </p>
          </div>

          {/* Bank Details Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Card Header - Navy gradient */}
            <div className="bg-gradient-to-r from-[#001F4D] via-[#002D6B] to-[#001F4D] px-6 py-5 md:px-8 md:py-6 relative overflow-hidden">
              {/* Gold accent stripe */}
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#D4A574]/20 to-transparent transform skew-x-[-12deg]"></div>
              <div className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-[#D4A574] via-[#D4A574]/50 to-transparent"></div>

              <div className="flex justify-between items-center relative z-10">
                <h2 className="text-xl md:text-2xl font-['Playfair_Display',serif] font-bold text-white flex items-center gap-4">
                  <i className="fas fa-university text-[#D4A574]"></i>
                  Account Details
                </h2>
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs md:text-sm px-4 py-2 rounded-full uppercase tracking-wider font-semibold flex items-center gap-2">
                  <i className="fas fa-shield-alt text-[#D4A574]"></i> Verified
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="px-6 py-8 sm:p-10 space-y-8">
              {/* Account Name */}
              <div className="group">
                <label className="block text-xs md:text-sm font-bold text-[#001F4D]/60 mb-3 uppercase tracking-wider">
                  Account Name
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex-grow bg-[#F5F7FA] p-4 md:p-5 rounded-xl border border-gray-200 font-mono text-[#001F4D] font-bold text-base md:text-lg">
                    800 DOCS L.L.C S.O.C
                  </div>
                  <button
                    onClick={(e) => copyToClipboard('800 DOCS L.L.C S.O.C', e.currentTarget)}
                    className="text-[#001F4D]/40 hover:text-[#D4A574] transition-colors p-3 rounded-lg hover:bg-[#D4A574]/10"
                    title="Copy Account Name"
                  >
                    <i className="far fa-copy text-xl"></i>
                  </button>
                </div>
              </div>

              {/* Bank Name & Branch Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <label className="block text-xs md:text-sm font-bold text-[#001F4D]/60 uppercase tracking-wider">
                      Bank Name
                    </label>
                    <div className="flex items-center gap-1.5 bg-[#001F4D]/5 px-2 py-1 rounded">
                      <div className="bg-[#1E4620] text-white text-[7px] px-1.5 py-0.5 rounded font-bold">
                        EI
                      </div>
                      <div className="text-[7px] leading-tight text-[#2C3E50]/60">
                        <div>الإمارات الإسلامي</div>
                        <div>EMIRATES ISLAMIC</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F5F7FA] p-4 md:p-5 rounded-xl border border-gray-200 text-[#001F4D] font-bold text-base">
                    Emirates Islamic Bank
                  </div>
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold text-[#001F4D]/60 mb-3 uppercase tracking-wider">
                    Branch Name
                  </label>
                  <div className="bg-[#F5F7FA] p-4 md:p-5 rounded-xl border border-gray-200 text-[#001F4D] font-bold text-base mt-0 sm:mt-4">
                    SHIEK ZAYED ROAD
                  </div>
                </div>
              </div>

              {/* IBAN Section (Highlighted with Gold) */}
              <div className="bg-gradient-to-br from-[#001F4D]/5 to-[#D4A574]/10 rounded-xl p-6 md:p-8 border border-[#D4A574]/30 shadow-sm">
                <label className="block text-xs md:text-sm font-bold text-[#D4A574] mb-4 uppercase tracking-wider flex items-center gap-2">
                  <i className="fas fa-key text-sm"></i>
                  IBAN
                </label>
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                  <div className="flex-grow font-mono text-lg md:text-2xl text-[#001F4D] font-bold tracking-wider">
                    AE14 0340 0037 0850 7945 801
                  </div>
                  <button
                    onClick={(e) => copyToClipboard('AE140340003708507945801', e.currentTarget)}
                    className="gold-btn-hover w-full sm:w-auto bg-[#D4A574] hover:bg-[#C49664] text-white px-8 py-3 rounded-lg text-sm font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <i className="far fa-copy"></i>
                    <span>Copy</span>
                  </button>
                </div>
              </div>

              {/* Swift & Account Number Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-xs md:text-sm font-bold text-[#001F4D]/60 mb-3 uppercase tracking-wider">
                    SWIFT Code
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex-grow bg-[#F5F7FA] p-4 md:p-5 rounded-xl border border-gray-200 font-mono text-[#001F4D] font-bold text-base">
                      MEBLAEAD
                    </div>
                    <button
                      onClick={(e) => copyToClipboard('MEBLAEAD', e.currentTarget)}
                      className="text-[#001F4D]/40 hover:text-[#D4A574] transition-colors p-3 rounded-lg hover:bg-[#D4A574]/10"
                      title="Copy Swift Code"
                    >
                      <i className="far fa-copy text-xl"></i>
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold text-[#001F4D]/60 mb-3 uppercase tracking-wider">
                    Account Number
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex-grow bg-[#F5F7FA] p-4 md:p-5 rounded-xl border border-gray-200 font-mono text-[#001F4D] font-bold text-base">
                      3708507945801
                    </div>
                    <button
                      onClick={(e) => copyToClipboard('3708507945801', e.currentTarget)}
                      className="text-[#001F4D]/40 hover:text-[#D4A574] transition-colors p-3 rounded-lg hover:bg-[#D4A574]/10"
                      title="Copy Account Number"
                    >
                      <i className="far fa-copy text-xl"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="border-t border-gray-100 pt-8 mt-4">
                <label className="block text-xs md:text-sm font-bold text-[#001F4D]/50 mb-3 uppercase tracking-wider">
                  Registered Address
                </label>
                <a
                  href="https://maps.app.goo.gl/oK6sEsqy93w78uti9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-[#2C3E50]/80 leading-relaxed font-medium hover:text-[#0D5A6F] transition-colors inline-flex items-start gap-2"
                >
                  <i className="fas fa-map-marker-alt text-[#D4A574] mt-1"></i>
                  <span>
                    709, Business Village Block B, Port Saeed,<br />
                    Dubai, United Arab Emirates (624692)
                  </span>
                </a>
              </div>
            </div>

            {/* Card Footer / Help Text */}
            <div className="bg-[#001F4D]/5 px-6 py-4 md:px-8 md:py-5 border-t border-gray-100">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="fas fa-info-circle text-[#0D5A6F]"></i>
                <p className="text-sm text-[#2C3E50]/70 font-medium">
                  Please ensure the beneficiary name matches exactly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#001F4D] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-6">
              <a href="/" className="text-2xl font-bold font-['Playfair_Display',serif]">
                <span className="text-white">Estera</span>
                <span className="text-[#D4A574]">Services</span>
              </a>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D4A574] hover:text-white transition-all">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D4A574] hover:text-white transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D4A574] hover:text-white transition-all">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D4A574] hover:text-white transition-all">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4 text-sm">
              <a href="#" className="flex items-center gap-3 text-white/70 hover:text-[#D4A574] transition-colors">
                <i className="fas fa-map-marker-alt text-[#D4A574]"></i>
                Port Saeed, Dubai, UAE
              </a>
              <a href="tel:800-3627" className="flex items-center gap-3 text-white/70 hover:text-[#D4A574] transition-colors">
                <i className="fas fa-phone text-[#D4A574]"></i>
                +971 4 XXX XXXX
              </a>
              <a href="mailto:info@esteradubai.com" className="flex items-center gap-3 text-white/70 hover:text-[#D4A574] transition-colors">
                <i className="fas fa-envelope text-[#D4A574]"></i>
                info@esteradubai.com
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © 2026 Estera Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Notification Toast */}
      <div
        className={`fixed bottom-8 right-8 transform transition-all duration-300 z-50 ${toastVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
      >
        <div className="bg-[#001F4D] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 border-l-4 border-[#D4A574]">
          <i className="fas fa-check-circle text-[#D4A574] text-lg"></i>
          <span className="font-medium">Copied to clipboard!</span>
        </div>
      </div>
    </div>
  );
}

export default App;