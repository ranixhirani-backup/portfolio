// Using a lightweight fallback for local development. The original project
// imported `Hina_Mincho` from `next/font/google` which triggers Turbopack
// to fetch remote font files and can fail behind firewalls/proxies. For a
// fast local dev experience we export a simple object with the same
// `variable` property so layout usage continues to work.

export const ghibliFont = {
  variable: "--font-ghibli",
};
