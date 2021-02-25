import React from "react";
import Card from "../../components/Card";

export default function index() {
  return (
    <>
      <div>
        <div className="relative">
          <img
            className="object-cover object-center w-full h-56 sm:h-96 "
            src="/images/heroImage1.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-400 bg-opacity-25" />
        </div>
      </div>
      <Card />
    </>
  );
}
