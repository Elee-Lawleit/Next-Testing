import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import dynamic from "next/dynamic";
import { ReactQueryDevtools } from "react-query/devtools";
config.autoAddCss = false;
import Header from "../components/Header";

//dynamically importing it because goddammit it
const Toaster = dynamic(() => import('./../components/GlobalToaster'), {
  ssr: false
})

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
