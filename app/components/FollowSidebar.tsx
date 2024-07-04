import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React from "react";
import UserFollow from "./UserFollow";
import users from "../data/Users";

const FollowSidebar = () => {
  return (
    <>
      <Card className="h-fit min-w-72">
        <CardHeader>
          <h1 className="font-bold text-xl text-default-foreground">
            Who to follow
          </h1>
        </CardHeader>
        <CardBody>
          {users.map((user, index) => (
            <UserFollow key={index} user={user} />
          ))}
        </CardBody>
        <CardFooter className="justify-center">
          <Button
            radius="sm"
            className="w-full hover:bg-primary-500 hover:text-white"
          >
            View more
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default FollowSidebar;
