import { NextResponse } from "next/server";
import { LeetCode } from "leetcode-query";

export async function GET() {
  try {
    const leetcode = new LeetCode();
    const user = await leetcode.user("maximelbv");
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
