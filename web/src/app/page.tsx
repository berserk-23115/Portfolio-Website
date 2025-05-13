import HeroCta from "../../components/hero-cta";
import MainCta from "../../components/main-cta";
import AboutCta from "../../components/about-cta";
export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      <MainCta />
      <HeroCta />
      <AboutCta />
    </div>
    </>
  );
}
