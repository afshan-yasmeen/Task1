

import React from 'react';
import SmallCards from './smallCards';
import BigCard from './bigCards';
import SearchBar from './searchBar';
import Footer from './footer';

const Hero2 = () => {
  return (
    <div className='bg-gray-200'>
    <div className="flex flex-col lg:flex-row gap-3 bg-gray-200 w-full mx-auto justify-center mb-[100px]">
      {/* Left Column */}
      <div className="mt-8 w-full lg:w-[294px]  h-auto bg-white border rounded-lg shadow-lg">
        <SearchBar />
      </div>

      {/* Right Column */}
      <div className="mt-8 lg:w-[866px] w-full h-auto bg-white border rounded-lg shadow-lg">
        <SmallCards />
        <div className="mt-5">
          <BigCard />
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="mt-8 ">
      <Footer />
    </div>
    </div>
  );
};

export default Hero2;
