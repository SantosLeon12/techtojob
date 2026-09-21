import { getMessages } from "next-intl/server";

export type SiteMessages = typeof import("@/messages/es.json");

export async function getSiteMessages(): Promise<SiteMessages> {
  return (await getMessages()) as SiteMessages;
}
