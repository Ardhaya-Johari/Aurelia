import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-tropical.jpg';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/explore?destination=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const popularSearches = ['Bali', 'Maldives', 'Santorini', 'Fiji', 'Hawaii'];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 fade-up">
          Adventure Starts Here
        </h1>
        <p className="font-poppins text-xl md:text-2xl text-white/90 mb-12 fade-up">
          Discover breathtaking destinations and create unforgettable memories
        </p>

        {/* Search Bar */}
        <div className="fade-up">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="glass rounded-full p-2 flex items-center gap-4">
              <div className="flex items-center gap-3 flex-1 px-4">
                <MapPin className="text-primary" size={20} />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent text-white placeholder-white/70 font-poppins text-lg flex-1 outline-none"
                />
              </div>
              <button
                type="submit"
                className="btn-hero flex items-center gap-2 rounded-full"
              >
                <Search size={20} />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="mt-8">
            <p className="text-white/80 font-poppins mb-4">Popular destinations:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((destination) => (
                <button
                  key={destination}
                  onClick={() => {
                    setSearchTerm(destination);
                    navigate(`/explore?destination=${destination}`);
                  }}
                  className="glass px-4 py-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300 font-poppins"
                >
                  {destination}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;