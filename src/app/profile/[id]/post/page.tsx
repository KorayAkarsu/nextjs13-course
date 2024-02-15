"use client";
import { useParams } from "next/navigation";

export default function ProfileIDPost() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Post Page</h1>
    </div>
  );
}
