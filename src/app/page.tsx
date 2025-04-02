import Credibility from "./components/credibility";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import WhyFlame from "./components/whyflame";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/Images/HeroBackground.png')] px-[5%] py-[2%] bg-cover bg-no-repeat bg-center h-screen rounded-b-[4rem]">
        <Navbar />
        <Hero />
      </div>

      <Credibility />
      <WhyFlame/>
    </>
  );
}
