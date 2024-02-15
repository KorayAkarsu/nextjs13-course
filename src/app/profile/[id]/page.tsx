"use client";
import { useParams, useRouter } from "next/navigation";

export default function ProfileID() {
  const params = useParams();
  const router = useRouter();
  return (
    <div>
      <h1>Profile page with id: {params.id}</h1>
      <div
        className="bg-red-500 text-white cursor-pointer w-[150px] rounded p-2 hover:bg-red-600"
        onClick={() => router.push("/profile")}
      >
        Back to main page
      </div>
    </div>
  );
}
