import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Called by Vercel Cron daily at 8 PM UTC (vercel.json schedule: "0 20 * * *")
// Vercel automatically provides CRON_SECRET in the Authorization header.
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag("wordpress");

  return NextResponse.json({ revalidated: true, timestamp: new Date().toISOString() });
}
