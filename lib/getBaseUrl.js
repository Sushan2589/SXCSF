export function getBaseUrl() {
     if (typeof window !== "undefined") {
    // Running on the client — use relative path
    return "";
  }

  // On the server:
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL; // e.g. https://sxcsf.vercel.app
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  return "http://localhost:3000"; // fallback for local dev
}
