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
    console.log("INside login file");
    try {
      const res = await signIn("credentials", {
        username: data.username,
        password: data.password,
        role: data.role,
        redirect: false,
      });

      console.log("THis is response: ", res);

      if (res.ok) {
        toast.success("Logged In")
        router.push("/dashboard");
      }
      else {
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
    <div className="h-screen w-full flex flex-col px-4 justify-center items-center m-auto bg-bglayer bg-no-repeat bg-cover gap-7">
      {/* Container div to give border */}
      <div className="w-full max-w-md xl:max-w-lg flex flex-col gap-9 p-5">
        <div className="flex items-center gap-2 m-auto">
          <h1 className="text-xl lg:text-2xl font-bold font-Hack">Login</h1>
          <FontAwesomeIcon icon={faLock} />
        </div>

        <form onSubmit={handleSubmit(onLogin)} className="gap-2 form-control w-full">
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
          <div className="flex justify-center">
            <select name="" id="" {...register("role")} className={clsx("w-full select select-bordered select-primary select-sm rounded-md lg:select-md", errors?.role && "select-error")}>
              <option value="" defaultChecked>Select Role</option>
              <option value="admin">Admin</option>
              <option value="parent">Parent</option>
              <option value="student">Student</option>
            </select>
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
          Dont't have an account?{" "}
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
