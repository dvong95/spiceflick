import IconAddFill from "@/public/icons/IconAddFill";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { User } from "@nextui-org/user";
import React from "react";

const UserFollow = () => {
  return (
    <>
      <div className="p-2">
        <Link href="#" color="foreground">
          <User
            name="David Vong"
            description="Software Developer"
            avatarProps={{
              src: "https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR-650-80.jpg.webp",
            }}
          />
        </Link>
        <div className="inline-block relative ml-12 bottom-3">
          <Button
            isIconOnly
            radius="full"
            className="group hover:bg-primary-500 "
          >
            <IconAddFill className="group-hover:fill-white" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserFollow;
