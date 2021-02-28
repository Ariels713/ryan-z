import React from "react";

export default function index() {
  return (
    <>
      <div className="bg-white overflow-hidden dark:bg-gray-800 duration-500">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Hi, I'm
            </h2> */}
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
              Ryan Zarb
            </h3>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src="images/ryan.jpg"
                      alt="Whitney leaning against a railing on a downtown street"
                      width="1184"
                      height="1376"
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="font-semibold text-lg my-4 text-gray-900 dark:text-gray-200 ">
                  Finding Your Next Home
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  I am not here to “sell” you a home, I am simply the conduit to
                  helping you find the home that works best for your lifestyle.
                  I want to make sure you LOVE where you live! As a master
                  communicator with an “honesty is the best policy” approach to
                  life in general, I will never steer you wrong.
                </p>
              </div>
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="font-semibold text-lg my-4 text-gray-900 dark:text-gray-200 ">
                  Selling Your Home
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  If it's time to move, then you need someone who will advertise
                  your home to prospective buyers, negotiate the purchase
                  contract, arrange financing, oversee the inspections, handle
                  all necessary paperwork— ultimately leading you to the closing
                  table. I will take care of everything you need, making sure
                  the process is as stress free as possible from start to close.
                </p>
              </div>
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="font-semibold text-lg my-4 text-gray-900 dark:text-gray-200 ">
                  Consult on Home Selling Tactics
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Oftentimes buyers don't visualize living in your home the way
                  you do. I can help make your home attractive to its ideal
                  audience— which can help you get top dollar. Things like
                  staging the home, de-personalizing— making minor
                  repairs/updates, even as simple as painting the walls or trim
                  can be the difference between a home sitting on the market and
                  one that's sells fast.
                </p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p className="font-semibold text-xl my-4 text-gray-900 dark:text-gray-300 ">
                  Who Is Ryan?
                </p>

                <ul className="text-lg text-gray-500 dark:text-gray-400">
                  <li>
                    My passion for real estate and home design go as far back as
                    he can remember. As a child at a restaurant— given activity
                    sheets to color, I was always flipping them over to draw
                    homes and interiors.
                  </li>
                  <li>
                    After a successful career in fashion, I was ready to pursue
                    my longed desire for a career in real estate. As a native
                    New Yorker from northeastern Long Island, moving to New
                    Jersey had never really been something I considered.
                    However, after taking my real estate course in Hoboken— I
                    began to fall in love with New Jersey and chose to relocate
                    across the river after living in Manhattan for 8 years!
                  </li>
                  <li>
                    My eye for detail and vision for great potential in any
                    home, makes me a dependable and resourceful agent for my
                    clients— committed to achieving their dreams within their
                    means.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
