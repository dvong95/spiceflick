import React from "react";
import Story from "./Story";

const users = [
  {
    name: "Hilary Duff",
  },
  {
    name: "Some Name",
  },
  {
    name: "Another Name",
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
      <div className="flex">
        <div className="relative top-4 right-4 min-w-28 max-w-28">
          <Story username={"Post a Story"} />
        </div>
        <div className="flex h-40 w-96 min-w-72 overflow-x-scroll gap-2 my-4">
          {users.map((user, index) => (
            <Story key={index} username={user.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StoryGroup;
