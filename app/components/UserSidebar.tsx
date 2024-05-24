import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Avatar } from "@nextui-org/avatar";
import { Link } from "@nextui-org/link";
import { name } from "../page";
import IconFeed from "@/public/icons/IconFeed";
import IconPersonFill from "@/public/icons/IconPersonFill";
import IconNewspaperVariantOutline from "@/public/icons/IconNewspaperVariantOutline";
import IconCalendarEvent from "@/public/icons/IconCalendarEvent";
import IconAccountGroup from "@/public/icons/IconAccountGroup";
import IconNotificationsOutline from "@/public/icons/IconNotificationsOutline";
import IconSettingsOutline from "@/public/icons/IconSettingsOutline";

export default function UserSidebar() {
  return (
    <>
      <div className="w-72">
        <Card className="text-center text-default-500">
          <CardHeader className="block">
            <div className="my-3 flex justify-center">
              <Avatar
                isBordered
                showFallback
                color="primary"
                name={name.first}
                radius="sm"
                src="https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR-650-80.jpg.webp"
                size="lg"
              />
            </div>
            <h1 className="font-bold text-xl text-default-foreground">
              {name.first} {name.last}
            </h1>
          </CardHeader>
          <CardBody className="text-center">
            <small>Web Developer at Sheridan College</small>
            <p className="mx-6 py-3 min-w-48 text-medium">
              I&apos;d love to change the world, but they won&apos;t give me the
              source code.
            </p>
            <div className="h-12 flex justify-center space-x-4">
              <div>
                <h2 className="font-semibold text-default-foreground">256</h2>
                <small>Post</small>
              </div>
              <Divider className="bg-default-200" orientation="vertical" />
              <div>
                <h2 className="font-semibold text-default-foreground">2.5K</h2>
                <small>Followers</small>
              </div>
              <Divider className="bg-default-200" orientation="vertical" />
              <div>
                <h2 className="font-semibold text-default-foreground">365</h2>
                <small>Following</small>
              </div>
            </div>
          </CardBody>
          <Divider className="bg-default-200 mx-auto my-4 w-10/12" />
          <CardFooter className="block px-0">
            <div className="mx-2 font-bold text-left text-medium">
              <ul className="last-of-type:pb-1">
                <li className="my-4 ml-4">
                  <Link href="#" color="foreground">
                    <IconFeed className="size-5 mx-2" />
                    Feed
                  </Link>
                </li>
                <li className="my-4 ml-4">
                  <Link href="#" color="foreground">
                    <IconPersonFill className="size-5 mx-2" />
                    Connections
                  </Link>
                </li>
                <li className="my-4 ml-4">
                  <Link href="#" color="foreground">
                    <IconNewspaperVariantOutline className="size-5 mx-2" />
                    Latest News
                  </Link>
                </li>
                <li className="my-4 ml-4">
                  <Link href="#" color="foreground">
                    <IconCalendarEvent className="size-5 mx-2" />
                    Events
                  </Link>
                </li>
                <li className="my-4 ml-4">
                  <Link href="#" color="foreground">
                    <IconAccountGroup className="size-5 mx-2" />
                    Groups
                  </Link>
                </li>
                <li className="my-4 ml-4">
                  <Link href="#" color="foreground">
                    <IconNotificationsOutline className="size-5 mx-2" />
                    Notifications
                  </Link>
                </li>
                <li className="my-4 ml-4">
                  <Link href="#" color="foreground">
                    <IconSettingsOutline className="size-5 mx-2" />
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
            <Divider className="mt-3 bg-default-200" />
            <div className="text-primary-500 font-semibold text-sm mt-2 text-center">
              <Link href="#">View Profile</Link>
            </div>
          </CardFooter>
        </Card>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-5">
          <Link href="#" size="sm" className="text-default-500">
            About
          </Link>
          <Link href="#" size="sm" className="text-default-500">
            Settings
          </Link>
          <Link href="#" size="sm" className="text-default-500">
            Support
          </Link>
          <Link href="#" size="sm" className="text-default-500">
            Docs
          </Link>
          <Link href="#" size="sm" className="text-default-500">
            Help
          </Link>
          <Link href="#" size="sm" className="text-default-500">
            Privacy &amp; terms
          </Link>
        </div>
        <small className="block text-center my-1 text-default-500">
          &copy;2024 SpiceFlick
        </small>
      </div>
    </>
  );
}
