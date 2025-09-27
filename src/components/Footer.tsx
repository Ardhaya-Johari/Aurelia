import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const travelQuotes = [
    "The world is a book, and those who do not travel read only one page.",
    "Adventure awaits those who seek it.",
    "Collect moments, not things.",
  ];

  const currentQuote = travelQuotes[Math.floor(Math.random() * travelQuotes.length)];

  return (
    <footer className="bg-gradient-to-r from-ocean-dark to-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Quote */}
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-bold">Aurelia</h3>
            <blockquote className="font-poppins text-white/90 italic">
              "{currentQuote}"
            </blockquote>
            <div className="flex items-center gap-2">
              <span className="font-poppins text-sm">Made with</span>
              <Heart className="text-sunset fill-sunset" size={16} />
              <span className="font-poppins text-sm">for adventurers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Explore Destinations', 'My Trips', 'Travel Guides', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="font-poppins text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <p className="font-poppins text-white/80">
                Email: hello@aurelia.travel
              </p>
              <p className="font-poppins text-white/80">
                Phone: +1 (555) 123-4567
              </p>
              <div className="flex gap-4 pt-4">
                <a 
                  href="#" 
                  className="p-2 glass rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 glass rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 glass rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="font-poppins text-white/70">
            © 2024 Aurelia. All rights reserved. Adventure starts here.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;