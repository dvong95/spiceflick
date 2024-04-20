import React from "react";
import UserSidebar from "./components/UserSidebar";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export const name = { first: "David", last: "Vong" };

const page = () => {
  return (
    <div>
      <UserSidebar />
      <ThemeSwitcher />
    </div>
  );
};

export default page;
