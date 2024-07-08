import CtaButton from "@/components/CtaButton";

const AboutUsCTA = () => {
  return (
    <>
      <section
        className="aboutuscta bg-cover bg-center bg-no-repeat min-h-full flex items-center justify-center mt-10 mb-10"
      >
        <div className="container ">
          <div className="space-y-4 flex justify-between">
            <h2 className="text-white text-4xl ">
              Committed to <span className="text-custom-emerald">Protecting</span><br />
              Your <span className="text-custom-emerald">Business</span> and Beyond
            </h2>
            <CtaButton href="/contact" title="Contact Us" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsCTA;
