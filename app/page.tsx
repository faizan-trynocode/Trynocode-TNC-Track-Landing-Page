import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AIInsights from "./components/AIInsights";
import DetailedFeatures from "./components/DetailedFeatures";
import FAQ from "./components/FAQ";
import ScheduleDemo from "./components/ScheduleDemo";
import Footer from "./components/Footer";
import BuiltForYourTeam from "./components/BuiltForYourTeam";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AIInsights />
        <DetailedFeatures />
        <BuiltForYourTeam />
        <FAQ />
        <ScheduleDemo />
      </main>
      <Footer />
    </>
  );
}
