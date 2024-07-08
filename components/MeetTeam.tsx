import Image from "next/image";

const MeetTeam = () => {
  return (
    <>
      <section className="py-14">
        <div className="container">
          <div className="text-center mx-auto space-y-8 lg:px-32 sm:px-0 gap-5">
            <h2 className="text-4xl text-custom-heading-500 font-bold md:text-4xl lg:text-5xl">
              Meet With Professional Team
            </h2>
          </div>
        </div>

        <div className="container">
          <div className="grid w-full grid-cols-1 bg-custom-emerald sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 bg-transparent lg:grid-cols-5 pt-10">
            <div className="space-y-3 p-4 text-center bg-custome-services rounded-full  w-56 h-80 ">
              <div className="mx-auto w-48 h-48 relative">
                <Image
                  src={"/emeraiddifference.png"}
                  alt="Mike"
                  className="rounded-full border-4 border-custom-emerald"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h5 className="text-custom-heading-500 text-xl font-bold font-lato">Mike</h5>
              <p className="font-dmSans text-custome-paragraph text-base ">CO-Founder</p>
            </div>
            <div className="space-y-3 p-4 text-center bg-custome-services rounded-full  w-56 h-80 ">
              <div className="mx-auto w-48 h-48 relative">
                <Image
                  src={"/emeraiddifference.png"}
                  alt="Chris"
                  className="rounded-full border-4 border-custom-emerald"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="space-y-4">
              <h5 className="text-custom-heading-500 text-xl font-bold">Chris</h5>
              <p className="font-dmSans text-custome-paragraph text-base">CO-Founder</p>
              </div>
              
            </div>
            <div className="space-y-3 p-4 text-center bg-custome-services rounded-full  w-56 h-80 ">
              <div className="mx-auto w-48 h-48 relative">
                <Image
                  src={"/emeraiddifference.png"}
                  alt="Danyal"
                  className="rounded-full border-4 border-custom-emerald"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h5 className="text-custom-heading-500 text-xl font-bold font-lato">Danyal</h5>
              <p className="font-dmSans text-custome-paragraph text-base ">CO-Founder</p>
            </div>
            <div className="space-y-3 p-4 text-center bg-custome-services rounded-full w-56 h-80 ">
              <div className="mx-auto w-48 h-48 relative">
                <Image
                  src={"/emeraiddifference.png"}
                  alt="Arber"
                  className="rounded-full border-4 border-custom-emerald"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h5 className="text-custom-heading-500 text-xl font-bold">Arber</h5>
              <p className="font-dmSans text-custome-paragraph text-base ">CO-Founder</p>
            </div>
            <div className="space-y-3 p-4 text-center bg-custome-services rounded-full  w-56 h-80  ">
              <div className="mx-auto w-48 h-48 relative">
                <Image
                  src={"/emeraiddifference.png"}
                  alt="Arber"
                  className="rounded-full border-4 border-custom-emerald"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h5 className="text-custom-heading-500 text-xl font-bold font-lato">Arber</h5>
              <p className="font-dmSans text-custome-paragraph text-base ">CO-Founder</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetTeam;
