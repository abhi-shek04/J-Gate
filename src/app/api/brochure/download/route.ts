import { NextRequest, NextResponse } from "next/server";

/* ============================================================
   GET /api/brochure/download
   - Redirects to static brochure PDF (/J-Gate-Brochure.pdf)
   - Served via CDN Edge with byte-range support & zero memory overhead
   ============================================================ */

export async function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/J-Gate-Brochure.pdf", req.url), 307);
  res.headers.set("Content-Disposition", 'attachment; filename="J-Gate-Brochure.pdf"');
  return res;
}

