import React from 'react';

function Entry() {
  return (
    <div className="flex flex-col items-center mx-16 mt-[100px] gap-6">
      <h1 className="text-3xl font-bold text-center">
        Build the habits that <span className="text-customRed">make a difference!</span>
      </h1>
      <p className="text-center text-sm sm:w-[430px] w-[360px]">
      Feeling overwhelmed and striving for perfection? You&apos;re in the right place. This habit tracking tool is here to support you in making gradual, meaningful changes without the pressure of perfection. Embrace progress over perfection, track your habits, and celebrate each small victory. Together, we&apos;ll turn your goals into achievable milestones and make personal growth a rewarding experience.
      </p>
      <button
        className="block sm:w-32 w-full rounded-lg px-9 py-3 text-sm font-medium border border-customRed text-customRed transition-colors duration-300 ease-in-out focus:outline-none hover:bg-customRed hover:text-white whitespace-nowrap flex items-center justify-center"
        type="button"
      >
        {"Let's Get Started!"}
      </button>
    </div>
  );
}

export default Entry;
