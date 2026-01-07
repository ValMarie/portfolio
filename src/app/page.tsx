import Hero from "./components/hero";
import Section from "./components/section/page";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 overflow-hidden flex flex-col justify-center items-center mx-auto p-5 min-h-screen">
       <Navigation />
      <div className="w-full">
       
        <Hero />
        <Section />
        <Footer />
      </div>
    </main>
  );
}
