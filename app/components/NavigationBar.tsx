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
  DropdownSection,
} from "@nextui-org/react";
import { FiMessageCircle, FiMoreHorizontal } from "react-icons/fi";
import IUser from "../models/IUser";
import users from "../data/Users";
import ThemeSwitcher from "./ThemeSwitch";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="flex py-2 text-foreground w-full">
        <h1 className="text-3xl font-bold mb-2">SpiceFlick</h1>

        {/* Search bar */}
        <div className="mb-4 w-full flex justify-center">
          <Input
            isClearable
            color="primary"
            placeholder="Search..."
            className="min-w-[416px] max-w-xs"
          />
        </div>

        {/* Navigation items */}
        <div className="flex space-x-4">
          {/* Demo */}
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="flat" className="list-none">
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

          {/* Pages */}
          <NavbarItem>
            <Dropdown closeOnSelect={false}>
              <DropdownTrigger>
                <Button variant="flat" className="list-none">
                  Pages
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="flat" color="primary">
                        Albums
                      </Button>
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

          {/* Direct Messages */}
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="flat"
                  className="bg-blue-500 text-white hover:bg-blue-600 p-2"
                >
                  <FiMessageCircle size={30} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu className="max-h-48 overflow-y-scroll pt-0 w-80">
                <DropdownSection className="sticky top-0 text-default-foreground bg-default-50 z-10">
                  <DropdownItem key="open-messages">
                    <Button variant="flat" className="w-full mb-2">
                      Open Messages Tab
                    </Button>
                  </DropdownItem>
                </DropdownSection>
                {users.map((dm) => (
                  <DropdownSection
                    key={`dm${dm.id}`}
                    className="max-h-[100px] overflow-hidden"
                  >
                    <DropdownItem className="flex items-center justify-between space-x-2">
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-2">
                          <User avatarProps={{ src: dm.profilePicture }} />
                          <div>
                            <p className="text-sm font-bold">{dm.name}</p>
                            <p className="text-sm max-w-[150px] text-gray-500 truncate text-ellipsis">
                              {dm.message}
                            </p>
                          </div>
                        </div>
                        <div>
                          <FiMoreHorizontal size={20} />
                        </div>
                      </div>
                    </DropdownItem>
                  </DropdownSection>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

          {/* User */}
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: "pictures/po.png",
                  }}
                  className="transition-transform"
                  description="@davidvong"
                  name="David Vong"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions">
                <DropdownSection aria-label="Profile & Actions" showDivider>
                  <DropdownItem
                    key="profile"
                    className="flex items-start flex-col gap-1"
                  >
                    <p className="text-xs">Signed in as</p>
                    <p className="font-bold text-sm">@davidvong</p>
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection showDivider>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="privacy_network">
                    Privacy & Network
                  </DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="documentation">Documentation</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                </DropdownSection>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" className="text-red-700">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </div>
      </Navbar>
    </>
  );
};

export default NavigationBar;
