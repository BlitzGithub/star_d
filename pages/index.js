import Head from "next/head";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

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
