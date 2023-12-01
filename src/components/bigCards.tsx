

import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';

interface DetailItemProps {
    label: string;
    value: string;
}

interface ButtonProps {
    label: string;
    width: string;
}

interface CardProps {
    title: string;
    datePublished: string;
    price: string;
    originalPrice: string;
    extraInfo: string;
    details: DetailItemProps[];
    buttons: ButtonProps[];
    location: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
    <div>
        <p className='font-poppins text-sm leading-5 font-semibold'>{label}</p>
        <p className='font-poppins text-base leading-6 font-bold'>{value}</p>
    </div>
);

const Button: React.FC<ButtonProps> = ({ label, width }) => (
    <button className={`bg-blue-200 border rounded-lg text-blue-900 py-1 px-2 lg:px-3 ${width}`}>{label}</button>
);

const Card: React.FC<CardProps> = ({ title, datePublished, price, originalPrice, extraInfo, details, buttons, location }) => (
   
    <div className='w-full mx-auto lg:h-[316px] h-[750px] lg:max-w-[818px] m-5 rounded-lg flex flex-col lg:flex-row' style={{ boxShadow: '0px 5px 20px 0px rgba(78, 78, 78, 0.25)' }}>
    <div className='w-full lg:w-[300px] h-[315px] lg:p-0 p-2'>
        <Image src={'/red.png'} alt={title} width={300} height={316} className='w-full h-full object-cover rounded-lg' />
    </div>

    <div className='w-full lg:w-[518px] h-[315px] p-2 pl-5'>
        <div className='flex flex-col lg:flex-row justify-between'>
            <h1 className='pt-1 text-lg lg:text-xl leading-6 lg:leading-9 font-bold font-poppins'>{title}</h1>
            <p className='pt-2 text-sm lg:text-base leading-6 lg:leading-9'>Date Published: {datePublished}</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-5'>
            <p className='text-base lg:text-xl leading-6 lg:leading-9 font-bold text-red-600 font-poppins'>{price}</p>
            <p className='pt-1 line-through text-sm lg:text-base font-poppins'>{originalPrice}</p>
        </div>
        <p className='text-sm lg:text-lg font-poppins'>{extraInfo}</p>

        <div className='grid grid-cols-2 lg:grid-cols-4 grid-rows-3  gap-1'>
            {details.map((detail, index) => (
                <DetailItem key={index} {...detail} />
            ))}
        </div>

        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='flex flex-row space-x-2'>
                {buttons.map((button, index) => (
                    <button key={index} className={`bg-blue-200 border rounded-lg text-blue-900 py-1 px-2 lg:px-3 ${button.width}`}>{button.label}</button>
                ))}
            </div>
            <div className='flex flex-row items-center space-x-2 mt-2 lg:mt-0'>
                <CiLocationOn />
                <p>{location}</p>
            </div>
        </div>
    </div>
</div>

);

