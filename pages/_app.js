import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "react-query/devtools";
config.autoAddCss = false;
import Header from "../components/Header";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: "#8358ff",
              color: "#ffffff",
            },
          },
          error: {
            style: {
              background: "#ef4444",
              color: "#ffffff",
            },
          },
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
