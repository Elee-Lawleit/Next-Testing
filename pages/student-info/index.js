import studentInfo from "./Student-info";
import { getSession } from "next-auth/react";

export default studentInfo;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  } else if (session?.user.role !== "Student") {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
