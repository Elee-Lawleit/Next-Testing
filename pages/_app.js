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
import { useState } from "react";

//dynamically importing it because goddammit it
const Toaster = dynamic(() => import("./../components/GlobalToaster"), {
  ssr: false,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, session }) {
  
  const [opened, setOpened] = useState(false);

  const data = "Some importatnt data";

  return (
    <SessionProvider session={session}>
      <Toaster />
      <QueryClientProvider client={queryClient}>
          {/* <Header session={session}/> */}
          <MantineProvider theme={{colorScheme: "light"}}>
            <Component {...pageProps} session={session} opened={opened} setOpened={setOpened} />
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
