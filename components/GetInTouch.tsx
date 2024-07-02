import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import GetInTouchForm from "./GetInTouchForm";
import Link from "next/link";

import Image from "next/image";

import Map from "./map";
import { MapProvider } from "@/providers/map-provider";

const GetInTouch = () => {
  return (
    <>
      <section>
        <div className="container px-8 sm:px-20 flex h-full items-center flex-wrap md:flex-nowrap justify-center md:justify-between gap-4">
          <div className="lg:pe-28 space-y-8  text-center md:text-left md:pe-40 ">
            <h1 className="text-6xl text-center md:text-left text-custom-heading-500 font-bold">
              <span className="text-custom-emerald font-bold">Connect</span> Get
              In Touch
            </h1>

            <p className="font-dmSans text-custome-paragraph md:text-xl text-center md:text-left  ">
              We&apos;re here to answer any questions you may have. Feel free to
              reach out to us.
            </p>
          </div>

          <div className="">
            <Image src={"/intro-image.png"} alt="" width={800} height={720} />
          </div>
        </div>
      </section>

      <section className="bg-custom-heading-500 text-white py-10 px-6 sm:px-12 md:px-20">
        <div className="container py-14 px-0  flex items-start  gap-8 md:gap-20  flex-wrap md:flex-nowrap">
          <div className="space-y-4 px-7 py-20  bg-custom-emerald w-2/5 h-4/5">
            <div className="flex items-center gap-4">
              <span className="p-2 bg-custom-heading-500 rounded-md">
                <MdEmail size={25} className="text-white" />
              </span>

              <div>
                <h5 className="text-lg font-bold">Email</h5>
                <Link
                  className="hover:text-bg-custom-heading-500 transition-all duration-200"
                  href="mailto:info@Big0.dev"
                >
                  info@Big0.dev
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="p-2 bg-custom-heading-500 rounded-md">
                <FaPhoneAlt size={25} className="text-white" />
              </span>

              <div>
                <h5 className="text-lg font-bold">Phone</h5>
                <Link
                  className="hover:text-bg-custom-heading-500 transition-all duration-200"
                  href="tel:+1-437-365-9377"
                >
                  +1-437-365-9377
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="p-2 bg-custom-heading-500 rounded-md">
                <FaLocationDot size={25} className="text-white" />
              </span>

              <div>
                <h5 className="text-lg font-bold">Office</h5>
                <Link
                  className="hover:text-bg-custom-heading-500 transition-all duration-200"
                  href="https://maps.app.goo.gl/3MQpn7aqJ6H7wCrG8"
                  target="_blank"
                >
                  1054, East Avenue, Mississauga, Ontario L5E 1W9
                </Link>
              </div>
            </div>

            {/* <div className="flex items-center pt-4 max-w-lg">
              <Input
                className="rounded-l-sm rounded-r-none text-black"
                placeholder="Subscribe To Newsletter"
              />
              <SubmitButton
                text="Subscribe"
                className="rounded-r-sm rounded-l-none bg-custom-purple-300/50 hover:bg-custom-purple-300 px-8"
              />
            </div> */}
          </div>
          <div className="w-3/5 ">
            <GetInTouchForm />
          </div>
        </div>
      </section>

      <section>
       <MapProvider>
       <Map  />
       </MapProvider>
        
       
      </section>

      <section className="py-10">
        <div className="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29733962.5709096!2d111.88697805211767!3d-24.532740314506096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2s!4v1719557013859!5m2!1sen!2s" width="100%" height="450"  loading="lazy" ></iframe>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
