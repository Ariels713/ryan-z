import React from "react";
import { GraphQLClient } from "graphql-request";

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    `${process.env.NEXT_PUBLIC_GRAPH_CMS_URL}`
  );

  const { testimonials } = await graphcms.request(
    `
    {
      testimonials{
        id
        buyerName
        buyerTitle
        description
      }
    }
    `
  );

  if (!testimonials) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      testimonials,
    },
    revalidate: 1,
  };
}

export default function index({ testimonials }) {
  function sortedData(data) {
    let userdata = [];
    data.forEach((item) => {
      userdata.unshift(item);
    });
    return userdata;
  }
  const testimonial = sortedData(testimonials);

  return (
    <>
      <div className="text-center pt-16 bg-white dark:bg-gray-800">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-800 dark:text-gray-200 sm:text-4xl ">
          Client Testimonials
        </h2>

        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
      </div>
      {testimonial.map((item) => {
        const { id, buyerName, buyerTitle, description } = item;
        return (
          <div
            key={id}
            className="bg-white dark:bg-gray-800 w-full mx-auto p-8"
          >
            <p className="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-2xl">
              <span className="font-bold text-green-600">“</span>
              {description}
              <span className="font-bold text-green-600">”</span>
            </p>
            <div className="flex items-center justify-center mt-8">
              <div className="flex ml-2 items-center justify-center">
                <span className="font-semibold text-yellow-500 mr-2 text-lg">
                  {buyerName}
                </span>
                <span className="text-gray-400 text-xl font-light">/</span>
                <span className="text-gray-400 text-md ml-2">{buyerTitle}</span>
              </div>
            </div>
            <hr className="mt-12" />
          </div>
        );
      })}
    </>
  );
}
