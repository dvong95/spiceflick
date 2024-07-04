"use client";
import React, { useState } from 'react';
import {
  Navbar, Button, NavbarItem, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, User, Input
} from "@nextui-org/react";

const NavigationBar = () => {
  const [albumsOpen, setAlbumsOpen] = useState(false);

  const handleAlbumsToggle = () => {
    setAlbumsOpen(!albumsOpen);
  };

  return (
    <Navbar className="flex flex-col items-center py-2 text-foreground w-full">
      <h1 className="text-3xl font-bold mb-2">SpiceFlick</h1>

      <div className="mb-4 w-full flex justify-center">
        <Input
          isClearable
          color="primary"
          placeholder="Search..."
          className="min-w-[416px] max-w-xs"
        />
      </div>

      <div className="flex space-x-4">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="flat" className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1">Demo</Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key="home-default">Home Default</DropdownItem>
              <DropdownItem key="home-event">Home Event</DropdownItem>
              <DropdownItem key="landing-page">Landing Page</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown closeOnSelect={false}>
            <DropdownTrigger>
              <Button variant="flat" className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1">Pages</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="flat" className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1">Albums</Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem key="album1">Album 1</DropdownItem>
                    <DropdownItem key="album2">Album 2</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </DropdownItem>
              <DropdownItem key="blog">Blog</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <User
                as="button"
                avatarProps={{
                  isBordered: true,
                  src: "https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR-650-80.jpg.webp",
                }}
                className="transition-transform"
                description="@davidvong"
                name="David Vong"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions">
              <DropdownItem key="profile" className="flex flex-col gap-1">
                <p className="font-bold text-sm">Signed in as</p>
                <p className="font-bold text-sm">@davidvong</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="privacy_network">Privacy & Network</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="documentation">Documentation</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" className='text-red-700'>Log Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
