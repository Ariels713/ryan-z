import React from "react";

export default function LandingHero() {
  return (
    <>
      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <img
          src="/images/heroImage.jpg"
          className="absolute h-full w-full object-cover"
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>

        <div className="container mx-auto px-6 md:px-12 relative flex items-center py-32 xl:py-40">
          <div className="lg:w-3/5  flex flex-col items-start relative z-10">
            <span className="font-bold uppercase text-yellow-400">Inspire</span>
            <h1 className="font-bold text-5xl sm:text-7xl md:text-7xl text-white leading-tight mt-4 ">
              A Home Changes
              <br />
              Everything. Let's find yours.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
