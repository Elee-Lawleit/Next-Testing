import create from "./Create"
import { getSession } from "next-auth/react";

export default create;

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
    else if (session?.user.role === "Student" || session?.user.role === "Datacell" || session?.user.role === "Deputy Director" || session?.user.role === "Director" || session?.user.role === "Attendance" || session?.user.role === "Project Committee") {
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