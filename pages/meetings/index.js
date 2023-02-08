import Meetings from "./meetings";
import { getSession } from "next-auth/react";

export default Meetings;

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
    return {
        props: {},
    };
}