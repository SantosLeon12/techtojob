import Image from "next/image";

const sources = {
  black: "/icons/discord-black.svg",
  white: "/icons/discord-white.svg",
} as const;

export default function DiscordMark({ tone, className }: { tone: keyof typeof sources; className?: string }) {
  return <Image src={sources[tone]} alt="" aria-hidden="true" width={20} height={15} className={className} />;
}
