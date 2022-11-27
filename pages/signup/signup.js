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
  faRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import useAddParentMutation from "hooks/parent/use-add-parent-mutation";
import { toast } from "react-hot-toast";


const Signup = ({ session }) => {


  //used for rendering the otp component
  const [payload, setPayload] = useState();

  //dynamically importing otp component
  const SignUp = dynamic(() => import("components/Use-otp"), {
    ssr: false
  });

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const { mutate: addParent, isLoading } = useAddParentMutation();

  const onSignup = (data) => {
    addParent(
      {
        ...data,
      },
      {
        onSuccess: () => {
          toast.success("Parent added.");
          router.push("/login");
        },
        onError: () => {
          toast.error("Error adding parent.");
        },
      }
    );
  };


  //waiting for signup

  //****** EDIT THIS: THIS CAN BE DONE VIA MANTINE LOADING OVERLAY ******//
  if (isLoading) {
    console.log("loading because of mutation");
    return (toast.loading("Please wait"))
  }

  if (typeof window !== "undefined") {
    if (session) {
      router.push("/")
    }
  }


  return (

    <>
      {/* This is the otp component */}
      {!payload && <SignUp setPayload={setPayload} />}

      {payload && <div className="h-screen w-full flex flex-col gap-6 px-6 justify-center items-center bg-bglayer bg-no-repeat bg-cover">
        <div className="flex items-center gap-2">
          <h1 className="text-xl lg:text-2xl font-bold font-['Hack']">Sign Up</h1>
          <FontAwesomeIcon icon={faRightToBracket} />
        </div>
        <form onSubmit={handleSubmit(onSignup)} className="justify-center gap-2 form-control w-full max-w-md xl:max-w-lg">
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
              type="text"
              name=""
              id=""
              placeholder="Email..."
              className={clsx(
                "input input-primary rounded-md input-md xl:input-lg placeholder:italic placeholder:pl-1 indent-5 w-full",
                errors?.email && "input-error"
              )}
              {...register("email")}
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute ml-1 text-gray-800 top-4 md:xl:top-6 left-2"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="CNIC..."
              className={clsx(
                "input input-primary rounded-md input-md xl:input-lg placeholder:italic placeholder:pl-1 indent-5 w-full",
                errors?.cnic && "input-error"
              )}
              {...register("cnic")}
            />
            <FontAwesomeIcon
              icon={faIdCard}
              className="absolute ml-1 text-gray-800 top-4 md:xl:top-6 left-2"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Phone..."
              className={clsx(
                "input input-primary rounded-md input-md xl:input-lg placeholder:italic placeholder:pl-1 indent-5 w-full",
                errors?.phone && "input-error"
              )}
              {...register("phone")}
            />
            <FontAwesomeIcon
              icon={faPhone}
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
              icon={faLock}
              className="absolute ml-1 text-gray-800 top-4 md:xl:top-6 left-2"
            />
          </div>
          <div className="text-center text-white">
            <input
              type="submit"
              value="Signup"
              name=""
              id=""
              className="w-full rounded-xl btn btn-primary"
            />
          </div>
        </form>

        <div className="mt-2">
          <span className="text-gray-500">
            Already have an account?{" "}
            <Link href="/login">
              <a href="" className="font-bold link link-primary">
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
