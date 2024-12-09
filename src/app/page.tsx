import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header></Header>

      <main className="max-w-screen-xl m-auto ">
        <Hero></Hero>
      </main>
    </>
  );
}
