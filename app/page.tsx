'use client';

import Image from 'next/image';
import { Instagram, Home as HomeIcon, Key, Building2, MapPin, MessageCircle, ChevronRight, Star, Send, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const INSTAGRAM_URL = 'https://instagram.com/K_amran_4382';

export default function Page() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">Chembur<span className="text-blue-600">Realty</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Services</a>
            <a href="#why-chembur" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Why Chembur</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
              alt="Luxury Home"
              fill
              className="object-cover opacity-[0.15]"
              referrerPolicy="no-referrer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-slate-50"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6 shadow-sm">
              <div className="flex items-center gap-0.5 text-orange-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm font-semibold text-blue-900 border-l border-blue-200 pl-2 ml-1">
                Helping families in Chembur for years
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto">
              Looking for a home in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Chembur?</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              We help you find great places to rent, buy, or sell. Let's find exactly what you're looking for before it hits the open market.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 transition-all shadow-lg hover:shadow-xl shadow-blue-600/25"
              >
                Find a Home
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-full hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Sell a Property
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500 font-medium">⚡ Drop your details and we'll reach out shortly.</p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">How we can help</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Whether you're moving in, moving out, or moving up, we've got you covered.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Buy */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group cursor-pointer">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HomeIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Looking to buy?</h3>
                <p className="text-slate-600 mb-6">Discover beautiful apartments and family homes in Chembur's best neighborhoods.</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-full w-fit">
                  View Homes for Sale <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Rent */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all group cursor-pointer">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Key className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Looking to rent?</h3>
                <p className="text-slate-600 mb-6">Find a great rental home that fits your budget, with landlords you can trust.</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-purple-700 bg-purple-50 px-4 py-2 rounded-full w-fit">
                  See Rental Listings <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Sell */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group cursor-pointer">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Looking to sell?</h3>
                <p className="text-slate-600 mb-6">Get a fair price for your property with our local expertise and network of buyers.</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 bg-orange-50 px-4 py-2 rounded-full w-fit">
                  What's my home worth? <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Chembur Section */}
        <section id="why-chembur" className="py-20 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why people love living in Chembur</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Chembur is rapidly becoming one of Mumbai's most popular neighborhoods. With the Eastern Freeway and new Metro lines, you get the perfect balance of easy commutes and a relaxed, green lifestyle.
                </p>
                <ul className="space-y-4">
                  {[
                    "Quick drive to South Mumbai & BKC",
                    "Great schools, hospitals, and shopping close by",
                    "Lots of parks, trees, and the golf club",
                    "Strong property value growth"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Star className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern Apartment"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Contact & Footer Section */}
      <section id="contact" className="bg-slate-50 pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 clip-path-polygon-[0_0,100%_0,100%_80%,0_100%]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            {/* Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
                Fast Response Guaranteed
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                Let's chat about your <span className="text-blue-600">real estate needs.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Drop your details below and we'll get back to you with options that actually match what you're looking for—no spam, just helpful local advice.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Personalized property matches sent to you",
                  "Help with negotiation and paperwork",
                  "No pressure, absolute privacy guaranteed"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <Star className="w-3 h-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lead Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-blue-900/5 border border-slate-100 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">Tell us what you're looking for</h3>
              <p className="text-slate-500 text-sm mb-8 relative z-10">Takes just a few seconds.</p>
              
              {formStatus === 'success' ? (
                <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Request Received!</h4>
                  <p className="text-slate-600">Thank you for your interest. Our real estate expert will contact you shortly.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-4 px-6 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                      <input id="firstName" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                      <input id="lastName" required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input id="phone" required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium text-slate-700">I am looking to...</label>
                    <select id="interest" required defaultValue="" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
                      <option value="" disabled>Select an option</option>
                      <option value="buy">Buy a property</option>
                      <option value="rent">Rent a property</option>
                      <option value="sell">Sell my property</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 px-6 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>Get in touch <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-bold text-slate-900">Chembur<span className="text-blue-600">Realty</span></span>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Chembur Realty. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-pink-50 hover:text-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
        <a
          href="#contact"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-full shadow-2xl hover:scale-105 transition-transform border-2 border-white"
        >
          <Send className="w-4 h-4" />
          <span className="font-bold text-sm">Contact Us</span>
        </a>
      </div>
    </div>
  );
}
