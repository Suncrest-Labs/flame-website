import Banner from "./components/Banner";
import Community from "./components/community";
import Credibility from "./components/credibility";
import Demo from "./components/demo";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import WhyFlame from "./components/whyflame";
import Work from "./components/work";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/Images/HeroBackground.png')] px-[5%] py-[2%] bg-cover bg-no-repeat bg-center h-screen rounded-b-[4rem]">
        <Navbar />
        <Hero />
      </div>

      <Credibility />
      <WhyFlame />
      <Demo />
      <Work />
      <Community />
      <FAQ />
      <Banner />
      <Footer/>
    </>
  );
}
