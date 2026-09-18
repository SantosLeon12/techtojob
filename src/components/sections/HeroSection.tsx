import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import DiscordMark from "@/components/ui/DiscordMark";
import shimmer from "@/components/ui/DiscordShimmer.module.css";
import { DISCORD_URL } from "@/lib/constants";
import { getSiteMessages } from "@/i18n/messages";
import HeroNetwork from "./hero/HeroNetwork";

export default async function HeroSection() {
  const messages = await getSiteMessages();
  return (
    <section aria-labelledby="hero-title" className="overflow-clip bg-background">
      <Container className="grid items-center gap-7 pb-12 pt-16 sm:gap-10 sm:pb-14 sm:pt-20 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:gap-2 lg:pb-16 lg:pt-24 xl:pt-28">
        <div className="relative z-10 max-w-[44rem]">
          <p className="mb-7 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.19em] text-brand-dark">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-primary" />
            {messages.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="max-w-[12ch] text-[clamp(2.55rem,6vw,5.35rem)] font-bold leading-[1.09] tracking-[-0.065em] text-brand-dark">
            {messages.hero.title}
          </h1>
          <p className="mt-7 max-w-[36rem] text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {messages.hero.description}
          </p>
          <div className="mt-9 flex flex-col items-start gap-4">
            <a
              href={DISCORD_URL}
              className={`${shimmer.shimmer} group inline-flex min-h-13 max-w-full items-center justify-center gap-3 rounded-md bg-brand-dark px-5 py-3 text-center text-sm font-bold text-brand-white transition-transform duration-200 ease-out hover:-translate-y-px active:scale-[0.985] active:translate-y-0 motion-reduce:transform-none`}
            >
              <DiscordMark tone="white" className="shrink-0 transition-transform duration-200 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none" />
              {messages.hero.cta}
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transform-none" />
            </a>
            <p className="text-xs leading-5 text-muted">{messages.hero.microcopy}</p>
          </div>
        </div>
        <HeroNetwork />
      </Container>
    </section>
  );
}
