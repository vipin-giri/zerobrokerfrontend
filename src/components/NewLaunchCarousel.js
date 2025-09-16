import React, { useState, useEffect, useRef } from 'react';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaBed, 
  FaBath, 
  FaExpand, 
  FaShare, 
  FaChartBar, 
  FaHeart, 
  FaBolt 
} from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 px-2 pb-6">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* Card Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-full object-cover"
          />
          {/* Featured Badge */}
          <div className="absolute top-3 left-3 bg-blue-100 text-blue-600 px-3 py-1 rounded-[6px] text-xs font-semibold uppercase flex items-center gap-1">
            <FaBolt size={12} />
            FEATURED
          </div>
          {/* Price Tag */}
          <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-md shadow-md">
            <span className="text-sm font-bold text-gray-900">₹{property.price}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{property.title}</h3>
          <p className="text-sm text-gray-500 mb-4">{property.location}</p>

          {/* Property Features */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <FaBed size={14} />
              <span>{property.beds} Bed</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <FaBath size={14} />
              <span>{property.baths} Bath</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <FaExpand size={14} />
              <span>{property.sqft} sqft</span>
            </div>
          </div>

          {/* Card Footer */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-500 font-medium">For Sell</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
                <FaShare size={14} className="text-gray-600" />
              </button>
              <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
                <FaChartBar size={14} className="text-gray-600" />
              </button>
              <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
                <FaHeart size={14} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RealEstateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  // Sample property data
  const properties = [
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
      title: "Kalpataru Advay Borivali",
      location: "Borivali, Mumbai",
      price: "2.1 Cr",
      beds: 3,
      baths: 4,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=200&fit=crop&crop=house"
    },
    {
      id: 3,
      title: "Kalpataru Advay Borivali",
      location: "Borivali, Mumbai",
      price: "2.1 Cr",
      beds: 3,
      baths: 4,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=200&fit=crop&crop=house"
    },
    {
      id: 4,
      title: "Kalpataru Advay Borivali",
      location: "Borivali, Mumbai",
      price: "2.1 Cr",
      beds: 3,
      baths: 4,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=200&fit=crop&crop=house"
    },
    {
      id: 5,
      title: "Kalpataru Advay Borivali",
      location: "Borivali, Mumbai",
      price: "2.1 Cr",
      beds: 3,
      baths: 4,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=200&fit=crop&crop=house"
    },
    {
      id: 6,
      title: "Kalpataru Advay Borivali",
      location: "Borivali, Mumbai",
      price: "2.1 Cr",
      beds: 3,
      baths: 4,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&h=200&fit=crop&crop=house"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, properties.length - 4); // Show 4 cards at once on desktop
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 2000); // Auto-scroll every 2 seconds

    return () => clearInterval(interval);
  }, [properties.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : 0);
  };

  const goToNext = () => {
    const maxIndex = Math.max(0, properties.length - 4);
    setCurrentIndex((prevIndex) => prevIndex < maxIndex ? prevIndex + 1 : maxIndex);
  };

  // Calculate transform based on current index
  const getTransform = () => {
    if (window.innerWidth >= 1280) {
      // XL screens - show 4 cards
      return `translateX(-${currentIndex * 25}%)`;
    } else if (window.innerWidth >= 1024) {
      // LG screens - show 3 cards
      return `translateX(-${currentIndex * 33.333}%)`;
    } else if (window.innerWidth >= 640) {
      // SM screens - show 2 cards
      return `translateX(-${currentIndex * 50}%)`;
    } else {
      // Mobile - show 1 card
      return `translateX(-${currentIndex * 100}%)`;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-4 pl-3">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">New Launch</h2>
          <p className="text-gray-600">Aliquam lacinia diam quis lacus euismod</p>
        </div>
        <a 
          href="#" 
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
        >
          See All Properties
          <span className="text-lg">↗</span>
        </a>
      </div>

      {/* Carousel Container */}
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 z-10"
          disabled={currentIndex === 0}
        >
          <FaChevronLeft size={20} className="text-gray-600" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 z-10"
          disabled={currentIndex >= Math.max(0, properties.length - 4)}
        >
          <FaChevronRight size={20} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default RealEstateCarousel;