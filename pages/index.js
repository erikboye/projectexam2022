import Head from "next/head";
import { Navbar } from "../components/header";
import Herobanner_Home from "../components/homepage/herobanner";
import FeaturedHotelCards from "../components/homepage/featuredhotels";
import HomepageCountries from "../components/homepage/homepagecountries";
import Newsletter from "../components/homepage/newsletterform";
import Footer from "../components/footer";

export default function Homepage({ Featuredhotels }) {
  console.log(Featuredhotels);
  return (
    <div>
      <Head>
        <title>PrimaVera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Herobanner_Home />
      <FeaturedHotelCards className="featured" />
      <HomepageCountries />
      <Newsletter />
      <Footer />
    </div>
  );
}
