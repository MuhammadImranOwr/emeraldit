import Image from "next/image";
import { RiCornerDownRightFill } from "react-icons/ri";
const AboutDeliveringITSolution = () => {
  return (
    <>
      <section className="md:px-8 py-14 sm:px-4  space-y-8 bg-custome-services">
        <div className="container px-8 sm:px-20 flex h-full items-center flex-wrap  justify-center md:justify-between gap-4 lg:flex-nowrap">
          <div className="lg:w-4/12  w-full space-y-5">
            <Image src={"/intro-image.png"} alt="" width={800} height={720} />
          </div>
          <div className="lg:pe-28 space-y-8  text-center md:text-left md:pe-40  lg:w-4/6  w-full ">
            <h3 className="text-3xl text-custom-heading-500   font-bold">
              We Are Perfect IT Solutions For Your Business
            </h3>

            <p className="font-dmSans text-custome-paragraph md:text-xl text-center md:text-left  ">
              As a leading IT solution provider, Emerald IT will assess your
              technology needs and deliver professional IT services in
              Australia. From basic support to complex IT needs, our expertise
              ensures bespoke IT solutions for your business. Let us show you
              how!
            </p>

            <div className="flex">
              <div>
                <ul className=" space-y-4">
                  
                 
                  <li className="flex items-center">
                    {" "}
                    <span>
                      {" "}
                      <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
                    </span>
                    24/7 Support & assistance - Our team is here to assist you
                    anytime
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <span>
                      {" "}
                      <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
                    </span>
                    Quick Response - We've invested in top tools and talent for
                    responsive client support.
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <span>
                      {" "}
                      <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
                    </span>
                    We recruit top talent from AU, and NZ, offering structured
                    training and support.
                  </li>
                  <li className="flex items-center">
                    {" "}
                    <span>
                      {" "}
                      <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
                    </span>
                    No Risk - We mitigate technical risks with flexible terms
                    and guarantees.
                  </li>
                </ul>
              </div>
              <div>
              <ul className=" space-y-4">
                <li className="flex items-center pt-1">
                  {" "}
                  <span>
                    {" "}
                    <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />{" "}
                  </span>
                  Our tech teams are experienced in designing and supporting
                  full-spectrum solutions
                </li>
                <li className="flex items-center">
                  {" "}
                  <span>
                    {" "}
                    <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
                  </span>
                  Stay always online and connected with our 99.99% guaranteed
                  Uptime
                </li>
                <li className="flex items-center">
                  {" "}
                  <span>
                    {" "}
                    <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
                  </span>
                  24/7 Support & assistance - Our team is here to assist you
                  anytime
                </li>
                <li className="flex items-center">
                  {" "}
                  <span>
                    {" "}
                    <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
                  </span>
                  Quick Response - We've invested in top tools and talent for
                  responsive client support.
                </li>
                
              </ul>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDeliveringITSolution;
