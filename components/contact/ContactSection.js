import Image from 'next/image';
import React from 'react';
import ContactDetails from './ContactDetails';

const ContactSection = () => {
  return (
    <section className="relative bg-gray-800 py-20 2xl:py-40 overflow-hidden">
      <div className=" lg:block absolute top-0 right-0 h-full opacity-10 w-full ">
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover"
          alt=""
          src={'https://res.cloudinary.com/ddj5orpun/image/upload/v1656219198/Studio37/R62G0001_yqys8x.jpg'}
          layout="fill"
        />
      </div>

      <div className="relative max-w-6xl px-4 md:mx-10 lg:px-0  xl:mx-auto py-10">
        <div className="max-w-xl mb-14 lg:mb-28">
          <div className="flex flex-row">

            <hr className="border-red-600 border-t-2 w-20 pt-5 mt-[.85rem] mb-[.85rem] mr-[.85rem]" />
            <span className="text-lg text-white font-bold tracking-widest">
              CONTACT US
            </span>
          </div>
          <h2 className="text-5xl text-white font-bold font-heading">
            Send a message
          </h2>
        </div>
        {/**content container */}
        <div className="relative w-full pb-20 flex lg:flex-row flex-col space-y-10 lg:space-y-0">
          <div className="max-w-md">
            <form action="#">
              <input
                className="mb-3 w-full px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-full focus:outline-none"
                type="email"
                placeholder="example@user.com"
              />
              <input
                className="mb-3 w-full px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-full focus:outline-none"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="w-full mb-6 px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-3xl resize-none focus:outline-none"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
              />
              <div className="flex mb-10">
                <input type="checkbox" />
                <p className="pl-4 max-w-xs text-sm text-gray-300">
                  By singning up, you agree to our Terms, Data Policy and Cookies.
                </p>
              </div>
              <button className="py-4 px-12 text-white font-bold bg-red-600 hover:bg-red-600 rounded transition duration-200 w-full md:w-auto">
                Send message
              </button>
            </form>
          </div>
          {/**details container */}
          <div className="lg:ml-40 ">
            <ContactDetails />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
