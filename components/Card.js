import React from "react";

export default function Card({ recentSales }) {
  return (
    <>
      <div class="relative bg-gray-50 dark:bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 duration-500">
        <div class="absolute inset-0">
          <div class="bg-white dark:bg-gray-800 h-1/3 sm:h-2/3 duration-500"></div>
        </div>
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-4xl">
              Recent Sales
            </h2>

            <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
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
                <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div class="flex-shrink-0">
                    <img
                      class="h-96 w-full object-cover"
                      src={cardImage.url}
                      alt={title}
                    />
                  </div>
                  <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div class="flex-1">
                      <p class="text-sm font-medium text-green-600">
                        <a href="#" class="hover:underline">
                          Sold
                        </a>
                      </p>
                      <a href="#" class="block mt-2">
                        <p class="text-xl font-semibold text-gray-900">
                          {title}
                        </p>
                        <div class="text-gray-600 text-xs uppercase font-semibold tracking-wide">
                          <p>
                            {beds} beds &bull; {baths} baths
                          </p>
                        </div>
                        <p class="mt-3 text-base text-gray-500">
                          {description}
                        </p>
                      </a>
                    </div>
                    <div class=" flex items-center">
                      <div className="mt-4">
                        <p class="text-sm font-medium text-green-600">
                          <a href="#" class="hover:underline">
                            ${salePrice}
                          </a>
                        </p>
                        <div class="flex space-x-1 text-sm text-gray-500">
                          <time datetime="2020-03-16">{date}</time>
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
