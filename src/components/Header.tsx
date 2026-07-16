import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";
import logo from "@/assets/meggy-junny-logo.png.asset.json";

const Header = () => {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-main">
          <div className="flex items-center justify-between h-16 md:h-20 px-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo.url}
                alt="Meggy & Junny logo"
                className="h-12 md:h-14 w-auto"
              />
              <span className="font-brand font-semibold text-xl md:text-2xl text-primary">
                Meggy &amp; Junny
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Products
              </button>
              <Link
                to="/resources"
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Resources
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Cart & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-muted rounded-full transition-colors"
              >
                <ShoppingCart className="w-6 h-6 text-foreground" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 px-4 border-t border-border bg-background">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  Products
                </button>
                <Link
                  to="/resources"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  Resources
                </Link>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  Contact
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
