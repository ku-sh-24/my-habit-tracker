import React from "react";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AllHabitsSearchBar(){
  return(
    <div className="w-[75%]">
      <div className="flex items-center p-2 rounded-lg border border-gray-600 w-[300px]">
        <FontAwesomeIcon
        height={16}
        width={16}
        icon={faSearch}
        className="ext-gray-400"
        />
        <input
        className={'bg-transparent outline-none text-[14px] text-gray-400 placeholder-gray-500 w-full pl-2'} 
        placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default AllHabitsSearchBar;