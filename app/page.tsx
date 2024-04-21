import React from "react";
import UserSidebar from "./components/UserSidebar";
import ThemeSwitch from "./components/ThemeSwitch";
import FollowSidebar from "./components/FollowSidebar";

export const name = { first: "David", last: "Vong" };

const page = () => {
  return (
    <>
      <div className="flex gap-11">
        <ThemeSwitch />
        <UserSidebar />
        <FollowSidebar />
      </div>
    </>
  );
};

export default page;
