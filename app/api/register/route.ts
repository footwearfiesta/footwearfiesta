import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ status: "success", message: body });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ status: "failed" }, { status: 500 });
    }
  }
}
