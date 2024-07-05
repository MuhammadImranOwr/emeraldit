import Image from "next/image";


export function AboutHeroSection() {
  return (
    <section className="relative   content-center mt-10 lg:py-40  sm:py-20 ">
      <div className="container px-8 sm:px-20 flex h-full items-center flex-wrap  justify-center md:justify-between gap-4 lg:flex-nowrap">
        <div className="lg:pe-28 space-y-8  text-center md:text-left md:pe-40 ">
          <h1 className="text-4xl text-center md:text-left text-custom-heading-500 font-bold  md:text-5xl lg:text-6xl">
          We Deliver 
            <span className="text-custom-emerald font-bold">Industry-Specific</span>  IT SOLUTIONS  
          </h1>

          <p className="font-dmSans text-custome-paragraph md:text-xl text-center md:text-left  ">
          As a leading IT solution provider, Emerald IT will assess your technology needs and deliver professional IT services in Australia. From basic support to complex IT needs, our expertise ensures bespoke IT solutions for your business. Let us show you how!
          </p>
        
        </div>

        <div className="">
          <Image src={"/intro-image.png"} alt="" width={800} height={720} />
        </div>
      </div>
    </section>
  );
}
