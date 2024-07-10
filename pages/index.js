import { AchivSection } from "../components/AchivSection/AchivSection";
import { Services } from "../components/Services/Services";
import { CallBackSection } from "../components/CallBackSection/CallBackSection";
import { QuestionsSection } from "../components/QuestionsSection/QuestionsSection";
import { AboutClinicSection } from "../components/AboutClinicSection/AboutClinicSection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import Loader from "../components/Loader/Loader";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AchivSection />
      <Services />
      <CallBackSection />
      <QuestionsSection />
      <AboutClinicSection />
    </>
  );
}
