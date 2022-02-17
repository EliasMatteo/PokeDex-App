import "../styles/globals.scss";
import MyThemeProvider from "../utilities/provider";

function MyApp({ Component, pageProps }) {
  return (
    <MyThemeProvider>
      <Component {...pageProps} />
    </MyThemeProvider>
  );
}

export default MyApp;
