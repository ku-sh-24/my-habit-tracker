"use client";

import React from "react";
import Con from "../SVG_icon/Con"; // Ensure the path is correct
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import LogoAndName from "../Components/LogoAndName";

function Navbar() {
  const {userId} =useAuth();
  const defaultColor = "#ED8F27";
  const backgroundColorObject = { backgroundColor: defaultColor };

  return (
    <header>
      <div className="p-8 px-20">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            {/* these divs are for the icon and the name of the app */}
            <LogoAndName />
          </div>
          {/* </div> */}
          {/* the buttons */}

          <div>
            {userId ? (
              <Link href={"/dashboard"}>
                <button
                  style = {backgroundColorObject}
                  className={"block rounded-lg px-9 py-3 text-sm font-medium text-white transition"}
                  type="button"
                >
                  Dashboard
                </button>
              </Link>
            ):(
              <div className="mt-4 flex flex col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <Link href={"/sign-in"}>
                  <button
                    style={backgroundColorObject}
                    className={"block sm:w-32 w-full rounded-lg px-9 py-3 text-sm font-medium text-white transition focus:outline-none hover:bg-customRed hover:text-white border-customRed text-customRed"}
                    type="button"  
                  >
                    Sign In
                  </button>
                </Link>

                <Link href={"/sign-up"}>
                  <button
                    className={"block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-medium transition focus:outline-none hover:bg-customRed hover:text-white border-customRed text-customRed"}
                    type="button"  
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
