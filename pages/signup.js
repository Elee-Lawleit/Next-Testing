import { useForm } from "react-hook-form";
import { signUpSchema } from "../schemas/signUpSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import useFetchGigs from "../hooks/gigs/useFetchGigs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Head from "next/head";

import {
  faUser,
  faEnvelope,
  faIdCard,
  faIdBadge,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export default function Home({ user }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  // const { data } = useFetchGigs();
  // console.log(data);

  const onSignup = (data) => {
    console.log("This is the register function: ",register())
    console.log(data);
  };

  return (
    <>
      <Head meta="" keywords="" />
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <form onSubmit={handleSubmit(onSignup)} className="flex flex-col gap-1">
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Username..."
              className={clsx(
                "border border-gray-400 p-4 w-72 outline-none bg-gray-100 enabled:hover:bg-gray-200 placeholder:italic placeholder:pl-1 indent-5",
                errors?.username && "border-red-500"
              )}
              {...register("username")}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute top-5 left-2 text-gray-800 ml-1"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email..."
              className={clsx(
                "border border-gray-400 p-4 w-72 outline-none bg-gray-100 enabled:hover:bg-gray-200 placeholder:italic placeholder:pl-1 indent-5",
                errors?.email && "border-red-500"
              )}
              {...register("email")}
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute top-5 left-2 text-gray-800 ml-1"
            />
          </div>

          {user === "parent" && (
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                placeholder="CNIC..."
                className={clsx(
                  "border border-gray-400 p-4 w-72 outline-none bg-gray-100 enabled:hover:bg-gray-200 placeholder:italic placeholder:pl-1 indent-5",
                  errors?.cnic && "border-red-500"
                )}
                {...register("cnic")}
              />
              <FontAwesomeIcon
                icon={faIdCard}
                className="absolute top-5 left-2 text-gray-800 ml-1"
              />
            </div>
          )}

          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone..."
              className={clsx(
                "border border-gray-400 p-4 w-72 outline-none bg-gray-100 enabled:hover:bg-gray-200 placeholder:italic placeholder:pl-1 indent-5",
                errors?.phone && "border-red-500"
              )}
              {...register("phone")}
            />
            <FontAwesomeIcon
              icon={faPhone}
              className="absolute top-5 left-2 text-gray-800 ml-1"
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
              className="absolute top-5 left-2 text-gray-800 ml-1"
            />
          </div>
          <div className="text-center text-white">
            <input
              type="submit"
              value="Signup"
              name=""
              id=""
              className="bg-blue-500 px-4 w-full py-2 rounded-sm mt-1 cursor-pointer"
            />
          </div>
        </form>
        <div className="mt-2">
          <span className="text-gray-500">
            Already have an account?{" "}
            <Link href="/login">
              <a href="" className="underline text-blue-500 font-bold">
                Login
              </a>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
