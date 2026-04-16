import { promises as fs } from "node:fs";
import path from "node:path";

const PROJECT_ROOT = process.cwd();

export async function GET(request: Request) {
  const url = new URL(request.url);
  let file = url.searchParams.get("file");

  if (!file) {
    return new Response("Missing file parameter", { status: 400 });
  }

  file = file.replace(/^\/+/, "");
  if (file.includes("..")) {
    return new Response("Invalid file path", { status: 400 });
  }

  const resolvedPath = path.resolve(PROJECT_ROOT, file);
  if (!resolvedPath.startsWith(path.resolve(PROJECT_ROOT))) {
    return new Response("Forbidden", { status: 403 });
  }

  try {
    const contents = await fs.readFile(resolvedPath, "utf8");
    return new Response(contents, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch {
    return new Response("File not found", { status: 404 });
  }
}