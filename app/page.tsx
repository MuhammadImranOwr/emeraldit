import Image from "next/image";
import { HeroSection } from "@/app/_components/HeroSection";
import ServiceLinks from "@/components/ServiceLinks";
import WhyUsSection from "./_components/WhyUsSection";
import CtaButton from "@/components/CtaButton";
import TestimonailSlider from "@/components/TestimonailSlider";
import { MdCorporateFare } from "react-icons/md";
import { FaLandmark } from "react-icons/fa";
import { BiBrush } from "react-icons/bi";
import { PiMicrophoneStageFill } from "react-icons/pi";

import { PiStudentBold } from "react-icons/pi";

import TechIndustrys from "@/components/TechIndustry";

import TestimonailSliderTwo from "@/components/TestimonailSlidersTwo";

import FreeConsultation from "@/components/FreeConsultation";

const Home = async () => {
  return (
    <main className="h-full">
      <HeroSection />
      <ServiceLinks />

      <section className="container px-8 ">
      <FreeConsultation />
      </section>

      

      
      {/* <WhyUsSection /> */}

      <section>
        <div className="container py-14 content-center w-full h-72 sm:h-72 md:h-80 lg:h-96 xl:h-104 bg-custom">
          <div className="space-y-4 text-center z-20">
            <h2 className="text-white text-4xl max-w-3xl font-semibold text-center mx-auto">
              Ready to Eliminate IT Problems?
            </h2>
            <p className="text-gray-50 font-lexend text-center max-w-3xl mx-auto">
              From professional IT services and cybersecurity to hardware
              procurement and beyond, Emerald IT has you covered. Partner with
              us to turn your IT challenges into opportunities for success.
            </p>
            <CtaButton href="/contact" title="Get Expert IT Support Today" />
          </div>
        </div>
      </section>
      <section className="container px-8 ">
        <div className="py-12 ">
          <div className="text-center  mx-auto space-y-8 lg:px-12 sm:px-0 ">
            <h2 className="text-4xl text-custom-heading-500 font-bold  md:text-4xl lg:text-5xl ">
              Fields We Serve: Tailored Solutions for Various Industries
            </h2>
            <p className="font-dmSans text-custome-paragraph ">
            Tailored solutions for diverse industries, including finance, healthcare, education, retail, and more. As a leading IT service provider, Emerald IT provides customised professional IT services in Melbourne, Sydney and beyond to meet the unique needs of each sector.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 bg-custom-emerald   sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 bg-transparent lg:grid-cols-5 pt-10">
            <div className="flex  whitespace-nowrap px-5 py-5 text-sm text-secondary font-medium ring-offset-background hover:bg-custom-heading-500 focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50 items-center gap-2 border border-white bg-custom-emerald shadow-3xl text-wrap h-full rounded-md">
              <div className="text-custom-white">
                {" "}
                <PiStudentBold size={30} />
              </div>
              <h6 className="text-custom-white font-bold text-2xl ">
                Education Sector
              </h6>
            </div>

            <div className="flex  whitespace-nowrap px-5 py-5 text-sm text-secondary font-medium ring-offset-background hover:bg-custom-heading-500 focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 items-center gap-2 border border-white bg-custom-emerald shadow-3xl text-wrap h-full rounded-md">
              <div className="text-custome-white">
                <PiMicrophoneStageFill size={30} />
              </div>
              <h6 className="text-custome-white font-bold text-2xl ">
                Entertainment Events
              </h6>
            </div>

            <div className="flex  whitespace-nowrap px-5 py-5 text-sm text-secondary font-medium ring-offset-background hover:bg-custom-heading-500 focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50 items-center gap-2 border border-white bg-custom-emerald shadow-3xl text-wrap h-full rounded-md">
              <div className="text-custome-white">
                <MdCorporateFare size={30} />{" "}
              </div>
              <h6 className="text-custome-white font-bold text-2xl ">
                Corporate Enterprises
              </h6>
            </div>

            <div className="flex whitespace-nowrap px-5 py-5 text-sm text-secondary font-medium ring-offset-background hover:bg-custom-heading-500 focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50 items-center gap-2 border border-white bg-custom-emerald shadow-3xl text-wrap h-full rounded-md">
              <div className="text-custome-white">
                {" "}
                <BiBrush size={30} />
              </div>
              <h6 className="text-custome-white font-bold text-2xl ">
                SMBs and SMEs
              </h6>
            </div>

            <div className="flex  whitespace-nowrap px-5 py-5 text-sm text-secondary font-medium ring-offset-background hover:bg-custom-heading-500 focus-visible:outline-none   disabled:pointer-events-none disabled:opacity-50 items-center gap-2 border border-white bg-custom-emerald shadow-3xl text-wrap h-full rounded-md">
              <div className="text-custome-white">
                {" "}
                <FaLandmark size={30} />
              </div>
              <h6 className="text-custom-white font-bold text-2xl ">
                Government Agencies
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 content-center space-y-8">
        <h2 className="text-center text-4xl text-custom-heading-500 font-bold md:text-4xl lg:text-5xl">Our Trusted Clients</h2>

        <TestimonailSlider />
        <TestimonailSliderTwo />
      </section>

      <section>
        <TechIndustrys />
      </section>
    </main>
  );
};

export default Home;
