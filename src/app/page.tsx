"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const fetchDataFromApi = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch("/api/users", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        className="bg-red-500 text-white cursor-pointer w-[150px] rounded p-2 hover:bg-red-600"
        onClick={() => fetchDataFromApi()}
      >
        <div>{loading ? "Loading..." : "Call my API"}</div>
      </button>
    </div>
  );
}
