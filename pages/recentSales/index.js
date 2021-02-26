import React from "react";
import Card from "../../components/Card";

import { GraphQLClient } from "graphql-request";

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    `${process.env.NEXT_PUBLIC_GRAPH_CMS_URL}`
  );

  const { recentSales } = await graphcms.request(
    `
    {
      recentSales {
        id

        title
        beds
        baths
        description
        salePrice
        date
        cardImage{
         url
        }
        url
      }
    }
    `
  );

  if (!recentSales) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      recentSales,
    },
    revalidate: 1,
  };
}

export default function index({ recentSales }) {
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
      <Card recentSales={recentSales} />
    </>
  );
}
