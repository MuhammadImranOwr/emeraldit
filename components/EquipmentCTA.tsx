
import CtaButton from "@/components/CtaButton";
const EquipmentCTA =() =>{
    return(
        <>
           <section
        className="aboutuscta bg-cover bg-center bg-no-repeat min-h-full flex items-center justify-center mt-10 mb-10"
      >
        <div className="container ">
          <div className="space-y-4 flex justify-between ">
            <h2 className="text-white text-4xl font-semibold">
            Take control of your  <span className="text-custom-emerald">   IT equipment  </span> 
              with  <span className="text-custom-emerald">  Emerald-IT’s </span> <br></br>  comprehensive management solutions.
            </h2>
            <CtaButton href="/contact" title="Book now!" />
          </div>
        </div>
      </section>
        </>
    )
}

export default EquipmentCTA;