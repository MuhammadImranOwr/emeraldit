import { MdOutlineEngineering } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { RiArrowUpDownLine } from "react-icons/ri";

import { GiSatelliteCommunication } from "react-icons/gi";

const WhoWeWorkEquipment = () => {
  return (
    <>
      <section className="p-14">
        <div className="container">
          <div className="text-center  mx-auto space-y-8 lg:px-32 sm:px-0 gap-5">
            <h2 className="text-4xl text-custom-heading-500 font-bold  md:text-4xl lg:text-5xl ">
              How We Work
            </h2>
            <p className="font-dmSans text-custome-paragraph ">
              Our team collaborates closely with you to develop a customised
              equipment management strategy tailored to your business
              objectives. We then implement advanced tracking and management
              systems to ensure real-time visibility and control over your IT
              assets. Our proactive approach includes regular maintenance,
              updates, and audits to keep your equipment in optimal condition.
              Throughout the process, we provide comprehensive support and
              training to your staff, ensuring seamless integration and maximum
              efficiency.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="grid w-full grid-cols-1 bg-custom-emerald   sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 bg-transparent lg:grid-cols-3 pt-10">
            <div className="space-y-3 p-4 text-center">
              <div className="iconbox flex items-center justify-center border-2 border-custom-emerald  p-5 rounded-full w-16 h-16 m-auto text-custome-paragraph">
                {" "}
                <GiSatelliteCommunication size={40} />
              </div>
              <h4 className="text-custom-heading-500 font-bold text-3xl ">
                Assess IT Equipment Needs
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
                Evaluate and understand your organisation's specific IT
                equipment requirements, considering current and future needs.
              </p>
            </div>

            <div className="space-y-3 p-4 text-center">
              <div className="iconbox flex items-center justify-center border-2 border-custom-emerald  p-5 rounded-full w-16 h-16 m-auto text-custome-paragraph">
                {" "}
                <MdOutlineEngineering size={40} />
              </div>
              <h4 className="text-custom-heading-500 font-bold text-3xl  ">
                Develop a Customised Management Plan
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
                Create a tailored equipment management strategy that aligns with
                your business goals and operational needs.
              </p>
            </div>
            <div className="space-y-3 p-4 text-center">
              <div className="iconbox flex items-center justify-center border-2 border-custom-emerald  p-5 rounded-full w-16 h-16 m-auto text-custome-paragraph">
                {" "}
                <RiTeamFill size={40} />
              </div>
              <h4 className="text-custom-heading-500 font-bold text-3xl  ">
                Implement Inventory Tracking and Management
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
                Deploy advanced tracking systems to monitor all IT assets'
                location, usage, and condition in real-time.
              </p>
            </div>

            <div className="space-y-3 p-4 text-center">
              <div className="iconbox flex items-center justify-center border-2 border-custom-emerald  p-5 rounded-full w-16 h-16 m-auto text-custome-paragraph">
                <RiArrowUpDownLine size={40} />
              </div>
              <h4 className="text-custom-heading-500 font-bold  text-3xl  ">
                Perform Regular Maintenance and Upgrades
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
              Schedule and conduct routine maintenance, updates, and upgrades to keep your equipment in optimal working condition. 
              </p>
            </div>

            <div className="space-y-3 p-4 text-center">
              <div className="iconbox flex items-center justify-center border-2 border-custom-emerald  p-5 rounded-full w-16 h-16 m-auto text-custome-paragraph">
                <RiArrowUpDownLine size={40} />
              </div>
              <h4 className="text-custom-heading-500 font-bold  text-3xl  ">
              Conduct Periodic Audits and Reporting 
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
              Regularly audit IT assets to ensure compliance with policies and regulations and provide detailed reports to support informed decision-making. 
              </p>
            </div>


            <div className="space-y-3 p-4 text-center">
              <div className="iconbox flex items-center justify-center border-2 border-custom-emerald  p-5 rounded-full w-16 h-16 m-auto text-custome-paragraph">
                <RiArrowUpDownLine size={40} />
              </div>
              <h4 className="text-custom-heading-500 font-bold  text-3xl  ">
              Provide Ongoing Support and Training 
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
              Offer continuous support and training to your staff to ensure proper use and management of IT equipment, enhancing overall efficiency and productivity. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeWorkEquipment;
