import { Navbar } from "@/app/components/layout/navbar";
import { Hero } from "@/app/components/features/home";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
