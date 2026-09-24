import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

/* ============================================================
   GET /api/admin/leads
   - Returns all registered brochure downloads and contact inquiries
   - Optional security token: `?token=...` or `x-admin-token`
   ============================================================ */

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token") || req.headers.get("x-admin-token");
    const requiredToken = process.env.ADMIN_SECRET_TOKEN || process.env.ADMIN_KEY;

    if (requiredToken && token !== requiredToken) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    let brochureLeads: any[] = [];
    let contactInquiries: any[] = [];

    try {
      brochureLeads = await db.brochureLead.findMany({
        orderBy: { createdAt: "desc" },
        take: 100,
      });
    } catch (e) {
      console.warn("[admin/leads] Could not fetch brochure leads from DB:", e);
    }

    try {
      contactInquiries = await db.contactInquiry.findMany({
        orderBy: { createdAt: "desc" },
        take: 100,
      });
    } catch (e) {
      console.warn("[admin/leads] Could not fetch contact inquiries from DB:", e);
    }

    return NextResponse.json({
      ok: true,
      summary: {
        totalBrochureDownloads: brochureLeads.length,
        totalContactInquiries: contactInquiries.length,
      },
      brochureLeads,
      contactInquiries,
    });
  } catch (err: any) {
    console.error("[admin/leads] error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
