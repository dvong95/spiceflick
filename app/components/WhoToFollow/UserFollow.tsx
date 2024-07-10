import IconAddFill from "@/public/icons/IconAddFill";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { User } from "@nextui-org/user";
import React from "react";
import IUser from "../../models/IUser";

const UserFollow: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <>
      <div className="p-2">
        <Link href="#" color="foreground">
          <User
            name={user.name}
            description={user.occupation}
            avatarProps={{
              src: user.profilePicture,
            }}
          />
        </Link>
        <div className="relative h-0 text-right bottom-12">
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
