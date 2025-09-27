import { MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DestinationCardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  price: string;
}

const DestinationCard = ({ 
  id, 
  name, 
  country, 
  image, 
  rating, 
  reviews, 
  description, 
  price 
}: DestinationCardProps) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/explore?destination=${name}`);
  };

  return (
    <div className="card-glass hover-scale group cursor-pointer" onClick={handleExplore}>
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 glass rounded-full px-3 py-1">
          <span className="text-white font-poppins font-semibold">{price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-playfair text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="text-sunset fill-sunset" size={16} />
            <span className="font-poppins text-sm font-medium text-foreground">{rating}</span>
            <span className="font-poppins text-sm text-muted-foreground">({reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={16} />
          <span className="font-poppins text-sm">{country}</span>
        </div>

        <p className="font-poppins text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <button 
          className="w-full mt-4 bg-gradient-tropical text-white py-3 rounded-xl font-poppins font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105"
          onClick={(e) => {
            e.stopPropagation();
            handleExplore();
          }}
        >
          Explore Destination
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;