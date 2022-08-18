import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from "../components/Header";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState("parent");
  const [heading, setHeading] = useState("Parent Signup");

  const setParent = () => {
    setUser("parent");
    setHeading("Parent Signup");
  };
  const setStudent = () => {
    setUser("student");
    setHeading("Student Signup");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Header
        user={user}
        setParent={setParent}
        setStudent={setStudent}
        heading={heading}
      />
      <Component
        user={user}
        setParent={setParent}
        setStudent={setStudent}
        heading={heading}
        {...pageProps}
      />
    </QueryClientProvider>
  );
}

export default MyApp;
