import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { loginSchema } from "schemas/loginschema";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";
import { LoadingOverlay } from "@mantine/core";

const Login = ({session}) => {
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
      const res = await trackPromise(signIn("credentials", {
        username: data.username,
        password: data.password,
        role: data.role,
        redirect: false,
      }));

      console.log("THis is response: ", res);
      
      if (res.ok) {
        toast.success("Logged In")
        router.push("/");
        return;
      }
    } catch (error) {
      console.log("This is error: ", error);
    }
  };

  if (promiseInProgress.promiseInProgress) {
    return <LoadingOverlay/>;
  }

  return (
    <div className="h-[80vh] w-full flex flex-col px-4 justify-center items-center m-auto">
              <form onSubmit={handleSubmit(onLogin)} className="w-full gap-2 md:w-3/6 form-control">
                <div className="relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Username..."
                    className={clsx(
                      "input input-primary input-md xl:input-lg placeholder:italic placeholder:pl-1 indent-5 w-full",
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
                      "input input-primary input-md xl:input-lg placeholder:italic placeholder:pl-1 indent-5 w-full",
                      errors?.password && "input-error"
                    )}
                    {...register("password")}
                  />
                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute ml-1 text-gray-800 top-4 md:xl:top-6 left-2"
                  />
                </div>
                <div className="flex justify-center">
                  <select name="" id="" {...register("role")} className={clsx("w-full select select-bordered select-primary select-sm lg:select-md", errors?.role && "select-error")}>
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
            <div className="px-2 mt-2 sm:p-0">
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

// write server side props
export async function getServerSideProps(context) {
  const session = await getSession(context);
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
