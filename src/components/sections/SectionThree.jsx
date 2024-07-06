import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const SectionThree = () => {
  return (
    <div className="container mx-auto p-8">
      <section className=" p-6 rounded shadow-lg bg-black">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Recent Reviews</h2>
        <div className="flex justify-between">
          <div className="w-1/3 bg-black p-4 m-2 rounded shadow">
            <div className="flex items-center justify-center mb-4">
              <FaThumbsUp className="text-5xl text-green-500" />
            </div>
            <p className="text-white bg-black p-2 rounded grid justify-center">Great service, highly recommend!</p>
            <p className="mt-2 text-center text-white bg-black p-2 rounded">- Michael Johnson</p>
            <div className="flex justify-center mt-2">
              <span className="text-yellow-500">★ ★ ★ ★ ★</span>
            </div>
          </div>
          <div className="w-1/3 bg-black p-4 m-2 rounded shadow">
            <div className="flex items-center justify-center mb-4">
              <FaThumbsUp className="text-5xl text-green-500" />
            </div>
            <p className="text-white bg-black p-2 rounded grid justify-center">Good quality and fast delivery!</p>
            <p className="mt-2 text-center text-white bg-black p-2 rounded">- Emily Roberts</p>
            <div className="flex justify-center mt-2">
              <span className="text-yellow-500">★ ★ ★ ★ ☆</span>
            </div>
          </div>
          <div className="w-1/3 bg-black p-4 m-2 rounded shadow">
            <div className="flex items-center justify-center mb-4">
              <FaThumbsUp className="text-5xl text-green-500" />
            </div>
            <p className="text-white bg-black p-2 rounded grid justify-center">Very satisfied with the service.</p>
            <p className="mt-2 text-center text-white bg-black p-2 rounded">- David Anderson</p>
            <div className="flex justify-center mt-2">
              <span className="text-yellow-500">★ ★ ★ ★ ★</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionThree;