const BigCards: React.FC = () => {
    const cardData = [
        {
            title: 'Volkswagen Polo 1.2 TDI',
            datePublished: '12/10/2023',
            price: '20,300 €',
            originalPrice: '20,300 €',
            extraInfo: '+ Omregistrering',
            details: [
                { label: 'Vehicle Type', value: 'Sedan' },
                { label: 'Gearbox Type', value: 'Auto' },
                { label: 'Kilometers', value: '150,000 km' },
                { label: 'Manufucture year', value: '2019' },
                { label: 'HP/kW', value: '55/75' },
                { label: 'Doors number', value: '4' },
                { label: 'cm3', value: '2000' },
                { label: 'Fuel Type', value: 'Diesel' },
            ],
            buttons: [
                { label: 'Damaged', width: 'w-[90px]' },
                { label: '(Not)Registered', width: 'w-[130px]' },
                { label: 'Guaranteed', width: 'w-[110px]' },
            ],
            location: 'Prigrevica',
        },


        {
            title: 'Volkswagen Polo 1.2 TDI',
            datePublished: '12/10/2023',
            price: '20,300 €',
            originalPrice: '20,300 €',
            extraInfo: '+ Omregistrering',
            details: [
                { label: 'Vehicle Type', value: 'Sedan' },
                { label: 'Gearbox Type', value: 'Auto' },
                { label: 'Kilometers', value: '150,000 km' },
                { label: 'Manufucture year', value: '2019' },
                { label: 'HP/kW', value: '55/75' },
                { label: 'Doors number', value: '4' },
                { label: 'cm3', value: '2000' },
                { label: 'Fuel Type', value: 'Diesel' },
            ],
            buttons: [
                { label: 'Damaged', width: 'w-[90px]' },
                { label: '(Not)Registered', width: 'w-[130px]' },
                { label: 'Guaranteed', width: 'w-[110px]' },
            ],
            location: 'Prigrevica',
        },



        {
            title: 'Volkswagen Polo 1.2 TDI',
            datePublished: '12/10/2023',
            price: '20,300 €',
            originalPrice: '20,300 €',
            extraInfo: '+ Omregistrering',
            details: [
                { label: 'Vehicle Type', value: 'Sedan' },
                { label: 'Gearbox Type', value: 'Auto' },
                { label: 'Kilometers', value: '150,000 km' },
                { label: 'Manufucture year', value: '2019' },
                { label: 'HP/kW', value: '55/75' },
                { label: 'Doors number', value: '4' },
                { label: 'cm3', value: '2000' },
                { label: 'Fuel Type', value: 'Diesel' },
            ],
            buttons: [
                { label: 'Damaged', width: 'w-[90px]' },
                { label: '(Not)Registered', width: 'w-[130px]' },
                { label: 'Guaranteed', width: 'w-[110px]' },
            ],
            location: 'Prigrevica',
        },



        {
            title: 'Volkswagen Polo 1.2 TDI',
            datePublished: '12/10/2023',
            price: '20,300 €',
            originalPrice: '20,300 €',
            extraInfo: '+ Omregistrering',
            details: [
                { label: 'Vehicle Type', value: 'Sedan' },
                { label: 'Gearbox Type', value: 'Auto' },
                { label: 'Kilometers', value: '150,000 km' },
                { label: 'Manufucture year', value: '2019' },
                { label: 'HP/kW', value: '55/75' },
                { label: 'Doors number', value: '4' },
                { label: 'cm3', value: '2000' },
                { label: 'Fuel Type', value: 'Diesel' },
            ],
            buttons: [
                { label: 'Damaged', width: 'w-[90px]' },
                { label: '(Not)Registered', width: 'w-[130px]' },
                { label: 'Guaranteed', width: 'w-[110px]' },
            ],
            location: 'Prigrevica',
        },


        {
            title: 'Volkswagen Polo 1.2 TDI',
            datePublished: '12/10/2023',
            price: '20,300 €',
            originalPrice: '20,300 €',
            extraInfo: '+ Omregistrering',
            details: [
                { label: 'Vehicle Type', value: 'Sedan' },
                { label: 'Gearbox Type', value: 'Auto' },
                { label: 'Kilometers', value: '150,000 km' },
                { label: 'Manufucture year', value: '2019' },
                { label: 'HP/kW', value: '55/75' },
                { label: 'Doors number', value: '4' },
                { label: 'cm3', value: '2000' },
                { label: 'Fuel Type', value: 'Diesel' },
            ],
            buttons: [
                { label: 'Damaged', width: 'w-[90px]' },
                { label: '(Not)Registered', width: 'w-[130px]' },
                { label: 'Guaranteed', width: 'w-[110px]' },
            ],
            location: 'Prigrevica',
        },


        {
            title: 'Volkswagen Polo 1.2 TDI',
            datePublished: '12/10/2023',
            price: '20,300 €',
            originalPrice: '20,300 €',
            extraInfo: '+ Omregistrering',
            details: [
                { label: 'Vehicle Type', value: 'Sedan' },
                { label: 'Gearbox Type', value: 'Auto' },
                { label: 'Kilometers', value: '150,000 km' },
                { label: 'Manufucture year', value: '2019' },
                { label: 'HP/kW', value: '55/75' },
                { label: 'Doors number', value: '4' },
                { label: 'cm3', value: '2000' },
                { label: 'Fuel Type', value: 'Diesel' },
            ],
            buttons: [
                { label: 'Damaged', width: 'w-[90px]' },
                { label: '(Not)Registered', width: 'w-[130px]' },
                { label: 'Guaranteed', width: 'w-[110px]' },
            ],
            location: 'Prigrevica',
        },
        // Add more card data as needed
    ];

    return (
        <div className=''>
            {cardData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default BigCards;
