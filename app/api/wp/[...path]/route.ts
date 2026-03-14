import { NextRequest, NextResponse } from "next/server";

const WP_BASE = "https://blog.heidydelacruz.com/wp-json/wp/v2";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const subpath = params.path.join("/");
  const search = request.nextUrl.search;
  const upstreamUrl = `${WP_BASE}/${subpath}${search}`;

  try {
    const res = await fetch(upstreamUrl, {
      next: { revalidate: 604800 }, // 7 days
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
  } catch (err) {
    console.error("[wp-proxy] fetch failed:", err);
    return NextResponse.json(
      { error: "WordPress API unavailable" },
      { status: 502 }
    );
  }
}
