import Link from "next/link";
import { Logo } from "@/components/Logo";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import Navbar, { NavItemTypes } from "./Navbar";
import Sidebar from "./Sidebar";
import { getSubServicePage } from "@/data/loaders";
import CtaButton from "@/components/CtaButton";
import { Button } from "./ui/button";
interface SocialIconProps {
  id: number;
  icon: JSX.Element;
  url: string;
}

interface ServiceItem {
  navtitle: string;
  servicetype: string;
  slug: string;
}

export async function Header() {
  // const serviceItems = await getSubServicePage();
  const navItems: NavItemTypes[] = [
    { title: "Home", href: "/", children: [] },
    { title: "Services", href: "/services", children: [] },
    { title: "About", href: "/about", children: [] },
    { title: "Who We Work With", href: "/insights", children: [] },
    { title: "Blogs", href: "/blogs", children: [] },
    { title: "Contact Us", href: "/contact", children: [] },
  ];

  // Append subservice pages to the navitems
  // serviceItems.data.forEach((item: ServiceItem) => {
  //   const href = `/services/${item.slug}`;
  //   navItems[3].children.push({
  //     title: item.navtitle,
  //     href: href,
  //     children: [],
  //   });
  // });

  return (
    <section className="">
      <header className="">
        <div className="relative z-50 hidden md:flex items-center flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-8 px-10 lg:px-20 py-4 md:py-1 bg-custom-heading-500">
          <Link
            href="tel:+921231231234"
            className="flex items-center gap-2 text-white hover:text-emerald-300 focus-within:text-emerald-300 transition-all duration-300"
          >
            <FaPhone size={20} />
            +92-123-123-1234
          </Link>
          <Link
            href="https://maps.app.goo.gl/"
            target="_blank"
            className="flex items-center text-center md:text-left gap-2 text-white hover:text-emerald-300 focus-within:text-emerald-300 transition-all duration-300"
          >
            <FaLocationDot size={20} />
            2508 TX 78746 UK
          </Link>

          <Link
            href="mailto:owrdigital@gmail.com"
            target="_blank"
            className="flex items-center text-center md:text-left gap-2 text-white hover:text-emerald-300 focus-within:text-emerald-300 transition-all duration-300"
          >
            <MdOutlineMail size={20} />
            owrdigital@gmail.com
          </Link>
        </div>
        <>
          <div className="fixed  top-0 z-40 flex items-center gap-4 justify-between px-10 lg:px-20 pt-10 pb-4 bg-white  w-full shadow-3xl  ">
            <Logo />
            <Navbar navItems={navItems} />
            <Sidebar navItems={navItems} />

            <Button className="text-1xl bg-custom-emerald text-center text-white font-bold px-7 hover:bg-custom-heading-500">
              Book Your Services
            </Button>
          </div>
        </>
      </header>
    </section>
  );
}
