import React from "react";

export default function Card({ recentSales }) {
  return (
    <>
      <div className="relative bg-gray-50 dark:bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 duration-500">
        <div className="absolute inset-0">
          <div className="bg-white dark:bg-gray-800 h-1/3 sm:h-2/3 duration-500"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl">
              Recent Sales
            </h2>

            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              Love where you live, now more than ever!
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {recentSales.map((item) => {
              const {
                baths,
                beds,
                cardImage,
                date,
                description,
                id,
                salePrice,
                slug,
                title,
                url,
              } = item;

              return (
                <div
                  key={id}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <a href={url} target="_blank">
                      <img
                        className="h-96 w-full object-cover"
                        src={cardImage.url}
                        alt={title}
                      />
                    </a>
                  </div>

                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-600">Sold</p>
                      <a href={url} target="_blank" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {title}
                        </p>
                        <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
                          <p>
                            {beds} beds &bull; {baths} baths
                          </p>
                        </div>
                        <p className="mt-3 text-base text-gray-500">
                          {description}
                        </p>
                      </a>
                    </div>
                    <div className=" flex items-center">
                      <div className="mt-4">
                        <p className="text-sm font-medium text-green-600">
                          ${salePrice}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime="2020-03-16">{date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
