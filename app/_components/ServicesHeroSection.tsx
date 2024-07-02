import Image from "next/image";


export function ServicesHeroSection() {
  return (
    <section className="relative   content-center mt-10 py-40  sm:py-20">
      <div className="container px-8 sm:px-20 flex h-full items-center flex-wrap md:flex  lg:flex-nowrap justify-between gap-4">
        <div className="lg:pe-28 space-y-8  text-center md:text-left md:pe-0 pt-20 ">
          <h1 className="text-6xl text-center md:text-left text-custom-heading-500 font-bold">
            <span className="text-custom-emerald font-bold"> Perfect Solution </span> For Your Business Goals
          </h1>
         
          <p className="font-dmSans text-custome-paragraph md:text-xl text-center md:text-left  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        
        </div>

        <div className="">
          <Image src={"/intro-image.png"} alt="" width={800} height={720} />
        </div>
      </div>
    </section>
  );
}
