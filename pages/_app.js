import "../styles/globals.css";
import Navbar from "../pages/components/Navbar/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
