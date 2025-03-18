"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = [
  { name: "Clinical Laboratory", icon: "🔬" },
  { name: "Instruments", icon: "⚕️" },
  { name: "Furnishings", icon: "🛋️" },
  { name: "Diagnostic Instruments", icon: "📊" },
  { name: "Orthopedic", icon: "🦴" },
  { name: "Pharmaceuticals", icon: "💊" },
  { name: "Respiratory", icon: "🫁" },
  { name: "Apparel", icon: "👕" },
  { name: "Ambulatory Equipment", icon: "🚑" },
  { name: "Housekeeping", icon: "🧹" },
  { name: "Wound Care", icon: "🩹" },
  { name: "Office Supplies", icon: "📎" },
  { name: "IV Therapy", icon: "💉" },
  { name: "Wound Closure", icon: "🔄" },
  { name: "Body Pressure Relief", icon: "🛏️" },
  { name: "Physical Therapy", icon: "🏃" },
  { name: "Nutritional Supplies", icon: "🥄" },
  { name: "Ostomy", icon: "⭕" },
  { name: "Needles and Syringes", icon: "💉" },
  { name: "Indicators and Signage", icon: "🚸" },
  { name: "Personal Hygiene", icon: "🧼" },
  { name: "Gloves", icon: "🧤" },
  { name: "Sterilization", icon: "🧪" },
  { name: "Urological", icon: "🚽" },
  { name: "Utensils", icon: "🍽️" },
  { name: "Implants", icon: "🔧" }
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.1
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.15,
      staggerChildren: 0.02,
      delayChildren: 0.05
    }
  }
};

