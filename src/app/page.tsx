import Hero from "./components/hero";
import Section from "./components/section/page";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <main className="relative bg-black-100 overflow-hidden flex flex-col justify-center items-center mx-auto sm:px-10 px-5 min-h-screen">
      {/* <div className="w-full"> */}
        <Navigation />
        <Hero />
        <Section />
      {/* </div> */}
    </main>
  );
}
