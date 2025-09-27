import DestinationCard from './DestinationCard';

const PopularDestinations = () => {
  const destinations = [
    {
      id: '1',
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      rating: 4.8,
      reviews: 2547,
      description: 'Experience the perfect blend of culture, beaches, and adventure in this tropical paradise.',
      price: 'From $89/night',
    },
    {
      id: '2',
      name: 'Maldives',
      country: 'Indian Ocean',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      rating: 4.9,
      reviews: 1834,
      description: 'Luxury overwater villas and pristine coral reefs await in this exclusive island paradise.',
      price: 'From $299/night',
    },
    {
      id: '3',
      name: 'Santorini',
      country: 'Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      rating: 4.7,
      reviews: 3421,
      description: 'Iconic white buildings and breathtaking sunsets create the perfect romantic getaway.',
      price: 'From $156/night',
    },
    {
      id: '4',
      name: 'Fiji',
      country: 'South Pacific',
      image: 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      rating: 4.6,
      reviews: 1256,
      description: 'Crystal clear waters and traditional Fijian hospitality in this untouched paradise.',
      price: 'From $124/night',
    },
    {
      id: '5',
      name: 'Maui',
      country: 'Hawaii, USA',
      image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      rating: 4.8,
      reviews: 2891,
      description: 'Volcanic landscapes, golden beaches, and the spirit of aloha await your discovery.',
      price: 'From $189/night',
    },
    {
      id: '6',
      name: 'Seychelles',
      country: 'East Africa',
      image: 'https://images.unsplash.com/photo-1587643985510-d4aab63fc4bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      rating: 4.7,
      reviews: 967,
      description: 'Granite boulders, pristine beaches, and rare wildlife in this Eden-like archipelago.',
      price: 'From $267/night',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-sand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Popular Destinations
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the world's most breathtaking locations, handpicked for their natural beauty and unique experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;