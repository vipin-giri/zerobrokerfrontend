import React from 'react';
import { FiShield, FiKey, FiDollarSign, FiHome } from 'react-icons/fi';

const features = [
  {
    Icon: FiShield,
    title: 'Property Management',
    desc: 'Aliquam lacinia diam quis lacus euismod tristique. Nullam placerat ex eget velit tincidunt.',
  },
  {
    Icon: FiKey,
    title: 'Mortgage Services',
    desc: 'Aliquam lacinia diam quis lacus euismod tristique. Nullam placerat ex eget velit tincidunt.',
  },
  {
    Icon: FiDollarSign,
    title: 'Currency Services',
    desc: 'Aliquam lacinia diam quis lacus euismod tristique. Nullam placerat ex eget velit tincidunt.',
  },
  {
    Icon: FiHome,
    title: 'Smart Home',
    desc: 'Aliquam lacinia diam quis lacus euismod tristique. Nullam placerat ex eget velit tincidunt.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#181A20] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
        {/* Left column */}
        <div className="w-full md:w-5/12 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Many Reason to Why Choose Us
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Aliquam lacinia diam quis lacus euismod
          </p>
        </div>

        {/* Right column grid */}
        <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-4">
              <Icon className="w-8 h-8 text-white" />
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;