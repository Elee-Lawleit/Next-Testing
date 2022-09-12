import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { loginSchema } from "schemas/loginschema";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import Spinner from "components/Spinner";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const promiseInProgress = usePromiseTracker();

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

      console.log("THis is response: ", res);
      
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("This is error: ", error);
    }
  };

  if (promiseInProgress.promiseInProgress) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <form onSubmit={handleSubmit(onLogin)} className="flex flex-col gap-1">
        <div className="relative">
          <input
            type="text"
            name=""
            id=""
            placeholder="Username or email"
            className={clsx(
              "border border-gray-400 p-4 w-72 outline-none bg-gray-100 enabled:hover:bg-gray-200 placeholder:italic placeholder:pl-1 indent-5",
              errors?.username && "border-red-500"
            )}
            {...register("username")}
          />
          <FontAwesomeIcon
            icon={faUser}
            className="absolute ml-1 text-gray-800 top-5 left-2"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            name=""
            id=""
            placeholder="Password..."
            className={clsx(
              "border border-gray-400 p-4 w-72 outline-none bg-gray-100 enabled:hover:bg-gray-200 placeholder:italic placeholder:pl-1 indent-5",
              errors?.password && "border-red-500"
            )}
            {...register("password")}
          />
          <FontAwesomeIcon
            icon={faLock}
            className="absolute ml-1 text-gray-800 top-5 left-2"
          />
        </div>
        <div className="text-center text-white">
          <input
            type="submit"
            value="Login"
            name=""
            id=""
            className="w-full px-4 py-2 mt-1 bg-blue-500 rounded-sm cursor-pointer"
          />
        </div>
        <div className="flex justify-center mt-5">
          <select name="" id="" {...register("role")}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="parent">Parent</option>
            <option value="student">Student</option>
          </select>
        </div>
      </form>
      <div className="mt-2">
        <span className="text-gray-500">
          Dont't have an account?{" "}
          <Link href="/signup">
            <a href="" className="font-bold text-blue-500 underline">
              Signup
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;

// write server side props
export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log("in login = ", session);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
