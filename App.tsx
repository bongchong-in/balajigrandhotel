import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Wifi, Coffee, Car, Shield, Star, Menu, X, ChevronRight, Mail, Facebook, Shirt, Utensils } from 'lucide-react';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 3.4L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 1h4a.5.5 0 0 0 1-1v-1" stroke="none" fill="none" />
  </svg>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const BookingModal = () => (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${showBookingModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all duration-300 scale-100">
        <div className="bg-amber-600 p-6 flex justify-between items-center text-white">
          <h3 className="text-xl font-bold">Reserve Your Stay</h3>
          <button onClick={() => setShowBookingModal(false)} className="hover:bg-amber-700 p-1 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-gray-600 text-center">Lock in the <span className="font-bold text-amber-600">₹999/night</span> special offer instantly.</p>
          
          <div className="space-y-4">
             {/* Book Online Button */}
             <a 
               href="https://bookone.io/Balaji-Grand-Hotel" 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 w-full py-4 bg-amber-600 text-white rounded-xl font-bold text-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
             >
               Book Online Now <ChevronRight size={20} />
             </a>

             <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-wider">Or Call Us</span>
                <div className="flex-grow border-t border-gray-300"></div>
             </div>

             {/* Call Button */}
             <a href="tel:+919777035111" className="flex items-center justify-center gap-3 w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
               <Phone size={20} />
               Call +91 97770 35111
             </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-amber-100 selection:text-amber-900">
      <BookingModal />

      {/* Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/919777035111"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-50 bg-slate-900 hover:bg-amber-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group border-2 border-white/20"
        aria-label="Chat on WhatsApp"
      >
         <WhatsAppIcon size={28} />
         <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
            Chat with us
         </span>
      </a>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-amber-600' : 'text-white'}`}>
            BALAJI <span className={isScrolled ? 'text-slate-900' : 'text-white'}>GRAND</span>
          </div>
          
          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-8 ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}>
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-500 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('rooms')} className="hover:text-amber-500 transition-colors font-medium">Rooms</button>
            <button onClick={() => scrollToSection('amenities')} className="hover:text-amber-500 transition-colors font-medium">Amenities</button>
            <button onClick={() => scrollToSection('location')} className="hover:text-amber-500 transition-colors font-medium">Location</button>
            <button 
              onClick={() => setShowBookingModal(true)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-md' 
                  : 'bg-white text-amber-600 hover:bg-gray-100'
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 px-4 hover:bg-amber-50 rounded-lg text-slate-700 font-medium">Home</button>
            <button onClick={() => scrollToSection('rooms')} className="text-left py-2 px-4 hover:bg-amber-50 rounded-lg text-slate-700 font-medium">Rooms</button>
            <button onClick={() => scrollToSection('amenities')} className="text-left py-2 px-4 hover:bg-amber-50 rounded-lg text-slate-700 font-medium">Amenities</button>
            <button onClick={() => scrollToSection('location')} className="text-left py-2 px-4 hover:bg-amber-50 rounded-lg text-slate-700 font-medium">Location</button>
            <button 
              onClick={() => { setShowBookingModal(true); setIsMenuOpen(false); }}
              className="w-full py-3 bg-amber-600 text-white rounded-lg font-bold shadow-lg"
            >
              Book Now - ₹999
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://raw.githubusercontent.com/bongchong-in/balajigrandhotel/refs/heads/main/images/20240630_091827-1024x852.jpg" 
            alt="Luxury Hotel Texture" 
            className="w-full h-full object-cover"
          />
          {/* Layer 1: Strong Uniform Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-slate-900/60"></div>
          {/* Layer 2: Gradient for Depth (Darker at top and bottom) */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/90"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <div className="inline-block px-4 py-1.5 mb-6 border border-amber-400/30 rounded-full bg-amber-500/10 backdrop-blur-sm shadow-sm">
            <span className="text-amber-300 font-semibold tracking-wider text-sm uppercase drop-shadow-md">Bhubaneswar's Cleanest Stay</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
            Unmatched Comfort <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 drop-shadow-none filter brightness-110">
              Unbeatable Value
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Experience premium Wakefit comfort, modern amenities, and the flexibility of 24-hour check-out near SUM Hospital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setShowBookingModal(true)}
              className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-amber-600/20 flex items-center justify-center gap-2"
            >
              Book A/C Room @ ₹999 <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('amenities')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-full font-semibold transition-all shadow-lg"
            >
              Explore Amenities
            </button>
          </div>
        </div>

        {/* Floating USP Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 hidden md:block z-20">
          <div className="max-w-7xl mx-auto px-6 py-6 flex justify-around text-white/90">
            <div className="flex items-center gap-3">
              <Clock className="text-amber-400 drop-shadow-md" size={24} />
              <div className="text-left">
                <p className="font-bold drop-shadow-sm">24-Hour Check-out</p>
                <p className="text-xs text-gray-300">Flexible timings for you</p>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="flex items-center gap-3">
              <MapPin className="text-amber-400 drop-shadow-md" size={24} />
              <div className="text-left">
                <p className="font-bold drop-shadow-sm">Near SUM Hospital</p>
                <p className="text-xs text-gray-300">Prime Kalinga Nagar Location</p>
              </div>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="flex items-center gap-3">
              <Star className="text-amber-400 drop-shadow-md" size={24} />
              <div className="text-left">
                <p className="font-bold drop-shadow-sm">Wakefit Comfort</p>
                <p className="text-xs text-gray-300">Premium sleep experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Us Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Balaji Grand is Your Best Choice</h2>
                <div className="w-20 h-1.5 bg-amber-500 rounded-full"></div>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                We bridge the gap between affordability and luxury. Whether you are in Bhubaneswar for medical reasons, business, or leisure, we ensure a hassle-free stay with our "Cleanest Stay" promise.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Flexible 24-Hour Check-Out Policy",
                  "Premium Wakefit Mattresses for Deep Sleep",
                  "Walking Distance to SUM Hospital",
                  "Secure Parking & Lift Access"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="bg-amber-100 p-1.5 rounded-full text-amber-600">
                      <Shield size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <button onClick={() => setShowBookingModal(true)} className="text-amber-600 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                  Check Availability Now <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-200 rounded-2xl transform rotate-2"></div>
              <img 
                src="https://raw.githubusercontent.com/bongchong-in/balajigrandhotel/refs/heads/main/images/20240630_091817-1024x825.jpg" 
                alt="Hotel Interior" 
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-amber-600">4.9</div>
                  <div className="text-sm font-medium text-slate-600">Average Guest Rating on Google</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer / Rooms Section */}
      <section id="rooms" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Exclusive Offer</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Luxury doesn't have to be expensive. Enjoy our introductory pricing for a limited time.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://balajigrandhotel.in/wp-content/uploads/2024/07/IMG-20240710-WA0007.jpg" 
                  alt="AC Double Room" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Best Seller
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">AC Double Room</h3>
                    <p className="text-sm text-slate-500 mt-1">Perfect for couples or business</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-amber-600">₹999</p>
                    <p className="text-xs text-slate-400">per night</p>
                  </div>
                </div>
                <hr className="border-gray-100 my-6" />
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Wifi size={16} className="text-amber-500"/> Free High-Speed Wifi
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Star size={16} className="text-amber-500"/> Wakefit Mattress
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Coffee size={16} className="text-amber-500"/> Room Service
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Shield size={16} className="text-amber-500"/> Sanitized Daily
                  </div>
                </div>
                <button 
                  onClick={() => setShowBookingModal(true)}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex justify-center items-center gap-2"
                >
                  Book This Room
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://raw.githubusercontent.com/bongchong-in/balajigrandhotel/main/images/IMG-20240710-WA0023.jpg" 
                  alt="AC Twin Room" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">AC Twin Room</h3>
                    <p className="text-sm text-slate-500 mt-1">Ideal for friends or colleagues</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-amber-600">₹999</p>
                    <p className="text-xs text-slate-400">per night</p>
                  </div>
                </div>
                <hr className="border-gray-100 my-6" />
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Wifi size={16} className="text-amber-500"/> Free High-Speed Wifi
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Star size={16} className="text-amber-500"/> Separate Beds
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Coffee size={16} className="text-amber-500"/> Room Service
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Shield size={16} className="text-amber-500"/> Sanitized Daily
                  </div>
                </div>
                <button 
                  onClick={() => setShowBookingModal(true)}
                  className="w-full py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-xl font-bold hover:bg-slate-50 transition-colors"
                >
                  Book This Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section id="amenities" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <Car size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Parking</h3>
              <p className="text-slate-400 text-sm">Safe and spacious parking for your vehicle at no extra cost.</p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <Clock size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Check-in</h3>
              <p className="text-slate-400 text-sm">Arrive anytime. Our front desk is ready to welcome you round the clock.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <Wifi size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-2">High Speed Wifi</h3>
              <p className="text-slate-400 text-sm">Stay connected with our complimentary high-speed internet access.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Function Hall</h3>
              <p className="text-slate-400 text-sm">Spacious hall available for your events, meetings, and gatherings.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <Utensils size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Room Service</h3>
              <p className="text-slate-400 text-sm">Delicious meals and beverages delivered directly to your room for ultimate comfort.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <Shirt size={24} className="text-white"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Laundry Service</h3>
              <p className="text-slate-400 text-sm">Professional laundry and dry cleaning services to keep your wardrobe fresh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">A Peek Into Our World</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            
            {/* 1. Large Feature */}
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group">
               <img src="https://raw.githubusercontent.com/bongchong-in/balajigrandhotel/main/images/20240630_215409-1024x768.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery 1" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>

            {/* 2 */}
            <div className="rounded-2xl overflow-hidden relative group">
              <img src="https://raw.githubusercontent.com/bongchong-in/balajigrandhotel/main/images/20240630_215416-1024x768.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery 2" />
            </div>

            {/* 3 */}
            <div className="rounded-2xl overflow-hidden relative group">
              <img src="https://raw.githubusercontent.com/bongchong-in/balajigrandhotel/main/images/20240630_220022-1024x768.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery 3" />
            </div>

            {/* 4 */}
            <div className="rounded-2xl overflow-hidden relative group">
              <img src="https://raw.githubusercontent.com/bongchong-in/balajigrandhotel/main/images/20240630_223852-1024x768.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery 4" />
            </div>

            {/* 5 */}
            <div className="rounded-2xl overflow-hidden relative group">
              <img src="https://raw.githubusercontent.com/bongchong-in/balajigrandhotel/main/images/20240630_223950-1024x768.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery 5" />
            </div>

            {/* 6 - Wide */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden relative group">
              <img src="https://raw.githubusercontent.com/bongchong-in/balajigrandhotel/main/images/20240630_224451-1024x768.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery 6" />
            </div>

            {/* 7 - Wide */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden relative group">
              <img src="https://raw.githubusercontent.com/bongchong-in/balajigrandhotel/main/images/20240630_225150-1024x934.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gallery 7" />
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Guest Experiences</h2>
            <div className="flex justify-center items-center gap-2 mb-4">
               <span className="text-2xl font-bold text-amber-600">4.9</span>
               <div className="flex text-amber-500">
                 <Star fill="currentColor" size={20} />
                 <Star fill="currentColor" size={20} />
                 <Star fill="currentColor" size={20} />
                 <Star fill="currentColor" size={20} />
                 <Star fill="currentColor" size={20} />
               </div>
               <span className="text-slate-500 text-sm">(based on Google Reviews)</span>
            </div>
            <p className="text-slate-500 max-w-2xl mx-auto">Don't just take our word for it. Here is what travelers are saying about their stay at Balaji Grand.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
               <div className="absolute top-8 right-8 text-slate-200">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
               </div>
               <div className="flex text-amber-500 mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
               </div>
               <p className="text-slate-600 mb-6 italic">"Excellent stay! The location is perfect, right near SUM Hospital. The staff is extremely polite and the rooms are very clean. The 24-hour checkout policy is a lifesaver."</p>
               <div className="flex items-center gap-3">
                 <img src="https://randomuser.me/api/portraits/men/91.jpg" alt="Rahul S." className="w-10 h-10 rounded-full object-cover" />
                 <div>
                   <p className="font-bold text-slate-900 text-sm">Rahul S.</p>
                   <p className="text-xs text-slate-400">Google Review</p>
                 </div>
               </div>
            </div>

             {/* Review Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
               <div className="absolute top-8 right-8 text-slate-200">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
               </div>
               <div className="flex text-amber-500 mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
               </div>
               <p className="text-slate-600 mb-6 italic">"One of the best budget hotels in Bhubaneswar. The rooms are spacious and well-maintained. The Wakefit mattress was surprisingly comfortable. Highly recommended!"</p>
               <div className="flex items-center gap-3">
                 <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Priya M." className="w-10 h-10 rounded-full object-cover" />
                 <div>
                   <p className="font-bold text-slate-900 text-sm">Priya M.</p>
                   <p className="text-xs text-slate-400">Google Review</p>
                 </div>
               </div>
            </div>

             {/* Review Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
               <div className="absolute top-8 right-8 text-slate-200">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
               </div>
               <div className="flex text-amber-500 mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
               </div>
               <p className="text-slate-600 mb-6 italic">"Very safe and secure parking. The staff is helpful. Just a walk away from medical facilities which was my main requirement. Great value for money."</p>
               <div className="flex items-center gap-3">
                 <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Amit K." className="w-10 h-10 rounded-full object-cover" />
                 <div>
                   <p className="font-bold text-slate-900 text-sm">Amit K.</p>
                   <p className="text-xs text-slate-400">Google Review</p>
                 </div>
               </div>
            </div>

          </div>
          
          <div className="text-center mt-12">
             <a href="https://www.google.com/travel/hotels/balaji%20grand%20hotel%20bhubaneswar%20reviews/entity/CgoIu6eSrZrMxf1LEAE/reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors">
               Read All Reviews on Google <ChevronRight size={16} />
             </a>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="bg-amber-50 py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Easy to Reach, Hard to Leave</h2>
            <p className="text-slate-600">Located strategically in Kalinga Nagar, we are just steps away from SUM Hospital, making us the perfect choice for medical visitors and city explorers.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-amber-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Address</h4>
                  <p className="text-slate-600">K8/110, Kalinga Nagar, Near SUM Hospital,<br/>Bhubaneswar - 751003</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-amber-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <a href="tel:+919777035111" className="text-slate-600 hover:text-amber-600 transition-colors">+91 97770 35111</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-amber-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <a href="mailto:contact.balajigrandhotel@gmail.com" className="text-slate-600 hover:text-amber-600 transition-colors">contact.balajigrandhotel@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group">
             <iframe 
               width="100%" 
               height="100%" 
               style={{ border: 0 }}
               loading="lazy"
               allowFullScreen
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.683593787317!2d85.76430649999999!3d20.279872599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a900018b0fd9%3A0x4bfb1661a5a493bb!2sBalaji%20Grand%20Hotel!5e1!3m2!1sen!2sin!4v1767166456138!5m2!1sen!2sin"
               className="w-full h-full"
               title="Balaji Grand Hotel Location"
             >
             </iframe>
             <a 
               href="https://maps.app.goo.gl/QKKrhtFMkNb3Fp2R6" 
               target="_blank" 
               rel="noopener noreferrer"
               className="absolute bottom-6 right-6 bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-full shadow-lg font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1 z-10"
             >
               <MapPin className="text-red-500 fill-red-500" size={20} /> Open in Google Maps
             </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-extrabold tracking-tight mb-4">
              BALAJI <span className="text-amber-500">GRAND</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience affordable luxury and unparalleled comfort with us. Perfect for both business and leisure travelers in Bhubaneswar.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-amber-500 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('rooms')} className="hover:text-amber-500 transition-colors">Rooms & Suites</button></li>
              <li><button onClick={() => scrollToSection('amenities')} className="hover:text-amber-500 transition-colors">Amenities</button></li>
              <li><button onClick={() => scrollToSection('location')} className="hover:text-amber-500 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61562397569113" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/919777035111" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors">
                 <WhatsAppIcon size={20} />
              </a>
              <a href="mailto:contact.balajigrandhotel@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>Copyright © 2025 Balaji Grand Hotel. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile Sticky Booking Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 flex gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex-1">
          <p className="text-xs text-slate-500">Starting from</p>
          <p className="text-xl font-bold text-amber-600">₹999<span className="text-sm font-normal text-slate-400">/night</span></p>
        </div>
        <button 
          onClick={() => setShowBookingModal(true)}
          className="flex-1 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default App;