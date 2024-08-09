import { SignIn } from "@clerk/nextjs";
import React from "react";
// import { ClerkProvider } from "@clerk/nextjs";

function SignInPage(){
  const defaultColor = "#ED8F27";
  const gradientColor = 'linear-gradient(to bottom, ${deafaultColor}, #ff6b6b';
  return(
    <div
      style={{background: gradientColor}}
      className="flex justify-center items-center flex-col gap-10 w-full h-screen"
    >
      <SignIn />
    </div>
  );
}

export default SignInPage;