import { readFile } from "node:fs/promises";
import { join } from "node:path";

const fileName = "Currículo profissional - Lorenzo Alberto.pdf";
const encodedFileName = encodeURIComponent(fileName);

export async function GET() {
    const filePath = join(process.cwd(), "public", "files", "curriculo.pdf");
    const file = await readFile(filePath);

    return new Response(file, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="Curriculo profissional - Lorenzo Alberto.pdf"; filename*=UTF-8''${encodedFileName}`,
        },
    });
}
