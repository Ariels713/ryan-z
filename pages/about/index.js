import React from "react";

export default function index() {
  return (
    <>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
          <div className="mx-auto text-base max-w-prose lg:max-w-none">
            {/* <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Hi, I'm
            </h2> */}
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Ryan Zarb
            </h3>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="384"
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
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
                <p className="font-semibold text-lg my-4 text-gray-900 ">
                  Finding Your Next Home
                </p>
                <p className="text-lg text-gray-500">
                  You need someone who knows this area inside and out! I can
                  work with you to find the right home at the right price for
                  you, including all the neighborhood amenities that matter -
                  not to mention the essential criteria you have for your ideal
                  home.
                </p>
              </div>
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="font-semibold text-lg my-4 text-gray-900 ">
                  Selling Your Home
                </p>
                <p className="text-lg text-gray-500">
                  When it's time to move, you need someone who will advertise
                  your home, show to prospective buyers, negotiate the purchase
                  contract, arrange financing, oversee the inspections, handle
                  all necessary paperwork and supervise the closing. I can take
                  care of everything you need, from start to close.
                </p>
              </div>
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="font-semibold text-lg my-4 text-gray-900 ">
                  Home Buying/Selling Consultations
                </p>
                <p className="text-lg text-gray-500">
                  Oftentimes buyers don't visualize living in your home the way
                  you do. I can make your home attractive to its ideal audience
                  - which can help you get top dollar. Things like staging the
                  home, making repairs or minor improvements, or even simply
                  painting the walls can be the difference between a home
                  resting on the market and one that's sold fast..
                </p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p className="font-semibold text-xl my-4 text-gray-900 ">
                  Here are some of the ways I can help.
                </p>

                <ul className="text-lg">
                  <li>
                    Ryan Zarb’s passion for real estate and home design go as
                    far back as he can remember. As a child at a restaurant—
                    given activity sheets to color, he would flip them over and
                    draw homes of different styles.
                  </li>
                  <li>
                    After a successful career in fashion, Ryan was ready to
                    pursue his longed desire for a career in real estate.As a
                    native New Yorker, moving to NJ had never really been
                    something Ryan had considered. However, having taken his
                    course in Hoboken he began to fall in love with Hudson
                    county and chose to relocate after living in Manhattan for 8
                    years!
                  </li>
                  <li>
                    Ryan's passion, eye for detail and vision for great
                    potential in homes, makes him a dependable and resourceful
                    agent for his clients— committed to achieving their dreams
                    within their means.
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
