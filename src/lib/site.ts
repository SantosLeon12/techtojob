export const SITE_NAME = "TechToJob";

// TODO: Set NEXT_PUBLIC_SITE_URL to the final production domain before deployment.
const DEVELOPMENT_SITE_URL = "http://localhost:3000";
export const SITE_URL = new URL(
  "/",
  process.env.NEXT_PUBLIC_SITE_URL || DEVELOPMENT_SITE_URL,
).toString();
