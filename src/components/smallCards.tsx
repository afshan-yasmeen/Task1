


import React from 'react';
import Image from 'next/image';

interface CardDetail {
  label: string;
  value: string;
}

interface SmallCardProps {
  imageSrc: string;
  title: string;
  price: string;
  details: CardDetail[];
}

const cardStyles: React.CSSProperties = {
  boxShadow: '0px 5px 20px 0px rgba(78, 78, 78, 0.25)',
};

const SmallCard: React.FC<SmallCardProps> = ({ imageSrc, title, price, details }) => (
  <div className='h-[326px] w-full lg:w-[260px] border rounded-lg' style={cardStyles}>
    <Image src={imageSrc} alt={title} width="261" height="208" className='lg:p-0 p-2 w-full h-[208px] lg:w-[261px] '/>
    <h1 className='pl-3 pt-2 text-15 leading-23 font-bold font-poppins'>{title}</h1>
    <p className='pl-3 text-xl leading-9 font-bold text-red-600 font-poppins'>{price} €</p>
    <div className='flex flex-row mx-auto justify-center'>
      {details.map((detail, index) => (
        <div key={index} className={`px-3 ${index < details.length - 1 ? 'border-r border-gray-500' : ''}`}>
          <p className='font-poppins text-sm leading-5 font-semibold text-center'>{detail.label}</p>
          <p className='font-poppins text-base leading-6 font-bold text-center'>{detail.value}</p>
        </div>
      ))}
    </div>
  </div>
);

const SmallCards: React.FC = () => {
  const cardData: SmallCardProps[] = [
    {
      imageSrc: '/white.png',
      title: 'Volkswagen Tiguan',
      price: '20,300',
      details: [
        { label: 'Year', value: '2019' },
        { label: 'Kilometers', value: '185,000' },
        { label: 'Engine', value: 'Petrol' },
      ],
    },
    {
        imageSrc: '/red.png',
        title: 'Ford Mondeo ST',
        price: '20,300',
        details: [
          { label: 'Year', value: '2019' },
          { label: 'Kilometers', value: '185,000' },
          { label: 'Engine', value: 'Petrol' },
        ],
      },
      {
        imageSrc: '/white.png',
        title: 'Volkswagen Tiguan',
        price: '20,300',
        details: [
          { label: 'Year', value: '2019' },
          { label: 'Kilometers', value: '185,000' },
          { label: 'Engine', value: 'Petrol' },
        ],
      },
    // Add more card data as needed
  ];

  return (
    <div className='w-full lg:w-[818px] mt-5 mx-auto flex flex-col md:flex-row lg:flex-row gap-0 lg:gap-3  md:pl-0'>
    {cardData.map((card, index) => (
      <SmallCard key={index} {...card} />
    ))}
  </div>
  
  );
};

export default SmallCards;









