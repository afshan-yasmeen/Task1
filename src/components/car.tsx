"use client";
import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiMessageRounded, BiEuro } from 'react-icons/bi'
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
            {isOpen && (<div className={`absolute bg-gray-400/90 z-20 mt-[95px] lg:ml-[180px] border rounded shadow-md p-2 ${dropdownClassName}`}>
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
const Car = () => {
    const dropdowns = [
        { id: 'dropdown1', label: 'From', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: '', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: '' },
        { id: 'dropdown2', label: 'Make', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: '', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown3', label: 'Year from', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: '', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown4', label: 'Year upto', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: '', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown5', label: 'Vehicle Type', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown6', label: 'Fuel Type', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown7', label: 'Close filter', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  m-2 py-2 px-2', iconClassName: '', dropdownClassName: '' },
        { id: 'dropdown8', label: 'From', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: '' },
        { id: 'dropdown9', label: 'To', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: '' },
        { id: 'dropdown10', label: '4', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[260px]' },
        { id: 'dropdown11', label: 'Any', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[260px]' },
        { id: 'dropdown12', label: 'From', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[99px]' },
        { id: 'dropdown13', label: 'To', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[99px]' },
        { id: 'dropdown14', label: 'From', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown15', label: 'To', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown16', label: 'From', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown17', label: 'To', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[100px]' },
        { id: 'dropdown18', label: 'Home Plates', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[260px]' },
        { id: 'dropdown19', label: 'Owner', options: ['Hello', 'Afshan', 'Yasmeen'], containerClassName: ' ', buttonClassName: '  pl-2', iconClassName: ' border-black border rounded-lg flex bg-gray-200 h-full w-[40px] py-3 justify-center items-center', dropdownClassName: 'lg:ml-[260px]' },

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
        <div >
            {/* row 1 */}
            <div className='p-5 w-full flex flex-wrap'>

                {/* make drop down  */}
                <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/6">
                    {renderDropdownById('dropdown2')}
                </div>

                {/* model drop down  */}
                <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/6">
                    {renderDropdownById('dropdown1')}
                </div>
                <div className="relative flex items-center w-full md:w-1/2 lg:w-1/5 border-gray-800 border rounded-lg m-2 py-2 px-2">
                    Variant
                </div>

                <div className="relative flex items-center w-full md:w-1/2 lg:w-1/5">
                    <button className='bg-blue-900 text-white w-full border rounded-lg m-2 py-2 px-2 flex items-center gap-3'>
                        <AiOutlinePlus color='white' /> Add another vehicle
                    </button>
                </div>

                <div className="relative flex items-center w-full md:w-1/2 lg:w-1/5">
                    <button className='bg-red-600 text-white w-full border rounded-lg m-2 py-2 px-2 flex items-center justify-center gap-3'>
                        <BiMessageRounded color='white' /> 5.221.456 results
                    </button>
                </div>

            </div>


            {/* row 2  */}
            <div className='px-5 w-full flex flex-wrap'>

                <div className='w-full md:w-1/2 lg:w-3/5 flex flex-wrap'>

                    <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/4">
                        <input className="justify-between border-gray-800 border rounded-lg w-full flex items-center m-2 py-2 px-2"
                            placeholder="Price from €"
                        />
                    </div>

                    <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/4">
                        <input className="justify-between border-gray-800 border rounded-lg w-full flex items-center m-2 py-2 px-2"
                            placeholder="Price up to €"
                        />
                    </div>

                    {/* drop down year from */}
                    <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/4">
                        {renderDropdownById('dropdown3')}
                    </div>

                    {/* drop down year upto */}
                    <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/4">
                        {renderDropdownById('dropdown4')}
                    </div>

                </div>

                {/* drop down for vehicle type */}
                <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/5">
                    {renderDropdownById('dropdown5')}
                </div>

                <div className="relative flex items-center w-full md:w-1/2 lg:w-1/5">
                    <button className='border-gray-800 w-full border rounded-lg m-2 py-2 px-2 flex items-center justify-center'> Save Search</button>
                </div>

            </div>

            {/* row 3  */}
            <div className='p-5 w-full flex flex-wrap'>

                <div className='w-full md:w-1/2 lg:w-3/5 flex flex-wrap'>

                    {/* drop down fuel type */}
                    <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/4">
                        {renderDropdownById('dropdown6')}
                    </div>

                    <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/4">
                        <div className='justify-center border-gray-800 border rounded-lg w-full flex items-center m-2 py-2 px-2'>
                            Payment Type
                        </div>
                    </div>

                    <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/4">
                        <button className="bg-red-600 text-white border rounded-lg w-full flex justify-center m-2 py-2 px-2">
                            Buy
                        </button>
                    </div>

                    <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/4">
                        <button className="justify-center border-gray-800 border rounded-lg w-full flex items-center m-2 py-2 px-2">
                            Leasing
                        </button>
                    </div>
                </div>

                <div className="relative flex items-center mb-4 md:mb-0 w-full md:w-1/2 lg:w-1/5">
                    <input className="justify-between border-gray-800 border rounded-lg w-full flex items-center m-2 py-2 px-2"
                        placeholder="City or ZIP Code"
                    />
                </div>

                {/* drop down for closing filters */}
                <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 lg:w-1/5">
                    {renderDropdownById('dropdown7')}
                </div>

            </div>


            <hr />


            {/* row 4  */}
            <div className='p-5 w-full flex flex-wrap'>

                {/* section 1 */}
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>

                    {/* heading section */}
                    <div>
                        <h1 className='py-2 font-bold px-2'>Number of Seats</h1>
                    </div>

                    {/* button section */}
                    <div className='flex flex-wrap'>

                        {/* drop down 1 */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 lg:pl-0 pl-5">
                            {renderDropdownById('dropdown8')}
                        </div>

                        {/* drop down 2 */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 pl-5">
                            {renderDropdownById('dropdown9')}
                        </div>

                    </div>
                </div>

                {/* section 2 */}
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>
                    {/* heading section */}
                    <div>
                        <h1 className='py-2 font-bold px-5'>Number of Doors</h1>
                    </div>

                    {/* button section */}
                    {/* drop down */}
                    <div className="relative flex items-center mb-4 md:mb-0 w-full  gap-3 pl-5">
                        {renderDropdownById('dropdown10')}
                    </div>
                </div>

                {/* section 3 */}
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>
                    {/* heading section */}
                    <div>
                        <h1 className='py-2 font-bold px-5'>Type and Condition</h1>
                    </div>

                    {/* button section */}
                    {/* drop down */}
                    <div className="relative flex items-center mb-4 md:mb-0 w-full  gap-3 pl-5">
                        {renderDropdownById('dropdown11')}
                    </div>
                </div>

                {/* section 4 */}
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>
                    {/* heading section */}
                    <div>
                        <h1 className='py-2 font-bold px-5'>Power</h1>
                    </div>

                    {/* button section */}
                    <div className='flex flex-wrap'>

                        {/* drop down 1 */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 pl-5 ">
                            {renderDropdownById('dropdown12')}
                        </div>

                        {/* drop down 2 */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 pl-5">
                            {renderDropdownById('dropdown13')}
                        </div>

                    </div>
                </div>

            </div>

            {/* row 5  */}
            <div className='px-5 pb-5 w-full flex flex-wrap'>

                {/* section 1 */}
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>

                    {/* heading section */}
                    <div>
                        <h1 className='py-2 font-bold px-2'>Leasing Duration</h1>
                    </div>

                    {/* button section */}
                    <div className='flex flex-wrap'>

                        {/* drop down 1 */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 lg:pl-0 pl-5">
                            {renderDropdownById('dropdown14')}
                        </div>

                        {/* drop down 2 */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 pl-5">
                            {renderDropdownById('dropdown15')}
                        </div>

                    </div>
                </div>

                {/* section 2 */}
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>

                    {/* heading section */}
                    <div>
                        <h1 className='py-2 font-bold px-5'>Leasing Kilometer Per Year</h1>
                    </div>

                    {/* button section */}
                    <div className='flex flex-wrap'>

                        {/* drop down 1 */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 pl-5">
                            {renderDropdownById('dropdown16')}
                        </div>

                        {/* drop down 2 */}
                        <div className="relative flex items-center mb-4 md:mb-0 w-full sm:w-1/2 gap-3 pl-5">
                            {renderDropdownById('dropdown17')}
                        </div>

                    </div>
                </div>

                {/* section 3 */}
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>
                    {/* heading section */}
                    <div>
                        <h1 className='py-2 font-bold px-5'>Origin of the Vehicle</h1>
                    </div>
                    {/* button section */}
                    {/* drop down */}
                    <div className="relative flex items-center mb-4 md:mb-0 w-full gap-3 pl-5">
                        {renderDropdownById('dropdown18')}
                    </div>
                </div>

                {/* section 4 */}
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>
                    {/* heading section */}
                    <div>
                        <h1 className='py-2 font-bold px-5'>Ownership</h1>
                    </div>
                    {/* button section */}
                    {/* drop down */}
                    <div className="relative flex items-center mb-4 md:mb-0 w-full gap-3 pl-5">
                        {renderDropdownById('dropdown19')}
                    </div>
                </div>

            </div>
            <hr className='pb-5' />
        </div>
    )
}

export default Car


