import React from 'react';

// A simple list of placeholder brands. In a real project, replace the names and
// optionally swap the generic icon for each brand-specific SVG / image.
const brands = [
  'Logoipsum',
  'AcmeCo',
  'Globex',
  'Initech',
  'Umbrella',
  'Soylent',
];

const BrandTrustShowcase = () => {
  return (
    <section className="w-full bg-white py-12">
      {/* Subtitle */}
      <h3 className="text-center text-sm sm:text-base font-medium text-gray-500 mb-10">
        Trusted by the world&apos;s best
      </h3>

      {/* Brands row */}
      <div
        className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 px-4"
      >
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex items-center gap-2 text-[#0a2540]"
          >
            {/* simple round icon rendered in the same monochrome navy tone */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-current"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="whitespace-nowrap font-semibold tracking-tight">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandTrustShowcase;