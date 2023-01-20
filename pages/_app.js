import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import dynamic from "next/dynamic";
import { ReactQueryDevtools } from "react-query/devtools";
config.autoAddCss = false;
import { SessionProvider } from "next-auth/react";
import { getSession } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import { useState, useEffect, useRef } from "react";
import Router from "next/router";
import LoadingBar from "react-top-loading-bar";


//dynamically importing it because goddammit it
const Toaster = dynamic(() => import("./../components/GlobalToaster"), {
  ssr: false,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, session }) {
  

  //Top loading bar set up
  const loadingBar = useRef(null)

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{ 
      loadingBar.current?.continuousStart();
    })
    Router.events.on("routeChangeComplete", (url)=>{
      loadingBar.current?.complete();
    })
    Router.events.on("routeChangeError", (url)=>{

    })
  }, [Router])
  


  //being used for mantine navbar, don't remove this
  const [opened, setOpened] = useState(false);


  return (
    <SessionProvider session={session}>
      <Toaster />
      <LoadingBar color="purple" ref={loadingBar}/>
      <QueryClientProvider client={queryClient}>
          {/* <Header session={session}/> */}
          <MantineProvider
           withGlobalStyles
           withNormalizeCSS
           theme={{
            colorScheme: "light", 
            colors: {
              purple: ["#9c27b0", "#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"]
            }
            }}>
            <Component {...pageProps} session={session}  />
          </MantineProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  const session = await getSession(context);
  return {
    session: session,
  };
};

export default MyApp;
