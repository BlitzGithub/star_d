import Head from "next/head";
import Footer from "../pages/components/Footer/Footer";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>StarDust</title>
        <meta
          name="description"
          content="An Application by a space nerd for the space nerds"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
      <Footer />
    </>
  );
}
