import React from "react";
import AllHabitsTopBar from './Components/AllHabitsTopBar';
import AllHabitsRightSideBar from "./Components/AllHabitsRightSideBar";

function AllHabits() {
  return (
    <div className="w-full flex">
      <div className="w-[88%] m-5">
        <AllHabitsTopBar />
      </div>
      <AllHabitsRightSideBar />
    </div>
  );
}

export default AllHabits;