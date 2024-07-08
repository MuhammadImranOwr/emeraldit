import AboutDeliveringITSolution from "@/components/AboutDeliveringItSolution";
import { AboutHeroSection } from "@/components/AboutHeroSection";
import AboutUsCTA from "@/components/AboutUsCTA";
import FreeConsultation from "@/components/FreeConsultation";
import MeetTeam from "@/components/MeetTeam";
import OurMissionVision from "@/components/OurMissionVision";
import TestimonailSlider from "@/components/TestimonailSlider";
import WhoWeWorkAboutUs from "@/components/WhoWeWorkAboutUs";

const AboutUs = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutDeliveringITSolution />

      <OurMissionVision />
      <FreeConsultation />
      <WhoWeWorkAboutUs />
      <AboutUsCTA />

      <section className="py-14 gap-5">
      <div className="container">
          <div className="text-center mx-auto space-y-8 pb-8 lg:px-32 sm:px-0 gap-5">
            <h2 className="text-4xl text-custom-heading-500 font-bold md:text-4xl lg:text-5xl">
            Our Trusted Clients
            </h2>
            
          </div>
        </div>
        <TestimonailSlider />
        </section>
      
      <MeetTeam />
    </>
  );
};

export default AboutUs;
