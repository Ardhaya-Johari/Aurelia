import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const MyTrips = () => {
  const upcomingTrips = [
    {
      id: 1,
      destination: 'Bali, Indonesia',
      dates: 'Dec 15 - Dec 22, 2024',
      duration: '7 days',
      travelers: 2,
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Confirmed',
    },
    {
      id: 2,
      destination: 'Santorini, Greece',
      dates: 'Mar 10 - Mar 17, 2025',
      duration: '8 days',
      travelers: 1,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Planning',
    },
  ];

  const pastTrips = [
    {
      id: 3,
      destination: 'Maldives',
      dates: 'Aug 5 - Aug 12, 2024',
      duration: '7 days',
      travelers: 2,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Completed',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Trips
          </h1>
          <p className="font-poppins text-lg text-muted-foreground">
            Manage your travel adventures and create new memories
          </p>
        </div>

        {/* Upcoming Trips */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-8">Upcoming Adventures</h2>
          
          {upcomingTrips.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingTrips.map((trip) => (
                <div key={trip.id} className="card-glass hover-scale">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                      src={trip.image} 
                      alt={trip.destination}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        trip.status === 'Confirmed' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-sunset text-white'
                      }`}>
                        {trip.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-bold text-foreground">
                      {trip.destination}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="font-poppins text-sm">{trip.dates}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock size={16} />
                        <span className="font-poppins text-sm">{trip.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users size={16} />
                        <span className="font-poppins text-sm">{trip.travelers} traveler{trip.travelers > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-poppins font-medium hover:bg-primary/90 transition-colors">
                        View Details
                      </button>
                      <button className="flex-1 border border-border text-foreground py-2 px-4 rounded-lg font-poppins font-medium hover:bg-muted transition-colors">
                        Edit Trip
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <MapPin className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">No upcoming trips</h3>
              <p className="font-poppins text-muted-foreground mb-6">Start planning your next adventure!</p>
              <button className="btn-hero">
                Plan New Trip
              </button>
            </div>
          )}
        </section>

        {/* Past Trips */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-8">Travel Memories</h2>
          
          {pastTrips.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastTrips.map((trip) => (
                <div key={trip.id} className="card-glass hover-scale opacity-80 hover:opacity-100 transition-opacity">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                      src={trip.image} 
                      alt={trip.destination}
                      className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground">
                        {trip.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl font-bold text-foreground">
                      {trip.destination}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="font-poppins text-sm">{trip.dates}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock size={16} />
                        <span className="font-poppins text-sm">{trip.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users size={16} />
                        <span className="font-poppins text-sm">{trip.travelers} traveler{trip.travelers > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <button className="flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg font-poppins font-medium hover:bg-secondary/80 transition-colors">
                        View Photos
                      </button>
                      <button className="flex-1 border border-border text-foreground py-2 px-4 rounded-lg font-poppins font-medium hover:bg-muted transition-colors">
                        Book Again
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-poppins text-muted-foreground">No past trips to show yet.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MyTrips;