import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/* ============================================================
   GET /api/brochure/download
   - Dedicated streaming endpoint for J-Gate Brochure PDF
   - Sends Content-Disposition: attachment; filename="J-Gate-Brochure.pdf"
   - Guarantees instant native download prompt across all browsers:
     • iOS Safari (Files / Downloads app prompt)
     • Android Chrome (Native file download manager)
     • Desktop Chrome, Edge, Safari, Firefox (Direct download bar)
   ============================================================ */

export async function GET(req: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), "public", "J-Gate-Brochure.pdf");
    if (!fs.existsSync(filePath)) {
      return new NextResponse("Brochure file not found", { status: 404 });
    }

    const stat = fs.statSync(filePath);
    const fileStream = fs.createReadStream(filePath);

    // Stream the binary PDF
    const webStream = new ReadableStream({
      start(controller) {
        fileStream.on("data", (chunk) => controller.enqueue(chunk));
        fileStream.on("end", () => controller.close());
        fileStream.on("error", (err) => controller.error(err));
      },
      cancel() {
        fileStream.destroy();
      },
    });

    return new NextResponse(webStream, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="J-Gate-Brochure.pdf"',
        "Content-Length": stat.size.toString(),
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (err) {
    console.error("[brochure/download] Error serving brochure:", err);
    return new NextResponse("Error downloading brochure", { status: 500 });
  }
}
