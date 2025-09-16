import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Theresa Webb',
    role: 'Marketing Coordinator',
    text: 'The template is really nice and offers quite a large set of options. It\'s beautiful and the coding is done quickly and seamlessly. Thank you!',
  },
  {
    id: 2,
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Cameron Williamson',
    role: 'Web Designer',
    text: 'The template is really nice and offers quite a large set of options. It\'s beautiful and the coding is done quickly and seamlessly. Thank you!',
  },
  {
    id: 3,
    img: 'https://randomuser.me/api/portraits/men/72.jpg',
    name: 'Marvin McKinney',
    role: 'Nursing Assistant',
    text: 'The template is really nice and offers quite a large set of options. It\'s beautiful and the coding is done quickly and seamlessly. Thank you!',
  },
  {
    id: 4,
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Jenny Wilson',
    role: 'Project Manager',
    text: 'The template is really nice and offers quite a large set of options. It\'s beautiful and the coding is done quickly and seamlessly. Thank you!',
  },
  {
    id: 5,
    img: 'https://randomuser.me/api/portraits/men/14.jpg',
    name: 'Robert Fox',
    role: 'Software Engineer',
    text: 'The template is really nice and offers quite a large set of options. It\'s beautiful and the coding is done quickly and seamlessly. Thank you!',
  },
  {
    id: 6,
    img: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: 'Kathryn Murphy',
    role: 'UI/UX Designer',
    text: 'The template is really nice and offers quite a large set of options. It\'s beautiful and the coding is done quickly and seamlessly. Thank you!',
  },
  {
    id: 7,
    img: 'https://randomuser.me/api/portraits/men/23.jpg',
    name: 'John Carter',
    role: 'Real Estate Investor',
    text: "Working with Realton was a breeze. Their platform's flexibility and ease of use helped me close deals faster than ever.",
  },
  {
    id: 8,
    img: 'https://randomuser.me/api/portraits/women/36.jpg',
    name: 'Angela Lee',
    role: 'Photographer',
    text: 'I love the modern design and intuitive layout. It made showcasing my property portfolio incredibly simple.',
  },
];

const TestimonialsCarousel = () => {
  // remove drag refs and handlers
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const carouselRef = useRef(null);
  
  // responsive cards per view
  useEffect(() => {
    const getCardsPerView = () => {
      if (typeof window === 'undefined') return 3;
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };
    const update = () => setCardsPerView(getCardsPerView());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  
  // auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const max = Math.ceil(testimonials.length / cardsPerView) - 1;
        return prev >= max ? 0 : prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerView]);
  
  // handle drag scrolling (optional)
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  
  const transform = `translateX(-${currentIndex * (100 / cardsPerView)}%)`;
  const centerIndex = currentIndex * cardsPerView + Math.floor(cardsPerView / 2);
  const totalPages = Math.ceil(testimonials.length / cardsPerView);
  
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          People Love Living With Realton
        </h2>
        <p className="text-gray-500">Aliquam lacinia diam quis lacus euismod</p>
      </div>
  
      {/* carousel container */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform }}
          >
            {testimonials.map((item, idx) => {
              const isActive = idx === centerIndex;
              return (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
                >
                  <div
                    className={`h-full rounded-xl border bg-white p-6 relative transition-shadow duration-300 ${isActive ? 'shadow-lg border-b-4 border-indigo-600' : 'border-gray-200'}` }
                  >
                    {/* quote icon */}
                    <span className="absolute top-4 right-4 text-4xl text-gray-200 select-none">
                      &ldquo;
                    </span>
  
                    {/* profile */}
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {item.name}
                        </h4>
                        <span className="text-gray-400 text-xs">
                          {item.role}
                        </span>
                      </div>
                    </div>
  
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  
        {/* navigation buttons removed as per request */}
      </div>
  
      {/* pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? 'bg-gray-800 w-6' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </section>
);
};

export default TestimonialsCarousel;