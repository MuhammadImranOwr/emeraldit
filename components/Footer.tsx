import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import CtaButton from "./CtaButton";

interface NavItemProps {
  href: string;
  title: string;
}

const socialLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/profile.php?id=61559667573420",
  },
  { icon: <FaInstagram />, href: "https://www.instagram.com/big0.dev/" },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/channel/UCdFdgYjRGC53PPmE2XTlPhw",
  },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/big0-dev/" },
];

export function Footer() {
  const staticNavbar: NavItemProps[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/" },
    { title: "What we think", href: "/" },
    { title: "Services", href: "/" },
    { title: "Contact Us", href: "/" },
    { title: "Careers", href: "/" },
  ];

  const servicesNavbar: NavItemProps[] = [
    { title: "Market Research", href: "/" },
    { title: "Market Analysis", href: "/" },
    { title: "SEO Consultancy", href: "/" },
    { title: "Page Ranking", href: "/" },
    { title: "SMM", href: "/" },
  ];

  const featuresNavbar: NavItemProps[] = [
    { title: "Brand  Strategy", href: "/" },
    { title: "Audience Analytics", href: "/" },
    { title: "Copywriting", href: "/" },
    { title: "Team Training", href: "/" },
    { title: "Email Marketing", href: "/" },
  ];

  return (
    <>
      <div className="container w-3/5 mt-8 p-8  bg-custome-services shadow-3xl ">
        <div className="flex justify-items-center  h-full items-center sm:justify-center flex-wrap  md:justify-between gap-12  ">
          <h2 className="text-4xl  text-custom-heading-500 font-semibold sm:text-3xl text-center md:text-4xl lg:text-left"> Talk to Emerald IT Experts Today </h2>
          <CtaButton
            href="/"
            title="Let’s Chat"
            className="bg-custom-dark-200 text-white"
          />
        </div>
      </div>
      <footer className="bg-custom-heading-500 text-white pt-20 px-20 space-y-2 -mt-12 absolute movedown sm:space-y-8">
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8">
          {/* Logo with text */}
          <div className="space-y-4 xl:justify-self-center">
          <Image src={"/footerlogo.png"} alt="" width={800} height={720} />
            <p className="text-white/85">
            We specialise in providing IT services to small and medium enterprises, educational institutions, government agencies, and businesses with 10 to 1000 employees in need of reliable IT support.
            </p>
            <ul className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-white hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
                >
                  <Link href={link.href} target="_blank">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*  Static Navbar  */}
          <div className="space-y-4 xl:justify-self-center">
            <h4 className="font-jakarta font-bold text-white text-lg">
              Our Company
            </h4>

            <ul className="space-y-4">
              {staticNavbar.map((item, index) => (
                <li
                  key={index}
                  className="font-lexend text-white/70 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/*  Services Navbar  */}
          <div className="space-y-4 xl:justify-self-center">
            <h4 className="font-jakarta font-bold text-white text-lg">
              Services
            </h4>

            <ul className="space-y-4">
              {servicesNavbar.map((item, index) => (
                <li
                  key={index}
                  className="font-lexend text-white/70 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/*  Features Navbar  */}
          <div className="space-y-4 xl:justify-self-center">
            <h4 className="font-jakarta font-bold text-white text-lg">
              Features
            </h4>

            <ul className="space-y-4">
              {featuresNavbar.map((item, index) => (
                <li
                  key={index}
                  className="font-lexend text-white/70 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 xl:justify-self-center">
            <h4 className="font-jakarta font-bold text-white text-lg">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-center gap-4 font-lexend text-white">
                <FaPhone size={20} />
                <Link
                  href="tel:+921231231234"
                  className="text-white/80 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
                >
                  +92-123-123-1234
                </Link>
              </li>
              <li className="flex items-center gap-4 font-lexend text-white">
                <FaLocationDot size={20} />
                <Link
                  href="https://maps.app.goo.gl/"
                  target="_blank"
                  className="text-white/80 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
                >
                  2508 TX 78746 UK
                </Link>
              </li>
              <li className="flex items-center gap-4 font-lexend text-white">
                <MdOutlineMail size={20} />
                <Link
                  href="mailto:owrdigital@gmail.com"
                  className="text-white/80 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
                >
                  owrdigital@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full text-center py-2 bg-custom-emerald">
          <h6 className="text-custom-dark capitalize">
            All Copyrights are reserved
          </h6>
        </div>
      </footer>
    </>
  );
}
