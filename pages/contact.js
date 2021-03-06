import Head from "next/head";
import { Navbar } from "../components/header";
import Contactform from "../components/contactpage/contact";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>PrimaVera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Contactform />
      <Footer />
    </div>
  );
}
