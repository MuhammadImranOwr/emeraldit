import Image from "next/image";
import CtaButton from "@/components/CtaButton";

export function AboutHeroSection() {
  return (
    <section className="relative   content-center mt-10 lg:py-40  sm:py-20 ">
      <div className="container px-8 sm:px-20 flex h-full items-center flex-wrap  justify-center md:justify-between gap-4 lg:flex-nowrap">
        <div className="lg:w-3/5 sm:w-full lg:pe-28 space-y-8  text-center md:text-left md:pe-40 ">
          <h1 className="text-4xl text-center md:text-left text-custom-heading-500 font-bold  md:text-5xl lg:text-6xl">
          About Us
           
          </h1>

          <p className="font-dmSans text-custome-paragraph md:text-xl text-center md:text-left  ">
          We are empowering businesses to reach their full potential through innovative technology. Our focus is on you, not just technology. Your trusted IT services and solutions provider for businesses across Australia, dedicated to integrating and embedding technology to support your business goals. 
          </p>
          <CtaButton href="/contact" title="Contact Us" />
        </div>

        <div className="lg:w-2/5 sm:w-full">
          <Image src={"/aboutusbanner.png"} alt="" width={800} height={720} />
        </div>
      </div>
    </section>
  );
}
