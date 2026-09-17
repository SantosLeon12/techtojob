import Container from "@/components/ui/Container";
import messages from "@/messages/es.json";

export default function Home() {
  return (
    <main>
      <section aria-labelledby="foundation-title" className="py-16 sm:py-24">
        <Container>
          <h1 id="foundation-title" className="text-3xl font-bold sm:text-4xl">
            {messages.foundation.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            {messages.foundation.description}
          </p>
        </Container>
      </section>
    </main>
  );
}
