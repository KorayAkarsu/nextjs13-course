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
        <Link className="cursor-pointer" href="/profile/3">
          Profile 3
        </Link>
      </div>
    </div>
  );
}
