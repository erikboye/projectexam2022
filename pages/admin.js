import Head from "next/head";
import { AdminNavbar } from "../components/header/admin";
import BasicTabs from "../components/adminpage";
import Footer from "../components/footer";
import nookies, { parseCookies } from "nookies";

export default function Dashboard({ hotels, jwt }) {
  return (
    <div>
      <Head>
        <title>PrimaVera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminNavbar />
      <BasicTabs jwt={jwt} hotels={hotels} />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const jwt = parseCookies(ctx).jwt;
  let user = null;

  if (jwt) {
    try {
      const { data } = await axios.get("http://localhost:1337/users/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      user = data;
    } catch (e) {
      console.log(e);
    }
  }

  if (!jwt) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const res = await fetch("http://localhost:1337/hotels");
  const data = await res.json();

  return {
    props: { hotels: data, jwt },
  };
};