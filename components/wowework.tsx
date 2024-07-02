import React, { ReactElement } from "react";
import { LuDatabaseBackup } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { TbCloudDataConnection } from "react-icons/tb";
import { FaBuildingShield } from "react-icons/fa6";
import { BiLogoGraphql } from "react-icons/bi";
export interface WoWeWorkLinkTypes {
  icons: ReactElement;
  heading: string;
  intro: string;
  hreficon: ReactElement;
}
const WoWeWork = () => {
  const woweworkLinkItems: WoWeWorkLinkTypes[] = [
    {
      icons: <LuDatabaseBackup size={"50"} />,
      heading: "Data Center",
      intro:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. ",
      hreficon: <FaArrowRight size={30} />,
    },
    {

      icons: <TbCloudDataConnection size={"50"} />,
      heading: "Cloud Services",
      intro:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. ",
      hreficon: <FaArrowRight size={30} />,
    },
    {
      icons: <LuDatabaseBackup size={"50"} />,
      heading: "IT Management",
      intro:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. ",
      hreficon: <FaArrowRight size={30} />,
    },
    {

      icons: <FaBuildingShield size={"50"} />,
      heading: "Cyber Security",
      intro:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. ",
      hreficon: <FaArrowRight size={30} />,
    },
    {
      icons: <LuDatabaseBackup size={"50"} />,
      heading: "IT Consultancy",
      intro:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. ",
      hreficon: <FaArrowRight size={30} />,
    },
    {
        icons: <BiLogoGraphql size={"50"} />,
        heading: "Networking",
        intro:
          "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. ",
        hreficon: <FaArrowRight size={30} />,
      },
  ];
  return (
    <>
      <section>
        <div className="container p-8">
          <div className="wrapper">
            <div className="para">
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
              </p>{" "}
            </div>

            {woweworkLinkItems.map((item, index) => (
              <div className="box " key={index} >
            
                {item.icons}
                
                <h3 className="text-custom-emerald text-4xl font-bold py-4 ">
                  {item.heading}
                </h3>
                <p className="pb-5"> {item.intro} </p>
                <a href="#" className=" text-custom-emerald ">
                  {" "}
                  {item.hreficon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WoWeWork;
