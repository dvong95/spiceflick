import { Button } from "@nextui-org/button";
import { Card, CardFooter } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";
import React from "react";

const UserPost = () => {
  return (
    <>
      <div className="min-w-[416px]">
        <Card>
          <Textarea
            placeholder="What's on your mind?"
            // className="max-w"
          ></Textarea>
          <CardFooter>
              <div className="flex space-x-2">
                <Button>Media</Button>
                <Button>Poll</Button>
                <Button>Event</Button>
              </div>
              <Button color="primary" className="relative left-[138px]">Post</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default UserPost;
