import adminInfo from "./admin-info";
import { getSession } from "next-auth/react";

export default adminInfo;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    else if(session?.user.role !== "Director"){
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