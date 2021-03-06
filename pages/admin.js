import Head from "next/head";
import { AdminNavbar } from "../components/header/admin";
import BasicTabs from "../components/adminpage";
import Footer from "../components/footer";
import { BASE_URL } from "../config/configs";
import nookies, { parseCookies } from "nookies";

export default function Dashboard({ hotels, jwt, messages, enquiries }) {
  return (
    <div>
      <Head>
        <title>PrimaVera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminNavbar />
      <BasicTabs
        jwt={jwt}
        hotels={hotels}
        messages={messages}
        enquiries={enquiries}
      />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const jwt = parseCookies(ctx).jwt;
  let user = null;

  if (jwt) {
    try {
      const { data } = await axios.get(`${BASE_URL}/users/me`, {
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

  const res = await fetch(`${BASE_URL}/hotels`);
  const data = await res.json();

  const messageResult = await fetch(`${BASE_URL}/messages`);
  const messageData = await messageResult.json();

  const enquiriesResult = await fetch(`${BASE_URL}/enquiries`);
  const enquiriesData = await enquiriesResult.json();

  return {
    props: {
      hotels: data,
      jwt,
      messages: messageData,
      enquiries: enquiriesData,
    },
  };
};
