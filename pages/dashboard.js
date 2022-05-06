import Head from "next/head";
import { AdminNavbar } from "../components/header/admin";
import DashboardPage from "../components/dashboardpage";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>PrimaVera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminNavbar />
      <DashboardPage />
      <Footer />
    </div>
  );
}
