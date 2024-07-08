import Image from "next/image";
import CtaButton from "@/components/CtaButton";

export function EquipmentBanner() {
  return (
    <section className="relative   content-center mt-10 lg:py-20  sm:py-20 ">
      <div className="container px-8 sm:px-20 flex h-full items-center flex-wrap  justify-center md:justify-between gap-4 lg:flex-nowrap">
        <div className="lg:w-3/5 sm:w-full lg:pe-28 space-y-8  text-center md:text-left md:pe-40 ">
          <h1 className="text-4xl text-center md:text-left text-custom-heading-500 font-bold  md:text-5xl lg:text-6xl">
          Streamlined Equipment <span className="text-custom-emerald ">  Management services 
            </span> with Emerald-IT 
           
          </h1>

          <p className="font-dmSans text-custome-paragraph md:text-xl text-center md:text-left  ">
          Emerald-IT offers complete equipment management service, simplifying everything from purchasing and logistics to updates, repairs, warranties, and cleaning. We ensure your IT assets are always in top condition, reducing costs and improving security and performance. 
          </p>
          <CtaButton href="/contact" title="Talk to Our Expert " />
        </div>

        <div className="lg:w-2/5 sm:w-full">
          <Image src={"/aboutusbanner.png"} alt="" width={800} height={720} />
        </div>
      </div>
    </section>
  );
}
