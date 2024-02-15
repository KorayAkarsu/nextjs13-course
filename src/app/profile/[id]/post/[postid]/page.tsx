"use client";
import { useParams } from "next/navigation";

export default function ProfileIDPostID() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>PostID: {params.postid}</h1>
    </div>
  );
}
