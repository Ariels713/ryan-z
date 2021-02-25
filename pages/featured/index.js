import React from "react";

export default function index() {
  return (
    <div>
      <div className="relative">
        <img
          className="object-cover w-full h-56 sm:h-96"
          src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <div className="absolute inset-0 bg-gray-400 bg-opacity-25" />
      </div>
    </div>
  );
}
