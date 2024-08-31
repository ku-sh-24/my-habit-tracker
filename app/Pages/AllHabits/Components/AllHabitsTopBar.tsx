import AllHabitsSearchBar from "./AllHabitsSearchBar";

function AllHabitsTopBar() {
  return (
    <div className="bg-custom-gray-light p-5 rounded-md flex justify-between">
      <div className="flex flex-col">
        <span className="text-xl">
          <span className="font-bold">Hi There</span>
          <span className="font-light">, Kuhu</span>
        </span>
        <span className="font-light text-[12px] text-gray-500">
          Welcome Back!
        </span>
      </div>
      <div className="w-[50%] flex gap 3 justify-between">
        <AllHabitsSearchBar />
      </div>
    </div>
  );
}

export default AllHabitsTopBar;