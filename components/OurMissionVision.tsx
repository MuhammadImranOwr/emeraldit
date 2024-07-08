import { RiFocus3Line } from "react-icons/ri";

const OurMissionVision = () => {
  return (
    <>
      <section className="-mt-14 ">
        <div className="container px-8 sm:px-20 flex h-full items-center flex-wrap justify-center md:justify-between gap-4 lg:flex-nowrap">
          <div className="shadow-3xl py-10 px-7 group bg-white hover:bg-custom-emerald flex justify-between items-center  gap-5">
            <div className="group-hover:text-white">
              <RiFocus3Line size={35} />
            </div>
            <div className="space-y-3">
              <h2 className="text-custom-emerald text-3xl font-bold group-hover:text-white">
                Our Mission
              </h2>
              <p className="font-dmSans text-custome-paragraph md:text-xl group-hover:text-white">
              Empowering your growth with tailored IT solutions and support. Simplifying the process to ensure productivity and protection for your business. 
              </p>
            </div>
          </div>
          <div className="shadow-3xl bg-white py-10 px-7 group hover:bg-custom-emerald flex justify-between items-center  gap-5">
            <div className="group-hover:text-white">
              <RiFocus3Line size={35} />
            </div>
            <div className="space-y-3">
              <h2 className="text-custom-emerald text-3xl font-bold group-hover:text-white">
                Our Vision
              </h2>
              <p className="font-dmSans text-custome-paragraph md:text-xl group-hover:text-white">
              At Emerald IT, our mission is to be your trusted IT partner, providing mid-market companies in Australia with the latest technologies and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMissionVision;
