import ServiceLinks from "@/components/ServiceLinks";
import { ServicesHeroSection } from "../_components/ServicesHeroSection";
import Image from "next/image";
import WoWeWork from "@/components/wowework";
const Services = () => {
  return (
    <>
      <section>
        <ServicesHeroSection />
      </section>

      <section>
        <ServiceLinks />
      </section>

      <section >
      <div className="container px-8 sm:p-20 flex h-full items-center flex-wrap gap-8 md:flex-wrap lg:flex-nowrap ">
          
            <div className=" sm:w-full md:w-full lg:w-1/2">
              <Image
                src={"/servicesimage.png"}
                alt=""
                width={600}
                height={500}
              />
            </div>
            <div className="sm:w-full md:w-full lg:w-1/2">
              <h2 className="text-5xl text-custom-heading-500 font-bold sm:text-3xl md:text-4xl">
                Delivering IT solutions that makes your event successful
              </h2>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus,
              </p>
            </div>
         
        </div>
      </section>


        <WoWeWork />
    


    </>
  );
};
export default Services;
