import React from "react";
import UserSidebar from "./components/UserSidebar";
import ThemeSwitch from "./components/ThemeSwitch";
import FollowSidebar from "./components/FollowSidebar";
import Story from "./components/Story";
import StoryGroup from "./components/StoryGroup";

export const name = { first: "David", last: "Vong" };

const page = () => {
  return (
    <>
      <div className="flex gap-11">
        <ThemeSwitch />
        <UserSidebar />
        <FollowSidebar />
        <StoryGroup />
      </div>
    </>
  );
};

export default page;
