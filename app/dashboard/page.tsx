"use client"

import React from "react";
import { SignedOut, SignOutButton, useUser } from "@clerk/nextjs";

function Dashboard(){
  const {user} = useUser();
  return(
    <div>
      Hello, {user?.lastName} <SignOutButton>SignedOut</SignOutButton>
    </div>
  );
}

export default Dashboard;