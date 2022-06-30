import React from 'react';

const ServiceCard = ({name, img}) => {
  return (
    <div className="relative max-w-3xl">
      <div className="relative">
        <img
          className="w-full h-full  object-cover opacity-90 rounded"
          src={img}
          alt=""
        />
        <div className="">
          <div className=" inset-0 rounded-lg" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">

            <p className=" text-xl lg:text-2xl text-white font-bold">
              {name}
            </p>
            <div className="w-full flex flex-row justify-between relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
