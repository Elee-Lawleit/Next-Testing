import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { signUpSchema } from "schemas/signUpSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  faUser,
  faEnvelope,
  faIdCard,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import useAddParentMutation from "hooks/parent/use-add-parent-mutation";
import Spinner from "components/Spinner";
import { trackPromise } from "react-promise-tracker";


const Signup = (props) => {


  const [loading, setLoading] = useState(true);

  //may need to use this hack again
  // setTimeout(()=>{
  //   setLoading(false);
  // }, 1000)
  

  //dynamically creating a component
  const SignUp = dynamic(() => import("components/Use-otp"), {
    ssr: false
  });

  const [payload, setPayload] = useState();

  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const { mutate: addParent } = useAddParentMutation();

  const onSignup = (data) => {
    addParent(
      {
        ...data,
      },
      {
        onSuccess: () => {
          // toast.success("Parent added.");
          router.push("/login");
        },
        onError: () => {
          // toast.error("Error adding parent.");
        },
      }
    );
  };

  return (

    <>
      {loading && <Spinner/>}
      {!payload && <SignUp setPayload={setPayload} setLoading={setLoading} />}
      {payload && <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
        <Spinner/>
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
              className="absolute ml-1 text-gray-800 top-5 left-2"
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
              className="absolute ml-1 text-gray-800 top-5 left-2"
            />
          </div>

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
              className="absolute ml-1 text-gray-800 top-5 left-2"
            />
          </div>

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
              value="Signup"
              name=""
              id=""
              className="w-full px-4 py-2 mt-1 bg-blue-500 rounded-sm cursor-pointer"
            />
          </div>
        </form>
        <div className="mt-2">
          <span className="text-gray-500">
            Already have an account?{" "}
            <Link href="/login">
              <a href="" className="font-bold text-blue-500 underline">
                Login
              </a>
            </Link>
          </span>
        </div>
      </div>}
    </>
  );
};

export default Signup;
