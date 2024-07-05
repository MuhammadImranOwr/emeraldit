import GetInTouchForm from "./GetInTouchForm";
import SubmitButton from "./SubmitButton";
import { RiCornerDownRightFill } from "react-icons/ri";

const FreeConsultation = () => {
  return (
    <div>
      <section className="">
       
        <div className="container py-16 sm:px-10 flex h-full  flex-wrap md:flex  lg:flex-nowrap justify-between gap-4">
          <div className="lg:w-1/2  w-full space-y-5">
            <h3 className="text-3xl text-custom-heading-500   font-bold">
            We Are Perfect IT Solutions For Your Business
            </h3>
            <p className="">
            Discover why Emerald IT is a top choice in Australia. We offer expert solutions tailored to meet the unique needs of your business, ensuring efficiency and success.
            </p>
            <ul className=" space-y-4" >
              <li className="flex items-center pt-1"> <span>  <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />  </span>
          Our tech teams are experienced in designing and supporting full-spectrum solutions</li>
              <li className="flex items-center"> <span>  <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
              </span>Stay always online and connected with our 99.99% guaranteed Uptime</li>
              <li className="flex items-center"> <span>  <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
              </span>24/7 Support & assistance - Our team is here to assist you anytime</li>
              <li className="flex items-center"> <span>  <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
              </span>Quick Response - We've invested in top tools and talent for responsive client support.</li>
              <li className="flex items-center"> <span>  <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
              </span>We recruit top talent from AU, and NZ, offering structured training and support.</li>
              <li className="flex items-center"> <span>  <RiCornerDownRightFill color="hsla(155, 100%, 33%, 1)" />
              </span>No Risk - We mitigate technical risks with flexible terms and guarantees.</li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <GetInTouchForm />{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeConsultation;
