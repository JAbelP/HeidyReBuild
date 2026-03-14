import { NextRequest, NextResponse } from "next/server";

const WP_BASE = "http://147.93.114.21:8000/wp-json/wp/v2";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const subpath = params.path.join("/");
  const search = request.nextUrl.search;
  const upstreamUrl = `${WP_BASE}/${subpath}${search}`;

  const res = await fetch(upstreamUrl, {
    next: { revalidate: 86400 },
  });

  const body = await res.text();
  return new NextResponse(body, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("Content-Type") ?? "application/json",
      "X-WP-Total": res.headers.get("X-WP-Total") ?? "",
      "X-WP-TotalPages": res.headers.get("X-WP-TotalPages") ?? "",
    },
  });
}
