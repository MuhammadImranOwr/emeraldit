import Image from "next/image";
import { BsCheck2Circle } from "react-icons/bs";

const AboutDeliveringITSolution = () => {
  return (
    <>
      <section className="pb-32 md:px-8 py-14 sm:px-4  space-y-8 bg-custome-services">
        <div className="container px-8 sm:px-20 flex h-full items-center flex-wrap justify-center md:justify-between gap-14 lg:flex-nowrap">
          <div className="lg:w-2/5 sm:w-full space-y-5">
            <Image src={"/emeraiddifference.png"} alt="" width={800} height={720} />
          </div>
          <div className="lg:w-3/5 sm:w-full space-y-8  text-center md:text-left ">
            <h2 className="text-3xl text-custom-heading-500   font-bold">
            The Emerald IT Difference
            </h2>

            <p className="font-dmSans text-custome-paragraph md:text-xl text-center md:text-left  ">
            Our journey began with a passion for technology and a commitment to delivering bespoke IT solutions for SMBs. Driven by innovation, we transformed IT services across Queensland, earning trust nationwide from Brisbane to Melbourne. We cater to SMBs, SMEs, large enterprises, government entities, and educational institutions. At Emerald IT, we understand your business and IT needs, providing tailored solutions to help you perform at your best with local, expert support. Trust us to protect your digital assets and eliminate risks effectively. 
            </p>

            <div className="flex justify-between">
              <div className="w-1/2 ">
                <ul className="space-y-4 ">
                  
                 
                  <li className="flex items-center gap-1 text-custom-dark-200 font-bold	 ">
                    {" "}
                    <span>
                      {" "}
                      <BsCheck2Circle color="hsla(155, 100%, 33%, 1)"  size={20}/>
                    </span>
                    Network Infrastructure 
                  </li>
                  <li className="flex items-center gap-1 text-custom-dark-200 font-bold	 ">
                    {" "}
                    <span>
                      {" "}
                      <BsCheck2Circle color="hsla(155, 100%, 33%, 1)" size={20} />
                    </span>
                    Cloud Services 
                  </li>
                  <li className="flex items-center gap-1 text-custom-dark-200 font-bold	 ">
                    {" "}
                    <span>
                      {" "}
                      <BsCheck2Circle color="hsla(155, 100%, 33%, 1)"  size={20}  />
                    </span>
                    Cyber Security Services 
                  </li>
                  <li className="flex items-center gap-1 text-custom-dark-200 font-bold	 ">
                    {" "}
                    <span>
                      {" "}
                      <BsCheck2Circle color="hsla(155, 100%, 33%, 1)" size={20} />
                    </span>
                    Equipment Management 
                  </li>
                </ul>
              </div>
              <div className="w-1/2" >
              <ul className=" space-y-4">
                <li className="flex items-center  gap-1 text-custom-dark-200 font-bold ">
                  {" "}
                  <span>
                    {" "}
                    <BsCheck2Circle color="hsla(155, 100%, 33%, 1)" size={20} />{" "}
                  </span>
                  Software Solutions 
                </li>
                <li className="flex items-center gap-1 text-custom-dark-200 font-bold ">
                  {" "}
                  <span>
                    {" "}
                    <BsCheck2Circle color="hsla(155, 100%, 33%, 1)" size={20} />
                  </span>
                  Website Solutions 
                </li>
                <li className="flex items-center gap-1 text-custom-dark-200 font-bold  ">
                  {" "}
                  <span>
                    {" "}
                    <BsCheck2Circle color="hsla(155, 100%, 33%, 1)" size={20}  />
                  </span>
                  Payment Gateway 
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
