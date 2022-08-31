import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const [isOpen, setMenu] = useState(false);
  const openMenu = () => {
    isOpen ? setMenu(false) : setMenu(true);
  };

  return (
    <>
      <div className="bg-purple-600 p-3 flex gap-5 items-center">
        <FontAwesomeIcon
          icon={faBars}
          className="text-white text-2xl sm:invisible"
          onClick={openMenu}
        />
        <div className="invisible sm:visible text-white font-['Helvetica] flex gap-6">
          <Link href="/">
            <a href="">Home</a>
          </Link>{" "}
          <Link href="/signup">
            <a href="">Signup</a>
          </Link>
          <div className="justify-center2">
            <h1> BIIT Parent Appointment Portal </h1>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-13 h-screen z-50 flex flex-col gap-5 p-6 bg-purple-500 text-white font-['Helvetica']">
          <div className="rounded-sm bg-purple-800 p-2">
            <button onClick={props.setParent}>Sign up as parent</button>
          </div>
          <div className="rounded-sm bg-purple-800 p-2">
            <Link href="/contact">
              <a href="">Contact</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
