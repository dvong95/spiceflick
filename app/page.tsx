import React from "react";
import UserSidebar from "./components/UserSidebar";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export const name = { first: "David", last: "Vong" };

const page = () => {
  return (
    <>
      <div className="flex gap-6">
        <div className="basis-1/3 flex justify-end">
          <div className="w-fit">
            <UserSidebar />
          </div>
        </div>
        <div className="basis-1/3">
          <ThemeSwitcher />
        </div>
        <div className="basis-1/3"></div>
      </div>
    </>
  );
};

export default page;
