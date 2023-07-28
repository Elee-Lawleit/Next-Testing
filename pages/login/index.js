import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { faUser, faLock, faKey } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { loginSchema } from "schemas/loginschema";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";

const Login = ({ session }) => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onLogin = async (data) => {
    try {
      const res = await signIn("credentials", {
        username: data.username,
        password: data.password,
        role: data.role,
        redirect: false,
      });

      if (res.ok) {
        toast.success("Logged In")
        router.push("/dashboard");
      }
      else {
        console.log(res)
        toast.error("couldn't log in, try again later")
      }
    } catch (error) {
      console.log("This is error: ", error);
    }
  };

  // if (promiseInProgress.promiseInProgress) {
  //   return <LoadingOverlay/>;
  // }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-4 m-auto bg-no-repeat bg-cover bg-bglayer gap-7">
      {/* Container div to give border */}
      <div className="flex flex-col w-full max-w-md p-5 xl:max-w-lg gap-9">
        <div className="flex items-center gap-2 m-auto">
          <h1 className="text-xl font-bold lg:text-2xl font-Montserrat">
            Login
          </h1>
          <FontAwesomeIcon icon={faLock} />
        </div>

        <form
          onSubmit={handleSubmit(onLogin)}
          className="w-full gap-2 form-control"
        >
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Username..."
              className={clsx(
                "input input-primary rounded-md input-md xl:input-lg placeholder:italic placeholder:pl-1 indent-5 w-full",
                errors?.username && "input-error"
              )}
              {...register("username")}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute ml-1 text-gray-800 top-4 md:xl:top-6 left-2"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name=""
              id=""
              placeholder="Password..."
              className={clsx(
                "input input-primary rounded-md input-md xl:input-lg placeholder:italic placeholder:pl-1 indent-5 w-full",
                errors?.password && "input-error"
              )}
              {...register("password")}
            />
            <FontAwesomeIcon
              icon={faKey}
              className="absolute ml-1 text-gray-800 top-4 md:xl:top-6 left-2"
            />
          </div>
          <div className="text-center text-white">
            <input
              type="submit"
              value="Login"
              name=""
              id=""
              className="w-full rounded-xl btn btn-primary"
            />
          </div>
        </form>
      </div>
      <div className="px-2 sm:p-0">
        <span className="text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/signup">
            <a href="" className="font-bold link link-primary">
              Signup
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;

// check for session on server side before coming to the client side
export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
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
