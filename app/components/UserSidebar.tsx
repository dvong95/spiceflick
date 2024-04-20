import { Avatar, Divider } from "@nextui-org/react";
import Link from "next/link";
import { name } from "../page";


export default function UserSidebar() {
  return (
    <>
      <div className="w-72">
        <div className="w-full border border-default-300 rounded-t-lg rounded-b-lg">
          <div className="h-12 rounded-t-lg bg-slate-700"></div>
          <div className="text-center text-default-500">
            <div className="relative bottom-4 flex justify-center">
              <Avatar
                isBordered
                showFallback
                name={name.first}
                radius="sm"
                src="https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR-650-80.jpg.webp"
                size="lg" />
            </div>
            <h1 className="font-bold text-xl text-default-foreground">
              {name.first} {name.last}
            </h1>
            <small className="text-default-500">
              Web Developer at Sheridan College
            </small>
            <p className="mx-6 py-3 text-medium font-normal">
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
            <Divider className="bg-default-200 my-5 mx-auto text-center w-10/12" />
          </div>
          <div className="font-bold text-medium">
            <ul>
              <li className="my-4 ml-4"><Link href="#">Feed</Link></li>
              <li className="my-4 ml-4"><Link href="#">Connections</Link></li>
              <li className="my-4 ml-4"><Link href="#">Latest News</Link></li>
              <li className="my-4 ml-4"><Link href="#">Events</Link></li>
              <li className="my-4 ml-4"><Link href="#">Groups</Link></li>
              <li className="my-4 ml-4"><Link href="#">Notifications</Link></li>
              <li className="my-4 ml-4"><Link href="#">Settings</Link></li>
            </ul>
          </div>
          <Divider className="w-full mt-8 bg-default-200" />
          <div className="text-primary-500 font-semibold text-sm my-2 text-center hover:text-primary-600">
            <Link href="#">View Profile</Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center text-sm text-default-500 gap-x-6 gap-y-2 mt-5">
          <Link href="#">About</Link>
          <Link href="#">Settings</Link>
          <Link href="#">Support</Link>
          <Link href="#">Docs</Link>
          <Link href="#">Help</Link>
          <Link href="#">Privacy &amp; terms</Link>
        </div>
        <small className="block text-center my-1 text-default-500">&copy;2024 SpiceFlick</small>
      </div>
    </>
  );
}
