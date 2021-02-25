import Head from "next/head";
import LandingHero from "../components/LandingHero";
import Toggle from "../components/theme/Toggle";

export default function Home() {
  return (
    <div className="bg-red-500 dark:bg-gray-800 duration-500">
      <Head>
        <title>Ryan Zarb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingHero />
    </div>
  );
}
