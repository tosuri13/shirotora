import NextHead from "next/head";
import "styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextHead>
        <title>Shitotora</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </NextHead>
      <Component {...pageProps} />
    </>
  );
}
