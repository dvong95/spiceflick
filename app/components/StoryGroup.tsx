import React from "react";
import Story from "./Story";

const users = [
  {
    name: "David Vong",
  },
  {
    name: "Katherine McMaster",
  },
  {
    name: "Scott McMaster",
  },
  {
    name: "Poopy Poop",
  },
  {
    name: "Boup Boop",
  },
  {
    name: "Cold Blooded",
  },
  {
    name: "David Anderson",
  },
];

const StoryGroup = () => {
  return (
    <>
        <div className="relative top-3 left-6 w-28">
        <Story username={"Add a New Story"} />
        </div>
        <div className="flex h-40 w-96 overflow-x-scroll gap-2 my-4">
          {users.map((user, index) => (
            <Story key={index} username={user.name} />
          ))}
        </div>
    </>
  );
};

export default StoryGroup;
