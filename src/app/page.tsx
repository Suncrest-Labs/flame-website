import Banner from "./components/Banner";
import Community from "./components/community";
import Credibility from "./components/credibility";
import Demo from "./components/demo";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import WhyFlame from "./components/whyflame";
import Reward from "./components/reward";
import Work from "./components/work";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/Images/HeroBackground.png')] px-[5%] pt-[8%] md:pt-[2%] bg-cover bg-no-repeat bg-center rounded-b-[4rem]">
        <Navbar />
        <Hero />
      </div>

      <Credibility />
      <WhyFlame />
      <Demo />
      <Work />
      <Reward />
      <Community />
      <FAQ />
      <Banner />
      <Footer />
    </>
  );
}
