"use client";
import React from "react";
import {
  Navbar,
  Button,
  NavbarItem,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  User,
  Input,
} from "@nextui-org/react";

const DemoDropDown = () => {
  return (
    <>
      <NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="flat"
              className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1"
            >
              Demo
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="home-default">Home Default</DropdownItem>
            <DropdownItem key="home-event">Home Event</DropdownItem>
            <DropdownItem key="landing-page">Landing Page</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
    </>
  );
};

export default DemoDropDown;