const menuItemVariants = {
  closed: { x: 50, opacity: 0 },
  open: { x: 0, opacity: 1 }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image 
                src="/RESCUELOGO.png" 
                alt="Rescue Pharma Logo" 
                width={140} 
                height={35} 
                priority 
                className="h-9 w-auto cursor-pointer"
                onClick={() => scrollToSection("home")}
              />
            </motion.div>
            <div className="hidden md:flex items-center space-x-10">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link text-[15px] font-medium tracking-wide ${
                    isScrolled ? "text-gray-800" : "text-gray-800"
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <motion.button
              className="md:hidden p-2.5 rounded-lg hover:bg-gray-100/80 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-800 rounded-full transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-gray-800 rounded-full transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 mobile-menu-backdrop z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="p-6">
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2.5 hover:bg-gray-100/80 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                <div className="space-y-2">
                  {["Home", "Products", "About", "Contact"].map((item) => (
                    <motion.button
                      key={item}
                      variants={menuItemVariants}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left px-4 py-3 text-[15px] font-medium text-gray-800 hover:text-primary hover:bg-blue-50/80 rounded-lg transition-all duration-200"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-[0%] z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Image 
                src="/RESCUELOGO.png" 
                alt="Rescue Pharma Logo" 
                width={200} 
                height={50} 
                priority 
                className="mx-auto mb-8"
              />
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.2 }}
            >
              Your Trusted Partner in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Healthcare Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              Delivering quality medical supplies and equipment to healthcare providers across the nation.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.2 }}
            >
              <button
                onClick={() => scrollToSection("products")}
                className="hero-button px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto"
              >
                Explore Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hero-button px-8 py-3 text-lg font-medium text-gray-700 border-2 border-gray-300 rounded-full hover:border-blue-600 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto"
              >
                Contact Us
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className="hero-stats"
            >
              <div className="flex justify-center items-center gap-8 md:gap-16">
                {[
                  { label: "Products", value: "500+" },
                  { label: "Clients", value: "1000+" },
                  { label: "Years", value: "20+" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative bg-gradient-to-b from-white to-gray-50">
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Product Categories</h2>
            <p className="text-gray-600 text-lg">
              Explore our comprehensive range of medical supplies and equipment.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mx-auto max-w-6xl">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="category-card"
              >
                <div className="icon group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Our Premium Brand Partners
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Partnering with leading healthcare brands to deliver quality medical supplies.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center max-w-6xl mx-auto">
            {[
              { name: "3M", logo: "/3m.png" },
              { name: "Romsons", logo: "/romsons.png" },
              { name: "Smith & Nephew", logo: "/smithnephew.png" },
              { name: "Sunways", logo: "/sunways.png" },
              { name: "Tynor", logo: "/tynor.png" }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-[180px] group"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 h-24 flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={150}
                    height={75}
                    className="object-contain w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Leadership
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-6"
            ></motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
            {/* MD's Message */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[360px] lg:max-w-[380px] mx-auto lg:mx-0 lg:sticky lg:top-24"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/md.jpg"
                  alt="Managing Director of Rescue Pharma"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 30vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 right-0 lg:-right-6 bg-white rounded-xl p-4 lg:p-5 shadow-lg max-w-[200px]">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">Madhusudan</h3>
                <p className="text-primary font-medium">Managing Director</p>
              </div>
            </motion.div>

            {/* Vision & Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                At Rescue Pharma, our vision is to be at the forefront of the pharmaceutical industry through innovation, excellence, and global reach. We are committed to delivering advanced medical solutions while upholding the highest standards of quality, integrity, and ethical practices—working towards a healthier and more accessible future for all.              </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                    </svg>
                  </span>
                  Our Mission
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    To discover, develop, and distribute pharmaceutical products that prevent, diagnose, and cure diseases, improving the quality of life for patients worldwide.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    To ensure accessibility to quality healthcare products while maintaining affordability and upholding our commitment to societal well-being.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    To continuously adapt and innovate in response to evolving healthcare needs, ensuring our solutions remain at the forefront of medical advancement.
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    To strengthen our presence in both domestic and international markets while maintaining the highest standards of quality and ethical business practices.
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-white border-t border-gray-100">
        <div className="section-content">
          <div className="container mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
              >
                About Us
              </motion.h2>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-24 h-1.5 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-6"
              ></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative max-w-[480px] mx-auto md:mx-0"
              >
                <Image 
                  src="/office.jpg" 
                  alt="About Us" 
                  width={480} 
                  height={320} 
                  className="rounded-2xl shadow-lg object-cover"
                  sizes="(max-width: 768px) 90vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Your Trusted Healthcare Partner</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                Rescue Pharma & Surgicals is a trusted distributor of pharmaceutical and surgical products, dedicated to providing high-quality medical solutions since 2000. Based in Mysore, we specialize in a wide range of healthcare products.
                With over two decades of experience, we have built a strong reputation by supplying to private and corporate hospitals, state and central government institutions, including Railways, ECHS, Military Hospitals, and esteemed medical colleges such as JSS, AIMS, MIMS, SIMS, HIMS, CIMS, KOIMS, KIMS, and MMCRI Mysore.
                At Rescue Pharma & Surgicals, we are committed to quality, reliability, and innovation in healthcare distribution. Our goal is to bridge the gap between medical advancements and accessibility, ensuring healthcare providers receive the best products to deliver exceptional patient care.
                </p>
                <ul className="space-y-4">
                  {[
                    "Comprehensive range of medical supplies",
                    "Quality-assured products from leading brands",
                    "Expert consultation and support",
                    "Reliable and timely delivery",
                    "Competitive pricing",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center text-gray-600"
                    >
                      <span className="bg-primary/10 text-primary p-1 rounded mr-3">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-white py-24 w-full border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            >
              Contact Us
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              We're here to help and answer any questions you might have
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-200"
            >
              <div className="bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Location</h3>
              <a 
                href="https://maps.app.goo.gl/DiMzeMoVhEo7Hzi97" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-link block"
              >
                <span className="text-gray-600 leading-relaxed">
                  Tilak Nagar, Mysuru, Welsey Road,<br />
                  Tilaknagar, Mysore - 570001<br />
                  <span className="text-gray-500 text-sm mt-2 block italic">(Near Sanimahathma Temple)</span>
                </span>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-200"
            >
              <div className="bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone</h3>
              <a 
                href="tel:+919900197397" 
                className="contact-link"
              >
                <span>+91 99001 97397</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-200"
            >
              <div className="bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
              <a 
                href="mailto:mdassociates.sudhan@gmail.com" 
                className="contact-link"
              >
                <span>mdassociates.sudhan@gmail.com</span>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-200"
            >
              <div className="bg-primary/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Map</h3>
              <div className="rounded-lg overflow-hidden shadow-sm hover:shadow transition-shadow duration-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.1657746454847!2d76.6436163!3d12.3052693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70127d8283e1%3A0x4c2b3188e6b3ed2e!2sRescue%20Pharma!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <Image 
            src="/RESCUELOGO.png" 
            alt="Rescue Pharma Logo" 
            width={150} 
            height={40} 
            className="mx-auto mb-6" 
          />
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rescue Pharma . All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
