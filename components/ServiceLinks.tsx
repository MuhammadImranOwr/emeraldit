import React, { ReactElement } from "react";

import { FaNetworkWired } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { GrCloudSoftware } from "react-icons/gr";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import CtaButton from "./CtaButton";

export interface ServiceLinkTypes {
  text: string;
  href: string;
  intro: string;
  icon: ReactElement;
}

const ServiceLinks = () => {
  const serviceLinkItems: ServiceLinkTypes[] = [
    {
      text: "Network Infrastructure",
      intro:
        "Our Network Infrastructure services include cabling, routers, VLANs, access points, and switches, as well as remote hardware management, hardware purchasing, and network software like firewalls, anti-malware, and VPN. ",
      href: "/",
      icon: <FaNetworkWired size={35} />,
    },
    {
      text: "Equipment Management",
      intro:
        "Our Equipment Management services cover purchasing, logistics, updates, upgrades, repairs, warranties, and cleaning to ensure your devices are always in top condition.",
      href: "/",
      icon: <GiAutoRepair size={35} />,
    },
    {
      text: "Software Solutions",
      intro:
        "Our Software Solutions services include setting up, problem-solving, and managing licenses. We ensure software runs smoothly, efficiently, and remains compliant so you can focus on core business operations.",
      href: "/",
      icon: <GrCloudSoftware size={35} />,
    },
    {
      text: "Cybersecurity",
      intro:
        "Our comprehensive managed cybersecurity services protect your digital assets and reduce risk. Services include firewall management, intrusion detection, Managed Detection Response, antivirus, and backup solutions.",
      href: "/",
      icon: <GiCyberEye size={35} />,
    },
    {
      text: "Cloud Services",
      intro:
        "Our reliable cloud solutions offer private, public, and hybrid options. Our migration and support services ensure a seamless transition to the cloud, optimising your business operations and enhancing flexibility.",
      href: "/",
      icon: <FaCloudDownloadAlt size={35} />,
    },
    {
      text: "Website Solutions",
      intro:
        "Our Website Solutions include creating tailored sites, setting up and customising WIX, integrating plugins for added functionality, and developing effective strategies to boost your site's visibility on search engines.",
      href: "/",
      icon: <CgWebsite size={35} />,
    },
  ];

  return (
    <section className="md:px-8 py-14 sm:px-4  space-y-8 bg-custome-services">
      <div className="container px-8 py-4">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-5xl text-custom-heading-500 font-bold">
          IT Services Australia
          </h2>
          <p className="pt-5 pb-14 ">
          Emerald IT offers comprehensive IT solutions to boost business success in Australia. From network infrastructure and equipment management to software, website solutions, and payment gateways, we provide the support you need for optimal IT performance. We're here to help you maximise your IT investments.
          </p>
        </div>

        <div className="grid w-full grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 bg-transparent">
          {serviceLinkItems.map((item) => (
            <div
              key={item.text}
              className="flex flex-wrap whitespace-nowrap px-5 py-5 text-sm text-secondary font-medium ring-offset-background focus-visible:outline-none hover:text-custom-emerald  disabled:pointer-events-none disabled:opacity-50 items-center gap-2 border border-white bg-custome-white shadow-3xl text-wrap h-full rounded-md"
            >
              <div className="flex gap-5 px-7 py-7 w-full items-center">
                <div className="text-custom-emerald"> {item.icon} </div>
                <h6 className="text-custom-heading-500 font-bold text-3xl ">  {item.text} </h6>
                
              </div>
              <div className=" px-7 pb-7">
                <p className="font-dmSans text-custome-paragraph text-base pb-7 ">
                  {item.intro}
                </p>

                <CtaButton
                  href="/"
                  title="Discover More"
                  className="bg-custom-dark-200 text-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceLinks;
