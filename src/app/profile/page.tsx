"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>My list of profile</h1>
      <div>
        <Link className="cursor-pointer" href="/profile/1">
          Profile 1
        </Link>
        <Link className="cursor-pointer" href="/profile/2">
          Profile 2
        </Link>
        <Link
          prefetch={true}
          className="cursor-pointer"
          href={{ pathname: "/profile/3", query: { userName: "koraka" } }}
        >
          <div>A big square where I got some text</div>
        </Link>
        <a href="https://google.com" target="_blank">
          Google
        </a>
      </div>
    </div>
  );
}
