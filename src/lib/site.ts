import messages from "@/messages/es.json";

export const SITE_NAME = messages.foundation.title;
export const SITE_TITLE = messages.metadata.title;
export const SITE_DESCRIPTION = messages.metadata.description;

// TODO: Set NEXT_PUBLIC_SITE_URL to the final production domain before deployment.
const DEVELOPMENT_SITE_URL = "http://localhost:3000";
export const SITE_URL = new URL(
  "/",
  process.env.NEXT_PUBLIC_SITE_URL || DEVELOPMENT_SITE_URL,
).toString();
