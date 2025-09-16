import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import lodhaLogo from '../img/logo-devloper/lodha.png';
import hiranandaniLogo from '../img/logo-devloper/hiranandani.png';

const logos = Array.from({ length: 24 }, (_, i) => (i % 2 === 0 ? lodhaLogo : hiranandaniLogo));
const developers = logos.map((logo, idx) => ({ id: idx + 1, logo, name: idx % 2 === 0 ? 'Lodha Group' : 'Hiranandani Group' }));

const DeveloperCard = ({ developer, isActive }) => {
  return (
    <div className="flex-shrink-0 w-1/2 sm:w-1/3 lg:w-1/6 px-2">
      <div className={`aspect-square rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${
        isActive 
          ? 'bg-purple-50 border-purple-200 shadow-md' 
          : 'bg-white border-gray-200 hover:bg-purple-25 hover:border-purple-100'
      }`}>
        <div className="w-full h-full flex items-center justify-center p-6">
          <img 
            src={developer.logo} 
            alt={developer.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const TopDevelopers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);



  // Calculate how many logos to show per view based on screen size
  const getLogosPerView = () => {
    if (typeof window === 'undefined') return 6;
    if (window.innerWidth < 640) return 2; // Mobile
    if (window.innerWidth < 1024) return 3; // Tablet
    return 6; // Desktop
  };

  const [logosPerView, setLogosPerView] = useState(getLogosPerView());

  // Update logos per view on window resize
  useEffect(() => {
    const handleResize = () => {
      setLogosPerView(getLogosPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.ceil(developers.length / logosPerView) - 1;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [developers.length, logosPerView, isDragging]);

  // Calculate transform based on current index
  const getTransform = () => {
    const percentage = 100 / logosPerView;
    return `translateX(-${currentIndex * percentage}%)`;
  };

  // Calculate total pages for pagination
  const totalPages = Math.ceil(developers.length / logosPerView);

  // Pagination dot click handler
  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex);
  };

  // Touch/Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-4 pl-3">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Developers</h2>
          <p className="text-gray-600">Get some inspirations from 1800+ skills</p>
        </div>
        <a 
          href="#" 
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
        >
          See All Developers
          <span className="text-lg">↗</span>
        </a>
      </div>

      {/* Carousel Container */}
      <div className="relative mb-8">
        <div 
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: getTransform() }}
          >
            {developers.map((developer, index) => (
              <DeveloperCard 
                key={developer.id} 
                developer={developer} 
                isActive={Math.floor(index / logosPerView) === currentIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-gray-800 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopDevelopers;