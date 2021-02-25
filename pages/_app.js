import "tailwindcss/tailwind.css";
import { ThemeProvider } from "../components/theme/themeContext";
import Layout from "./layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
