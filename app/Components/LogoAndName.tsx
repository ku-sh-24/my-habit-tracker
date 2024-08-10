import React from "react";
import { defaultColor } from "@/colors";
import Con from "../SVG_icon/Con";

function LogoAndName(){
  return (
    <div className="flex gap-2 items-center sm:justify-start justify-center">
      <span className="text-2xl font-light flex items-center gap-2">
        {/* icon */}
        <div 
          style={{backgroundColor: defaultColor}} 
          className="p-2 rounded-md"
        >
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
  );
}

export default LogoAndName;