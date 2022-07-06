import Image from 'next/image';
import React from 'react';

/**hero section contains studio landing image */
const Hero = () => {
  return (
    <section className="h-[200vh] bg-gray-700">

      <div className="bg-gray-800 overflow-hidden relative h-[120vh]">

        <div>
          <div className="w-full opacity-50 -z-20">
            <Image
              className="absolute top-0 left-0 h-full w-full object-cover"
              alt=""
              src={
                'https://res.cloudinary.com/ddj5orpun/image/upload/v1656219376/Studio37/R62G0049_cswvda.jpg'
              }
              layout="fill"
            />
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center h-full">
        <text className="text-white text-5xl">
          Landing Text
          </text>
        </div> */}

        {/**
       *  <div className="pt-24 md:pt-52 pb-40">
       * 
       */}
        <nav className="h-10">
          <div>
            <ul className="flex flex-row justify-end items-end text-white brightness-100 space-x-10 pr-10 lg:pr-40 pt-5">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
        <div className="pt-52 pb-40">
          <div className="container px-4 mx-auto brightness-100">
            <div className="flex flex-wrap items-center -mx-4 mb-16">
              <div className="w-full  px-4 mb-16 lg:mb-0 flex flex-col justify-center items-center">
                <div className="max-w-lg">
                  <h1 className="font-heading text-9xl sm:text-9xl md:text-9xl xl:text-[10rem] text-white mb-20 font-lobster">
                    <span>Studio37</span>
                    <span className="text-red-600">.</span>
                    {/* <span className="block leading-none">
                    Makes you lose control
                  </span> */}
                  </h1>

                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="flex flex-wrap -mx-2" />
              </div>
            </div>
            <div className="text-center">
              <a
                className="inline-block w-full sm:w-auto px-20 py-4 text-center font-medium bg-red-600 hover:bg-red-500 text-white rounded transition duration-250"
                href="#"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute -bottom-[40rem] bg-black w-11/12 lg:w-3/4 h-[75vh]  mx-auto left-0 right-0 z-100">
        <div className="w-full h-full relative flex flex-col justify-center items-center mx-auto">
          <p className="text-white">bruh</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
