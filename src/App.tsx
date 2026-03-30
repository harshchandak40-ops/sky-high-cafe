/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ChevronRight, 
  Flame, 
  Users, 
  Heart, 
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  Menu as MenuIcon,
  X,
  Coffee,
  Pizza,
  IceCream,
  Calendar,
  Navigation
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const SectionHeading = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={cn("mb-12", centered && "text-center")}
  >
    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-gradient">{title}</h2>
    {subtitle && <p className="text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </motion.div>
);

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider", className)}>
    {children}
  </span>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Pink Sauce Pasta', price: '₹249', desc: 'Creamy blend of red & white sauce with exotic veggies.', img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80' },
    { name: 'Honey Chilli Potato', price: '₹189', desc: 'Crispy potatoes tossed in sweet & spicy honey glaze.', img: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=400&q=80' },
    { name: 'Hot Brownie', price: '₹149', desc: 'Sizzling chocolate brownie with vanilla ice cream.', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80' },
    { name: 'Masala Dosa', price: '₹129', desc: 'Crispy crepe filled with spiced potato mash.', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chilly Paneer', price: '₹219', desc: 'Indo-Chinese classic with soft paneer cubes.', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80' },
    { name: 'Mojitos', price: '₹119', desc: 'Refreshing mint & lime cooler to beat the heat.', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' },
  ];

  const whyChooseUs = [
    { icon: <Sparkles className="text-brand-orange" />, title: 'Tasty & Hygienic', desc: 'Fresh ingredients prepared with utmost care and love.' },
    { icon: <Flame className="text-brand-orange" />, title: 'Cozy Ambience', desc: 'Warm fireplace and soft lighting for the perfect mood.' },
    { icon: <Users className="text-brand-orange" />, title: 'Family Friendly', desc: 'Dedicated spaces for families and birthday groups.' },
    { icon: <Clock className="text-brand-orange" />, title: 'Fast Service', desc: 'Quick turnaround time so you never have to wait hungry.' },
  ];

  const offers = [
    { title: 'Friends Combo', price: '₹599', items: '2 Pastas + 2 Mojitos + 1 Fries', badge: 'Popular', color: 'from-orange-500 to-red-600' },
    { title: 'Couple Special', price: '₹449', items: '1 Pizza + 2 Shakes + 1 Brownie', badge: 'Romantic', color: 'from-pink-500 to-rose-600' },
    { title: 'Birthday Treat', price: '15% OFF', items: 'On bills above ₹1500', badge: 'Best Value', color: 'from-amber-500 to-yellow-600' },
  ];

  const testimonials = [
    { name: 'Rahul Sharma', review: 'Food was so tasty and service was amazing. Best pasta in Baran!', rating: 5 },
    { name: 'Priya Verma', review: 'Best vibes and very friendly staff. Perfect for weekend hangouts.', rating: 5 },
    { name: 'Ankit Jain', review: 'Great place but slightly premium pricing. Worth it for the ambience!', rating: 4 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* --- Header --- */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass py-2" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
              <Coffee className="text-white" size={24} />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">
              SKY HIGH <span className="text-brand-orange">CAFE</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#menu" className="hover:text-brand-orange transition-colors">Menu</a>
            <a href="#about" className="hover:text-brand-orange transition-colors">Why Us</a>
            <a href="#offers" className="hover:text-brand-orange transition-colors">Offers</a>
            <a href="#location" className="hover:text-brand-orange transition-colors">Location</a>
            <button className="btn-primary py-2 px-6 text-sm">Book Table</button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center gap-8 text-2xl font-bold"
          >
            <a href="#menu" onClick={() => setIsMenuOpen(false)}>Menu</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Why Us</a>
            <a href="#offers" onClick={() => setIsMenuOpen(false)}>Offers</a>
            <a href="#location" onClick={() => setIsMenuOpen(false)}>Location</a>
            <button className="btn-primary w-64" onClick={() => setIsMenuOpen(false)}>Book Table</button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {/* --- Hero Section --- */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80" 
              alt="Cafe Ambience" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/50" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />)}
                </div>
                <span className="text-sm font-semibold text-gray-300">4.2 Rating (600+ Reviews)</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
                Elevate Your <br />
                <span className="text-gradient">Dining Experience</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Experience the perfect blend of comfort, taste, and luxury at Baran's most loved cafe. 
                Where every meal tells a story.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                  Order Now <ChevronRight size={20} />
                </button>
                <button className="btn-secondary w-full sm:w-auto">
                  Book Your Table
                </button>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium animate-pulse">
                <Flame size={16} />
                Live: Usually Busy – Visit before peak hours!
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-gold"
          >
            <ChevronRight size={32} className="rotate-90" />
          </motion.div>
        </section>

        {/* --- Menu Highlights --- */}
        <section id="menu" className="section-padding bg-brand-dark">
          <SectionHeading 
            title="Chef's Specials" 
            subtitle="Handpicked favorites that our customers can't get enough of. Prepared fresh, served hot."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-3xl overflow-hidden group hover:border-brand-orange/50 transition-all"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-md px-3 py-1 rounded-full text-brand-gold font-bold">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-orange transition-colors">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{item.desc}</p>
                  <button className="w-full py-3 border border-white/10 rounded-xl font-semibold hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center gap-2">
                    Order Now <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="btn-secondary">View Full Menu</button>
          </div>
        </section>

        {/* --- Why Choose Us --- */}
        <section id="about" className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Why People <span className="text-gradient">Love Us</span>
              </h2>
              <p className="text-gray-400 mb-10 text-lg">
                We believe dining is not just about food; it's about the memories you create. 
                At Sky High Cafe, we strive to make every visit special.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" 
                  alt="Cafe Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl max-w-xs animate-float">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                    <Heart className="text-brand-black" size={20} fill="currentColor" />
                  </div>
                  <span className="font-bold">Perfect for Couples</span>
                </div>
                <p className="text-xs text-gray-400">Our cozy fireplace corner is the most requested spot for dates.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Offers & Combos --- */}
        <section id="offers" className="section-padding bg-brand-dark overflow-hidden">
          <SectionHeading 
            title="Exclusive Offers" 
            subtitle="Great food is better when shared. Grab our limited-time combo deals today!"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "relative p-8 rounded-3xl overflow-hidden group",
                  "bg-gradient-to-br", offer.color
                )}
              >
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 backdrop-blur-md text-white">{offer.badge}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <div className="text-4xl font-bold mb-4">{offer.price}</div>
                <p className="text-white/80 mb-8 font-medium">{offer.items}</p>
                <button className="w-full py-3 bg-white text-brand-black rounded-xl font-bold hover:bg-gray-100 transition-all">
                  Grab Offer Now
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-brand-orange font-bold animate-pulse">🔥 Limited Time Offers - Order Before They Expire!</p>
          </div>
        </section>

        {/* --- Testimonials --- */}
        <section className="section-padding">
          <SectionHeading 
            title="What Diners Say" 
            subtitle="Rated 4.2 by 600+ happy customers in Baran."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl relative"
              >
                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < t.rating ? "currentColor" : "none"} />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{t.review}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center font-bold text-brand-orange">
                    {t.name[0]}
                  </div>
                  <span className="font-bold">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Location --- */}
        <section id="location" className="section-padding bg-brand-dark">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-brand-orange/20 text-brand-orange mb-4">Visit Us</Badge>
              <h2 className="text-4xl font-serif font-bold mb-6">Find Us in <span className="text-gradient">Baran</span></h2>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <MapPin className="text-brand-orange shrink-0" />
                  <p className="text-gray-300">Gandhi Colony, Baran, Rajasthan - 325205</p>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-brand-orange shrink-0" />
                  <p className="text-gray-300">Open Daily: 11:00 AM - 11:00 PM</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-brand-orange shrink-0" />
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 italic">"Easily accessible location – perfect for quick visits & long hangouts"</p>
              <button className="btn-primary flex items-center gap-2">
                <Navigation size={20} /> Get Directions
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Google Maps Embed Placeholder - In a real app, use a real API key or iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.6477161875!2d76.5133!3d25.2133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f7f0000000000%3A0x0!2zQmFyYW4sIFJhamFzdGhhbg!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-brand-black border-t border-white/5 pt-16 pb-32 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                <Coffee className="text-white" size={24} />
              </div>
              <span className="text-2xl font-serif font-bold">SKY HIGH CAFE</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8">
              Your go-to place in Baran for great food & vibes. We serve happiness on a plate, one dish at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-orange transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-orange transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-orange transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#menu" className="hover:text-white transition-colors">Full Menu</a></li>
              <li><a href="#offers" className="hover:text-white transition-colors">Offers & Deals</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Book a Party</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>11 AM - 11 PM</span></li>
              <li className="flex justify-between"><span>Sat - Sun</span> <span>11 AM - 12 AM</span></li>
              <li className="text-brand-orange font-semibold mt-4">Open on Holidays!</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} The Sky High Cafe, Baran. All rights reserved.
        </div>
      </footer>

      {/* --- Sticky Bottom Bar (Mobile Only) --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass p-4 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.5)]">
        <button className="flex-1 btn-primary py-3 px-2 text-xs flex items-center justify-center gap-1">
          <Pizza size={16} /> Order Now
        </button>
        <button className="flex-1 btn-secondary py-3 px-2 text-xs flex items-center justify-center gap-1 border-white/20 text-white">
          <Phone size={16} /> Call Now
        </button>
        <button className="flex-1 bg-brand-gold text-brand-black py-3 px-2 text-xs font-bold rounded-full flex items-center justify-center gap-1">
          <Calendar size={16} /> Book Table
        </button>
      </div>
    </div>
  );
}
