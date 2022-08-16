import { useForm } from "react-hook-form";
import { signUpSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import useFetchGigs from "../hooks/gigs/useFetchGigs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Header from "../components/Header";

import {
  faUser,
  faEnvelope,
  faIdCard,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { register, formState: {errors}, handleSubmit } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const {data} = useFetchGigs()
  console.log(data)

  const onSignup = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header/>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit(onSignup)}>
          <div className="mb-2 flex justify-center items-center gap-x-2">
            {<FontAwesomeIcon
              icon={faUser}
            />}
            <input
              placeholder="Username..."
              className={clsx(
                "border border-gray-400 outline-none p-2 bg-gray-100",
                errors?.username && "border-red-500"
                )}
              type="text"
              {...register("username")}
            />
          </div>
          <div className="mb-2 flex justify-center items-center gap-x-2">
            {<FontAwesomeIcon
              icon={faEnvelope}
            />}
            <input
                placeholder="Enter email"
                className={clsx(
                  "border border-gray-400 outline-none p-2 bg-gray-100",
                  errors?.cnic && "border-red-500"
                  )}
                  type="email"
                  {...register("cnic")}
                  />
          </div>
          <div className="mb-2 flex justify-center items-center gap-x-2">
            {<FontAwesomeIcon
              icon={faIdCard}
            />}
            <input
                placeholder="Enter cnic"
                className={clsx(
                  "border border-gray-400 outline-none p-2 bg-gray-100",
                  errors?.email && "border-red-500"
                  )}
                  type="email"
                  {...register("email")}
                  />
          </div>
          <div className="mb-2 flex justify-center items-center gap-x-2">
                  {<FontAwesomeIcon
                    icon={faPhone}
                  />}
            <input
                placeholder="Enter phone"
                className={clsx(
                  "border border-gray-400 outline-none p-2 bg-gray-100",
                errors?.phone && "border-red-500"
              )}
              type="password"
              {...register("phone")}
              />{" "}
          </div>
          <div className="mb-2 flex justify-center items-center gap-x-2">
            {<FontAwesomeIcon
              icon={faLock}
            />}
            <input
            placeholder="password"
              className={clsx(
                "border border-gray-400 outline-none p-2 bg-gray-100",
                errors?.confirmPassword && "border-red-500"
              )}
              type="password"
              {...register("password")}
            />{" "}
          </div>
          <div className="text-center">
            <input
              className="bg-blue-500 rounded-sm hover:bg-blue-600 text-white p-2"
              type="submit"
              value="Sign up"
            />
          </div>
          <div className="">
                <span>Already have an account?</span> <Link href="/login" className="underline">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}
