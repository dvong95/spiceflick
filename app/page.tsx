import React from "react";
import UserSidebar from "./components/UserSidebar";
import ThemeSwitch from "./components/ThemeSwitch";
import FollowSidebar from "./components/FollowSidebar";
import Story from "./components/Story";
import StoryGroup from "./components/StoryGroup";
import UserPost from "./components/UserPost";
import NavigationBar from "./components/NavigationBar";

export const name = { first: "David", last: "Vong" };

const page = () => {
  return (
    <>
      <ThemeSwitch />
      <NavigationBar />
      <div className="flex gap-11 justify-center">
        <UserSidebar />
        <div className="">
          <StoryGroup />
          <UserPost />
        </div>
        <FollowSidebar />
       
      </div>
    </>
  );
};

export default page;
