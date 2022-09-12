import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { signOut } from "next-auth/react";

import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header({ session }) {

  const [isOpen, setMenu] = useState(false);
  const openMenu = () => {
    isOpen ? setMenu(false) : setMenu(true);
  };

  return (
    <>
      <div className="flex items-center gap-5 p-3 bg-purple-600">
        <FontAwesomeIcon
          icon={faBars}
          className="text-2xl text-white sm:invisible"
          onClick={openMenu}
        />
        <div className="invisible sm:visible text-white font-['Helvetica] flex gap-6">
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          {!session && (
            <Link href="/signup">
              <a>Signup</a>
            </Link>
          )}
          {session ? (
            <a onClick={signOut} className="cursor-pointer">
              Logout
            </a>
          ) : (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-13 h-screen z-50 flex flex-col gap-5 p-6 bg-purple-500 text-white font-['Helvetica']">
          <div className="p-2 bg-purple-800 rounded-sm">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
