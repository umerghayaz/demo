import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSearch, FaUser, FaLinkedin  } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg dark:bg-dark-card" : "bg-transparent"}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img
            className="h-12 w-auto transform transition-transform hover:scale-105"
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9"
            alt="Logo"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9";
              e.target.alt = "Fallback Logo";
            }}
          />
          <span className="ml-3 text-2xl font-extrabold text-primary dark:text-dark-primary">Brand</span>
        </div>
  
        {/* Centered Navigation */}
        <nav className="hidden md:flex flex-grow justify-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-lg font-semibold text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary dark:bg-dark-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
            </a>
          ))}
        </nav>
  
        {/* Right-side LinkedIn Button */}
        <div className="hidden md:flex items-center space-x-6">
  <button className="text-2xl text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200">
    <FaLinkedin />
  </button>
  <button className="text-2xl text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200">
    <FaLinkedin />
  </button>
  <button className="text-2xl text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200">
    <FaLinkedin />
  </button>
</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </div>
  
    {/* Mobile menu */}
    <div
      className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"} fixed inset-0 bg-white dark:bg-dark-card z-40 p-6`}
    >
      <div className="space-y-6 text-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="block text-2xl font-bold text-accent hover:text-primary dark:text-dark-accent dark:hover:text-dark-primary transition-colors duration-200 py-3"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <div className="pt-6 border-t border-border dark:border-dark-border">
          <button className="w-full bg-primary text-primary-foreground dark:bg-dark-primary dark:text-dark-primary-foreground px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-xl font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
