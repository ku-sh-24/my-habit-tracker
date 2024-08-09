"use client";

import React from "react";
import Con from "../SVG_icon/Con"; // Ensure the path is correct
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

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
            <div className="flex gap-2 items-center sm:justify-start justify-center">
              <span className="text-2xl font-light flex items-center gap-2">
                {/* icon */}
                <div style={backgroundColorObject} className="p-2 rounded-md">
                  <Con color="#ffffff" height="34" width="34" />
                </div>
                {/* name of the app */}
                <span
                  style={{ color: "#ED8F27" }}
                  className="font-bold text-mainColor"
                >
                  Habit
                </span>
                <span className="font-light"> Tracker </span>
              </span>
            </div>
          </div>
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
          {/* <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              style={backgroundColorObject}
              className={"block sm:w-32 w-full rounded-lg px-9 py-3 text-sm font-medium text-white transition focus:outline-none hover:bg-customRed hover:text-white border-customRed text-customRed"}
              type="button"
            >
              Sign In
            </button>
            <button
              // className={"block sm:w-32 w-full rounded-lg px-9 py-3 text-sm font-medium transition focus-outline:none hover:bg-customRed hover:text-white border-customRed text-customRed"}
              className="block sm:w-32 w-full rounded-lg px-9 py-3 text-sm font-medium border border-customRed text-customRed transition-colors duration-300 ease-in-out focus:outline-none hover:bg-customRed hover:text-white"
              type="button"
            >
              Sign Up
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
