import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["ru", "kk", "en"],

  // Used when no locale matches
  defaultLocale: "kk",
});

export const config = {
  // Match only internationalized path names
  matcher: ["/", "/(ru|kk|en)/:path*"],
};
