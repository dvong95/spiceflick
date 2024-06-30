"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

const Story = ({ username }: any) => {
  return (
    <>
      <Card isPressable onPress={() => console.log("Hi")} className="min-w-fit">
        <Image
          isZoomed
          removeWrapper
          alt="Story preview"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-4.jpeg"
        />
        <CardFooter className="absolute bg-gradient-to-t from-black from-20% bottom-0 z-10">
          <p className="font-semibold text-sm text-white">{username}</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default Story;
