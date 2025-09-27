import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MapPin, Thermometer, Droplets, Wind, Sun, Camera, Users, Calendar } from 'lucide-react';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
}

interface DestinationData {
  name: string;
  country: string;
  description: string;
  longDescription: string;
  images: string[];
  weather: WeatherData;
  bestTimeToVisit: string;
  activities: string[];
  culture: string;
  localCurrency: string;
  language: string;
  population: string;
}

const Explore = () => {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('destination') || 'Bali';
  const [destinationData, setDestinationData] = useState<DestinationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for different destinations
    const mockDestinations: { [key: string]: DestinationData } = {
      'Bali': {
        name: 'Bali',
        country: 'Indonesia',
        description: 'The Island of the Gods - where ancient temples meet pristine beaches.',
        longDescription: 'Bali is a tropical paradise that seamlessly blends rich cultural heritage with stunning natural beauty. From the terraced rice fields of Ubud to the pristine beaches of Nusa Dua, this Indonesian island offers something for every traveler. Experience traditional Hindu ceremonies, indulge in world-class spa treatments, surf perfect waves, or trek through lush rainforests to hidden waterfalls.',
        images: [
          'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
          'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
          'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
        ],
        weather: {
          temperature: 28,
          humidity: 75,
          windSpeed: 12,
          condition: 'Partly Cloudy',
        },
        bestTimeToVisit: 'April to October (Dry Season)',
        activities: ['Temple Hopping', 'Beach Relaxation', 'Rice Terrace Tours', 'Volcano Hiking', 'Surfing', 'Spa & Wellness'],
        culture: 'Hindu-Balinese culture with colorful ceremonies and traditional arts',
        localCurrency: 'Indonesian Rupiah (IDR)',
        language: 'Indonesian, Balinese',
        population: '4.3 million',
      },
      'Maldives': {
        name: 'Maldives',
        country: 'Indian Ocean',
        description: 'Luxury overwater villas in crystal-clear turquoise waters.',
        longDescription: 'The Maldives represents the pinnacle of tropical luxury, with over 1,000 coral islands scattered across the Indian Ocean. This archipelago is famous for its overwater bungalows, world-class diving sites, and unparalleled privacy. Each resort typically occupies its own island, offering guests exclusive access to pristine beaches and vibrant coral reefs teeming with marine life.',
        images: [
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
          'https://images.unsplash.com/photo-1571919743851-c8c4b5d76df5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
        ],
        weather: {
          temperature: 30,
          humidity: 80,
          windSpeed: 15,
          condition: 'Sunny',
        },
        bestTimeToVisit: 'November to April (Dry Season)',
        activities: ['Diving & Snorkeling', 'Overwater Villa Stay', 'Sunset Cruises', 'Spa Treatments', 'Water Sports', 'Private Beach Dining'],
        culture: 'Islamic culture with Maldivian traditions and maritime heritage',
        localCurrency: 'Maldivian Rufiyaa (MVR)',
        language: 'Dhivehi, English',
        population: '540,000',
      },
      'Santorini': {
        name: 'Santorini',
        country: 'Greece',
        description: 'Iconic white buildings overlooking stunning volcanic caldera views.',
        longDescription: 'Santorini is one of the most photographed destinations in the world, famous for its dramatic cliff-top villages, stunning sunsets, and distinctive Cycladic architecture. This volcanic island in the Aegean Sea offers a perfect blend of natural beauty, ancient history, and modern luxury. Explore charming villages like Oia and Fira, taste exceptional local wines, and discover black sand beaches formed by ancient volcanic activity.',
        images: [
          'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
          'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
          'https://images.unsplash.com/photo-1567449302030-e9b4eab0f38b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
        ],
        weather: {
          temperature: 24,
          humidity: 65,
          windSpeed: 18,
          condition: 'Sunny',
        },
        bestTimeToVisit: 'April to October (Warm Season)',
        activities: ['Sunset Watching', 'Wine Tasting', 'Archaeological Sites', 'Beach Hopping', 'Boat Tours', 'Photography'],
        culture: 'Greek culture with Cycladic traditions and maritime heritage',
        localCurrency: 'Euro (EUR)',
        language: 'Greek, English',
        population: '15,500',
      },
    };

    // Simulate loading and fetch destination data
    setTimeout(() => {
      const data = mockDestinations[destination] || mockDestinations['Bali'];
      setDestinationData(data);
      setLoading(false);
    }, 1000);
  }, [destination]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-poppins text-lg text-muted-foreground">Loading destination...</p>
        </div>
      </div>
    );
  }

  if (!destinationData) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="font-playfair text-3xl font-bold text-foreground mb-4">Destination Not Found</h1>
          <p className="font-poppins text-muted-foreground">We couldn't find information about this destination.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={destinationData.images[0]} 
          alt={destinationData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
              {destinationData.name}
            </h1>
            <div className="flex items-center justify-center gap-2">
              <MapPin size={20} />
              <span className="font-poppins text-xl">{destinationData.country}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
                About {destinationData.name}
              </h2>
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                {destinationData.longDescription}
              </p>
            </div>

            {/* Image Gallery */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destinationData.images.slice(1).map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-xl hover-scale">
                    <img 
                      src={image} 
                      alt={`${destinationData.name} ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">Popular Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destinationData.activities.map((activity, index) => (
                  <div key={index} className="glass p-4 rounded-xl hover-scale">
                    <span className="font-poppins text-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <div className="card-glass">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Sun className="text-sunset" />
                Current Weather
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-muted-foreground">Temperature</span>
                  <div className="flex items-center gap-1">
                    <Thermometer size={16} className="text-sunset" />
                    <span className="font-poppins font-semibold">{destinationData.weather.temperature}°C</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-muted-foreground">Humidity</span>
                  <div className="flex items-center gap-1">
                    <Droplets size={16} className="text-ocean" />
                    <span className="font-poppins font-semibold">{destinationData.weather.humidity}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-muted-foreground">Wind Speed</span>
                  <div className="flex items-center gap-1">
                    <Wind size={16} className="text-muted-foreground" />
                    <span className="font-poppins font-semibold">{destinationData.weather.windSpeed} km/h</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <span className="font-poppins text-sm text-center block">{destinationData.weather.condition}</span>
                </div>
              </div>
            </div>

            {/* Travel Info */}
            <div className="card-glass">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-4">Travel Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} className="text-primary" />
                    <span className="font-poppins font-semibold text-sm">Best Time to Visit</span>
                  </div>
                  <p className="font-poppins text-sm text-muted-foreground">{destinationData.bestTimeToVisit}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Users size={16} className="text-primary" />
                    <span className="font-poppins font-semibold text-sm">Population</span>
                  </div>
                  <p className="font-poppins text-sm text-muted-foreground">{destinationData.population}</p>
                </div>
                <div>
                  <span className="font-poppins font-semibold text-sm block mb-1">Language</span>
                  <p className="font-poppins text-sm text-muted-foreground">{destinationData.language}</p>
                </div>
                <div>
                  <span className="font-poppins font-semibold text-sm block mb-1">Currency</span>
                  <p className="font-poppins text-sm text-muted-foreground">{destinationData.localCurrency}</p>
                </div>
                <div>
                  <span className="font-poppins font-semibold text-sm block mb-1">Culture</span>
                  <p className="font-poppins text-sm text-muted-foreground">{destinationData.culture}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;