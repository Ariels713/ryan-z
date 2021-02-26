import Head from "next/head";
import LandingHero from "../components/LandingHero";
import MainContent from "../components/MainContent";
import Testimonials from "../components/Testimonials";
import Toggle from "../components/theme/Toggle";

export default function Home() {
  console.log("Site design by");

  console.log(
    " ██████╗ ███████╗██╗   ██╗    ██████╗  █████╗ ██████╗  █████╗\n",
    "██╔══██╗██╔════╝██║   ██║    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗\n",
    "██║  ██║█████╗  ██║   ██║    ██████╔╝███████║██████╔╝███████║\n",
    "██║  ██║██╔══╝  ╚██╗ ██╔╝    ██╔═══╝ ██╔══██║██╔═══╝ ██╔══██║\n",
    "██████╔╝███████╗ ╚████╔╝     ██║     ██║  ██║██║     ██║  ██║\n",
    "╚═════╝ ╚══════╝  ╚═══╝      ╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝\n"
  );
  console.log("%chttps://arielrodriguez.me/", "color:cornflowerblue");
  return (
    <div className="bg-white dark:bg-gray-800 duration-500">
      <Head>
        <title>Ryan Zarb</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <LandingHero />
      <MainContent />
      <Testimonials />
    </div>
  );
}
