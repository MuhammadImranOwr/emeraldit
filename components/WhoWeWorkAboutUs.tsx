import { MdOutlineEngineering } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { RiArrowUpDownLine } from "react-icons/ri";

import { GiSatelliteCommunication } from "react-icons/gi";


const WhoWeWorkAboutUs = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="text-center  mx-auto space-y-8 lg:px-32 sm:px-0 gap-5">
            <h2 className="text-4xl text-custom-heading-500 font-bold  md:text-4xl lg:text-5xl ">
              How We Work
            </h2>
            <p className="font-dmSans text-custome-paragraph ">
              At our core, collaboration drives us. We prioritise clear
              communication, innovative thinking, and a client-focused approach
              to deliver tailored solutions that meet your unique needs. Let's
              succeed together.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid w-full grid-cols-1 bg-custom-emerald   sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-5 bg-transparent lg:grid-cols-4 pt-10">
            <div className="space-y-3 p-4 text-center">
              <div className="iconbox flex items-center justify-center border-2 border-custom-emerald  p-5 rounded-full w-16 h-16 m-auto text-custome-paragraph"> <GiSatelliteCommunication size={40} /></div>
              <h4 className="text-custom-heading-500 font-bold text-3xl ">
                Transparent Communication
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
                We ensure transparent communication, fostering clear
                understanding with clients.
              </p>
            </div>

            <div className="space-y-3 p-4 text-center">
              <div className="iconbox flex items-center justify-center border-2 border-custom-emerald  p-5 rounded-full w-16 h-16 m-auto text-custome-paragraph"> <MdOutlineEngineering  size={40}/></div>
              <h4 className="text-custom-heading-500 font-bold text-3xl  ">
                Qualified Engineers
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
                Our team holds Microsoft and Meraki certifications, showcasing
                our commitment to tech excellence.
              </p>
            </div>
            <div className="space-y-3 p-4 text-center">
              <div className="iconbox flex items-center justify-center border-2 border-custom-emerald  p-5 rounded-full w-16 h-16 m-auto text-custome-paragraph"> <RiTeamFill size={40} />
              </div>
              <h4 className="text-custom-heading-500 font-bold text-3xl  ">
                Certified Team{" "}
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
                Our school technicians have Orange Card Server Admin
                accreditation and Blue Cards, ensuring safe service.
              </p>
            </div>

            <div className="space-y-3 p-4 text-center">
              <div className="iconbox flex items-center justify-center border-2 border-custom-emerald  p-5 rounded-full w-16 h-16 m-auto text-custome-paragraph">
                
              <RiArrowUpDownLine  size={40} />
              
               </div>
              <h4 className="text-custom-heading-500 font-bold  text-3xl  ">
                Going Above and Beyond{" "}
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
                We provide daily reports and maintain open communication,
                ensuring top-notch IT support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeWorkAboutUs;
