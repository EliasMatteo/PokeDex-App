import "../styles/globals.scss";
import MyThemeProvider from "../utilities/provider";
import { TypeProvider } from "../utilities/typeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <MyThemeProvider>
      <TypeProvider>
        <Component {...pageProps} />
      </TypeProvider>
    </MyThemeProvider>
  );
}

export default MyApp;
