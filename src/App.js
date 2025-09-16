import React from 'react';
import NewLaunchCarousel from './components/NewLaunchCarousel';
import PropertyTypeExplorer from './components/PropertyTypeExplorer';
import TopDevelopers from './components/TopDevelopers';
import BrandTrustShowcase from './components/worldsbestdevloper';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import OurBlog from './components/ourblog';
import Download from './components/download';

const App = () => {
  return (
    <div className="min-h-screen">
      <NewLaunchCarousel />
      <PropertyTypeExplorer />
      <TopDevelopers />
      <BrandTrustShowcase />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <OurBlog />
      <Download />
    </div>
  );
};

export default App;
