import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    products: [
      {
        id: 1,
        name: "Iphone 15 pro max",
        price: "82.000 ₺",
      },
    ],
  });
}
