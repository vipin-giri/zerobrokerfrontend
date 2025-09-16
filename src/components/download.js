import React from 'react';
import { Apple, Play } from 'lucide-react';

const DownloadAppSection = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Two Phone Mockups */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Dark Navy Phone */}
              <div className="w-64 h-[520px] bg-slate-900 rounded-[3rem] shadow-2xl relative z-10">
                {/* Optional: Add subtle screen indication */}
                <div className="absolute top-6 left-6 right-6 bottom-6 bg-slate-800 rounded-[2.5rem] opacity-30"></div>
              </div>
              
              {/* Light Lavender Phone - Positioned behind and slightly to the right */}
              <div className="absolute top-8 -right-20 w-64 h-[520px] bg-purple-200 rounded-[3rem] shadow-xl z-0">
                {/* Optional: Add subtle screen indication */}
                <div className="absolute top-6 left-6 right-6 bottom-6 bg-purple-300 rounded-[2.5rem] opacity-30"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Download The App
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Take classes on the go with the realton app. Stream or download to watch on the plane, the subway, or wherever you learn best.
              </p>
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store Button */}
              <button className="flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-300 font-medium">Download on</div>
                  <div className="text-lg font-semibold">Apple Store</div>
                </div>
              </button>
              
              {/* Google Play Button */}
              <button className="flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                <Play className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-300 font-medium">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;