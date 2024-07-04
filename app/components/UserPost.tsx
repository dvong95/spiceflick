import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React from "react";
import users from "../data/Users";

const UserPost = () => {
  return (
    <>
      <div className="min-w-[416px]">
        <Card>
          <div className="flex">
            <Link href="#" className="mx-3 my-auto">
              <Avatar src={users[0].profilePicture} />
            </Link>
            <Textarea
              placeholder="What's on your mind?"
              className="mr-3 mt-3"
            ></Textarea>
          </div>
          <CardFooter>
            <div className="flex space-x-2">
              <Button>Media</Button>
              <Button>Poll</Button>
              <Button>Event</Button>
            </div>
            <Button color="primary" className="relative left-[138px]">
              Post
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default UserPost;
