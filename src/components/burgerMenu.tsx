import { useState } from 'react';
import { BsList, BsChevronDown } from 'react-icons/bs';
import {AiOutlineMessage,AiOutlineStar} from 'react-icons/ai';
const BurgerMenu = () => {
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  return (
    <div className='flex items-center gap-4'>
      <div className="relative flex items-center mb-4 md:mb-0">
        <button onClick={toggleDropdown1} className="flex items-center gap-1">
          <BsList size={24} /> {/* Burger icon */}
          {isOpen1 ? <BsChevronDown /> : null}
        </button>
        {isOpen1 && (
          <div className="absolute bg-gray-400/90 z-20 top-0 right-full mt-2 w-[200px] border rounded shadow-md p-2">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
              News & Guides
            </a>
            <a href="/sell" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
              Sell
            </a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
              Login
            </a>
            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
            <AiOutlineMessage size={24} /> &nbsp; Message
            </a>
            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
            <AiOutlineStar size={24} /> &nbsp; Favorite
            </a>
            <a href="#" className="flex px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
            Search
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
