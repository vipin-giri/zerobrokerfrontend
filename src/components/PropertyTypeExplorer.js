import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Home, Bath, Maximize, Share, Heart, Star } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* Card Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
          {/* Featured Badge */}
          <div className="absolute top-3 left-3 bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-xs font-semibold uppercase flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            FEATURED
          </div>
          {/* Price Tag */}
          <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-md shadow-md">
            <span className="text-sm font-bold text-gray-900">₹{property.price}</span>
          </div>
        </div>

        {/* Card Body - increased padding by 2px (from p-5 to px-5 py-7) */}
        <div className="px-7 py-7">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{property.title}</h3>
          <p className="text-sm text-gray-500 mb-4">{property.location}</p>

          {/* Property Features */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Home className="w-4 h-4" />
              <span>{property.beds} bed</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Bath className="w-4 h-4" />
              <span>{property.baths} bath</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Maximize className="w-4 h-4" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-200 mb-4"></div>

          {/* Card Footer */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700 font-medium">For Sell</span>
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center hover:bg-gray-50 transition-colors p-1 rounded">
                <Maximize className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center hover:bg-gray-50 transition-colors p-1 rounded">
                <Share className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center hover:bg-gray-50 transition-colors p-1 rounded">
                <Heart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyCarousel = ({ properties, sectionId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : 0);
  };

  const goToNext = () => {
    const maxIndex = Math.max(0, properties.length - 4);
    setCurrentIndex((prevIndex) => prevIndex < maxIndex ? prevIndex + 1 : maxIndex);
  };

  const getTransform = () => {
    if (typeof window === 'undefined') return 'translateX(0%)';
    
    if (window.innerWidth >= 1280) {
      return `translateX(-${currentIndex * 25}%)`;
    } else if (window.innerWidth >= 1024) {
      return `translateX(-${currentIndex * 33.333}%)`;
    } else if (window.innerWidth >= 640) {
      return `translateX(-${currentIndex * 50}%)`;
    } else {
      return `translateX(-${currentIndex * 100}%)`;
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: getTransform() }}
        >
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 z-10"
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={20} className="text-gray-600" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 z-10"
        disabled={currentIndex >= Math.max(0, properties.length - 4)}
      >
        <ChevronRight size={20} className="text-gray-600" />
      </button>
    </div>
  );
};

const PropertyExplorer = () => {
  const [activeCategory, setActiveCategory] = useState('residential');

  const categories = [
    { id: 'residential', name: 'Residential Projects' },
    { id: 'commercial', name: 'Commercial Projects' },
    { id: 'new-launches', name: 'New Launches' },
    { id: 'bungalows', name: 'Bungalows/Villas' },
    { id: 'plots', name: 'Plots/Lands' }
  ];

  const scrollToSection = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Sample property data
  const sampleProperties = [
    {
      id: 1,
      title: "Kalpataru Advay Borivali",
      location: "Borivali, Mumbai",
      price: "2.1 Cr",
      beds: 3,
      baths: 4,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=200&fit=crop&crop=house"
    },
    {
      id: 2,
      title: "Prestige Lakeside Habitat",
      location: "Whitefield, Bangalore",
      price: "1.8 Cr",
      beds: 2,
      baths: 3,
      sqft: 1100,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=200&fit=crop&crop=house"
    },
    {
      id: 3,
      title: "Godrej Properties Elite",
      location: "Pune, Maharashtra",
      price: "3.2 Cr",
      beds: 4,
      baths: 5,
      sqft: 1500,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=200&fit=crop&crop=house"
    },
    {
      id: 4,
      title: "DLF Capital Greens",
      location: "Gurgaon, Delhi NCR",
      price: "2.8 Cr",
      beds: 3,
      baths: 4,
      sqft: 1300,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=200&fit=crop&crop=house"
    },
    {
      id: 5,
      title: "Brigade Gateway",
      location: "Rajajinagar, Bangalore",
      price: "2.5 Cr",
      beds: 3,
      baths: 4,
      sqft: 1250,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=200&fit=crop&crop=house"
    },
    {
      id: 6,
      title: "Sobha Royal Pavilion",
      location: "Sarjapur, Bangalore",
      price: "1.9 Cr",
      beds: 2,
      baths: 3,
      sqft: 1050,
      image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=200&fit=crop&crop=house"
    }
  ];

  const propertyTypes = {
    residential: {
      title: 'Residential Projects',
      subtitle: 'Discover premium apartments and residential complexes in prime locations',
      properties: sampleProperties
    },
    commercial: {
      title: 'Commercial Projects',
      subtitle: 'Explore office spaces and commercial properties for business investments',
      properties: sampleProperties.map(p => ({...p, id: p.id + 100}))
    },
    'new-launches': {
      title: 'New Launches',
      subtitle: 'Latest property launches with modern amenities and competitive pricing',
      properties: sampleProperties.map(p => ({...p, id: p.id + 200}))
    },
    bungalows: {
      title: 'Bungalows/Villas',
      subtitle: 'Luxurious independent houses and villas with spacious layouts',
      properties: sampleProperties.map(p => ({...p, id: p.id + 300}))
    },
    plots: {
      title: 'Plots/Lands',
      subtitle: 'Prime land parcels and plots for custom construction projects',
      properties: sampleProperties.map(p => ({...p, id: p.id + 400}))
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header Section - removed py-16, now no top/bottom spacing */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Property Types</h1>
          <p className="text-lg text-gray-600 mb-12">Choose from various property categories to find your ideal home</p>
          
          {/* Category Selector Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-400 hover:shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Property Sections - removed py-12, now no top/bottom spacing */}
      <div className="max-w-7xl mx-auto px-4">
        {Object.entries(propertyTypes).map(([key, section]) => (
          <div key={key} id={key} className="mb-20">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-4 pl-3">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{section.title}</h2>
                <p className="text-gray-600">{section.subtitle}</p>
              </div>
              <a 
                href="#" 
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                See All Properties
                <span className="text-lg">↗</span>
              </a>
            </div>

            {/* Property Carousel */}
            <PropertyCarousel properties={section.properties} sectionId={key} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyExplorer;