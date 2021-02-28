import React from "react";

export default function Testimonials() {
  return (
    <>
      <section>
        <div>
          <h2 className="text-xl text-center font-semibold tracking-wider text-gray-600 dark:text-gray-200 uppercase mb-6">
            Client Testimonials
          </h2>
        </div>
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-gray-200 lg:pr-16">
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-gray-800 md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-yellow-300 dark:text-green-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-gray-900 dark:text-gray-200">
                  Working with Ryan was a fantasic expierence. He was patient,
                  knowlegeable, and found us exactly what we were looking for.
                  We couldn't be happier with our purchase!
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div>
                    <div className="text-base font-medium text-gray-600 dark:text-gray-300">
                      Lauren Chil
                    </div>
                    <div className="text-base font-medium text-yellow-300">
                      Buyer
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="py-12 px-4 border-t-2 border-gray-300 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-gray-900 md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-yellow-300 dark:text-green-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-gray-900 dark:text-gray-200">
                  Ryan is a true professional. He was always available and ready
                  to assist in any way possible. He was patient yet motivated to
                  move things forward. I would highly recommend him to anyone
                  looking for a agent in the Hoboken area.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="">
                    <div className="text-base font-medium text-gray-600 dark:text-gray-300">
                      Ian Shulman
                    </div>
                    <div className="text-base font-medium text-yellow-300">
                      Buyer
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
