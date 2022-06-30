import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section className="relative bg-gray-700 py-20 2xl:py-40 overflow-hidden">
      <div className="relative max-w-6xl px-4 lg:px-0 mx-auto py-10">
        <div className="max-w-xl mb-14 lg:mb-28">
          <div className="flex flex-row">

            <hr className="border-red-600 border-t-2 w-20 pt-5 mt-[.85rem] mb-[.85rem] mr-[.85rem]" />
            <span className="text-lg text-white font-bold tracking-widest">
              OUR SERVICES
            </span>
          </div>
          <h2 className=" text-5xl text-white font-bold font-heading">
            Services we offer
          </h2>
        </div>
        {/**service img container */}
        <div className="md:grid md:grid-cols-2  ">
          <ServiceCard
            name={'Voice Recording'}
            img={
              'https://res.cloudinary.com/ddj5orpun/image/upload/v1656268405/Studio37/R62G0009_qbv6yn.jpg'
            }
          />
          <ServiceCard
            name={'Audio Engineering'}
            img={
              'https://res.cloudinary.com/ddj5orpun/image/upload/v1656268682/Studio37/R62G0060_waptyd.jpg'
            }
          />
          <ServiceCard
            name={'Music Production'}
            img={
              'https://res.cloudinary.com/ddj5orpun/image/upload/v1656268760/Studio37/R62G0020_id5vj2.jpg'
            }
          />
          <ServiceCard
            name={'Music Lessons'}
            img={
              'https://res.cloudinary.com/ddj5orpun/image/upload/v1656268931/Studio37/R62G0033_pgmzg8.jpg'
            }
          />

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
