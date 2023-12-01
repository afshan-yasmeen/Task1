"use client";
import React, { useState } from 'react';
import { BiMessageRounded } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';

// drop down 
interface DropdownProps {
    label: string;
    options: string[];
    containerClassName: string;
    buttonClassName: string;
    iconClassName: string;
    dropdownClassName: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, containerClassName, buttonClassName, iconClassName, dropdownClassName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`relative flex items-center mb-4 md:mb-0 w-full ${containerClassName}`}>
            <button onClick={toggleDropdown} className={`justify-between border-gray-800 border rounded-lg w-full flex items-center ${buttonClassName}`}>
                {label}

                {/* border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center */}
                <div className={iconClassName}>
                    <BsChevronDown />
                </div>
            </button>
            {isOpen && ( <div className={`absolute bg-gray-400/90 z-20 mt-[95px] lg:ml-[180px] border rounded shadow-md p-2 ${dropdownClassName}`}>
                    {options.map((option, index) => (
                        <a key={index} href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
                            {option}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};


interface RadioButtonProps {
    backgroundStyle: React.CSSProperties;
}

const RadioButton: React.FC<RadioButtonProps> = ({ backgroundStyle }) => (
    <div
        className="w-[25px] h-[25px] grid  grid-cols-7 border-2 rounded-xl border-gray-300 bg-cover transition-transform duration-300 hover:border-blue-900 transform hover:scale-95"
        style={backgroundStyle}
    ></div>
);

const SearchBar = () => {

    const backgroundColors = [
        'rgba(213, 183, 134, 1)',
        'rgba(127, 96, 41, 1)',
        'rgba(227, 193, 67, 1)',
        'rgba(139, 184, 73, 1)',
        'rgba(235, 81, 73, 1)',
        'rgba(242, 242, 242, 1)',
        'linear-gradient(0deg, #000000, #000000), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        'rgba(69, 109, 212, 1)',
        'rgba(239, 212, 71, 1)',
        'rgba(171, 171, 171, 1)',
        'rgba(239, 134, 62, 1)',
        'rgba(51, 51, 51, 1)',
        'rgba(140, 99, 246, 1)',
        'rgba(30, 31, 36, 1)',
    ];

    const dropdowns = [
        { id: 'dropdown1', label: 'Mark', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: '', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: '' },
        { id: 'dropdown2', label: 'Model', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: '', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown3', label: 'From', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: '', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown4', label: 'To', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: '', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown5', label: 'From', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown6', label: 'To', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown7', label: 'From', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown8', label: 'To', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown9', label: 'Diesel', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown10', label: 'Coupe', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown11', label: 'From', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown12', label: 'To', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[99px]' },
        { id: 'dropdown13', label: 'Automatic', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[260px]' },
        { id: 'dropdown14', label: 'Range', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown15', label: 'Time', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown16', label: 'Time', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[260px]' },
        { id: 'dropdown17', label: 'From kWh', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown18', label: 'To kWh', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
      
        // Add more dropdown data as needed
    ];

    const renderDropdownById = (id: string) => {
        const dropdown = dropdowns.find((item) => item.id === id);

        if (dropdown) {
            return (
                <Dropdown
                    key={dropdown.label}
                    label={dropdown.label}
                    options={dropdown.options}
                    containerClassName={dropdown.containerClassName}
                    buttonClassName={dropdown.buttonClassName}
                    iconClassName={dropdown.iconClassName}
                    dropdownClassName={dropdown.dropdownClassName}
                />
            );
        }
        return null; // Render nothing if the ID is not found
    }; 

   
    return (
        <div>
            <div>
                <h1 className="font-lora text-2xl font-semibold leading-7 tracking-normal text-red-600 p-3 text-left">
                    Detail Search
                </h1>
                <hr />


                {/* Mark model variant  */}
                <div>

                    <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left px-5 py-2">
                        Mark, model, variant
                    </p>
                    <div className='flex flex-row pl-5 pr-5'>
                        {/* Mark drop down */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 pr-2 ">
                          {renderDropdownById('dropdown1')}
                        </div>
                        {/* Model drop down */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 ">
                          {renderDropdownById('dropdown2')}
                        </div>
                    </div>
                    <div className='p-5'>
                        <input className="justify-between p-2 w-full border-blue-900 border rounded-lg pr-9 flex items-center "
                            placeholder="Variant"
                        />
                    </div>
                    <div className="font-Poppins text-14 font-medium leading-21 tracking-normal text-right text-red-600 p-2">
                        <p className="mb-0 underline">More</p>
                    </div>

                </div>
                <hr />


                {/* Parmanent Type  */}
                <div className='pb-3'>
                    <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left px-5 py-2">
                        Parmanent Type
                    </p>
                    <div className='flex flex-row '>
                        <div className="relative flex items-center mb-4 md:mb-0 w-full lg:w-1/2 ">
                            <button className="bg-red-600 text-white border rounded-lg w-full flex justify-center m-2 py-2 px-2">
                                Buy
                            </button>
                        </div>

                        <div className="relative flex items-center mb-4 md:mb-0 w-full lg:w-1/2 ">
                            <button className="justify-center border-gray-800 border rounded-lg w-full flex items-center m-2 py-2 px-2">
                                Leasing
                            </button>
                        </div>
                    </div>


                    {/* Year  */}
                    <div>
                        <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left px-5 py-2">
                            Year
                        </p>
                        <div className='flex flex-row pl-5 pr-5'>
                            {/* drop down */}
                            <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 pr-2 ">
                             {renderDropdownById('dropdown3')}
                            </div>
                            {/* drop down */}
                            <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 ">
                             {renderDropdownById('dropdown4')}
                            </div>
                        </div>
                    </div>


                    {/* Kilometer  */}
                    <div>
                        <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left px-5 py-2">
                            Kilometers
                        </p>
                        <div className='flex flex-row pl-5 pr-5'>
                            {/* drop down */}
                            <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 pr-2 ">
                            {renderDropdownById('dropdown5')}
                            </div>
                            {/* drop down */}
                            <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 ">
                            {renderDropdownById('dropdown6')}
                            </div>
                        </div>
                    </div>

                    {/* Buttons  */}
                    <div>
                        {/* Blue  */}
                        <div className="relative flex items-center w-full pt-2">
                            <button className='bg-red-600 text-white w-full border rounded-lg m-2 py-2 px-2 flex items-center justify-center gap-3'>
                                <BiMessageRounded color='white' /> 5.221.456 results
                            </button>
                        </div>
                        {/* Red  */}
                        <div className="relative flex items-center w-full pt-2">
                            <button className='bg-blue-900 text-white w-full border rounded-lg m-2 py-2 px-2 flex items-center justify-center gap-3'>
                                Save Search
                            </button>
                        </div>

                    </div>
                </div>
                <hr />

                {/* Fuel Type  */}

                <div className='flex flex-row pl-5 pr-2'>
                    {/* Fuel Type  */}
                    <div className='w-1/2'>
                        <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left py-2">
                            Fuel Type
                        </p>
                        {/* drop down */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full  gap-3  pl- ">
                        {renderDropdownById('dropdown7')}
                        </div>
                    </div>
                    {/* Vehicle Type  */}
                    <div className='w-1/2 '>
                        <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left pl-2 py-2">
                            Vehicle Type
                        </p>
                        <div className="pl-2 relative flex items-center mb-4 md:mb-0 w-full  gap-3  pl- ">
                        {renderDropdownById('dropdown8')}
                        </div>
                    </div>
                </div>


                {/*  Power  */}
                <div className='pb-3'>
                    <div>
                        <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left px-5 py-2">
                            Power(hp)
                        </p>


                        <div className='flex flex-row pl-5 pr-5'>
                            {/* drop down */}
                            <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 pr-2 ">
                            {renderDropdownById('dropdown9')}
                            </div>
                            {/* drop down */}
                            <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 ">
                            {renderDropdownById('dropdown10')}
                            </div>
                        </div>
                    </div>

                        {/* Transmission  */}
                 <div className=' px-5'>
                        <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left py-2">
                        Transmission
                        </p>
                        {/* drop down */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full  gap-3  pl- ">
                        {renderDropdownById('dropdown11')}
                        </div>
                    </div>

                    {/* Wheel Drive  */}
                    <div>

                        <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left px-5 py-2">
                            Wheel Drive
                        </p>
                        <div className="font-poppins text-base flex flex-col items-start space-y-2 leading-6 tracking-normal pl-5 pr-4">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-blue-900" />
                                <span >Rear-wheel drive</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-blue-900" />
                                <span >Front-wheel drive</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-blue-900" />
                                <span >Four-wheel drive</span>
                            </label>

                        </div>

                    </div>

                    {/* Electrical Vehicle  */}
                    <div>
                        <p className="font-poppins text-base font-bold leading-6 tracking-normal text-left px-5 py-2">
                            Electrical Vehicle
                        </p>

                        {/* RANGE AND Charge Time  */}
                        <div className='flex flex-row pl-5 pr-2'>
                            {/* Fast Charge Time  */}
                            <div className='w-1/2'>
                                <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left py-2">
                               Range
                                </p>
                                {/* drop down */}
                                <div className="relative flex items-center mb-4 md:mb-0 w-full  gap-3  pl- ">
                                {renderDropdownById('dropdown12')}
                                </div>
                            </div>
                            {/* Vehicle Type  */}
                            <div className='w-1/2 '>
                                <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left pl-2 py-2">
                                    Charge Time
                                </p>
                                <div className="pl-2 relative flex items-center mb-4 md:mb-0 w-full  gap-3  pl- ">
                                {renderDropdownById('dropdown13')}
                                </div>
                            </div>
                        </div>

                           {/* Fast Charge Time  */}
                 <div className=' px-5'>
                        <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left py-2">
                        Fast Charge Time
                        </p>
                        {/* drop down */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full  gap-3  pl- ">
                        {renderDropdownById('dropdown14')}
                        </div>
                    </div>

                        
                    </div>
                    {/*  Battery Capacity  */}
                    <div>
                        <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left px-5 py-2">
                            Battery Capacity
                        </p>


                        <div className='flex flex-row pl-5 pr-4'>
                            {/* drop down */}
                            <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 pr-1">
                            {renderDropdownById('dropdown15')}
                            </div>
                            {/* drop down */}
                            <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 ">
                            {renderDropdownById('dropdown16')}
                            </div>
                        </div>
                    </div>
                </div>

             

              

                <hr />

                {/* Exterior color  */}
                <div className='px-5 py-3'>
                    <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left py-2">
                        Exterior Color
                    </p>
                    {/* color   */}
                    <div className="flex flex-wrap gap-3">
                        {/* Map over the background colors to create radio buttons */}
                        {backgroundColors.map((color, index) => (
                            <RadioButton key={index} backgroundStyle={{ background: color }} />
                        ))}
                    </div>
                </div>

                <hr />
                {/* Wheel set  */}
                <div className=' pb-3'>

                    <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left px-5 py-2">
                        Wheel Set
                    </p>
                    <div className="font-poppins text-base flex flex-col items-start space-y-2 leading-6 tracking-normal pl-5 pr-4">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >One set of wheels</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Two wheel sets</span>
                        </label>


                    </div>

                </div>


                <hr />
                {/* Equipment  */}
                <div className=' pb-3'>

                    <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left px-5 py-2">
                        Equipment
                    </p>
                    <div className="font-poppins text-base flex flex-col items-start space-y-2 leading-6 tracking-normal pl-5 pr-4">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Towbar</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Engine heater</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Navigation System</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Radio DAB+</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Leather Interior</span>
                        </label>

                    </div>

                </div>


                <hr />
                {/* Area  */}
                <div className=' pb-3'>

                    <p className="font-poppins text-base font-semibold leading-6 tracking-normal text-left px-5 py-2">
                        Area
                    </p>
                    <div className="font-poppins text-base flex flex-col items-start space-y-2 leading-6 tracking-normal pl-5 pr-4">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Agder</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Inland</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >More and Romsdal</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Nordland</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Oslo</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Rogaland</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Toms and Finnmark</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Trondelag</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Vestfold and Telemark</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Westland</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox text-blue-900" />
                            <span >Viken</span>
                        </label>

                    </div>

                </div>

                <hr />
                <h1 className="font-lora text-2xl font-semibold leading-7 tracking-normal text-red-600 p-3 text-left">
                    Detail Search
                </h1>
                <hr />
            </div>
        </div>
    )
}

export default SearchBar