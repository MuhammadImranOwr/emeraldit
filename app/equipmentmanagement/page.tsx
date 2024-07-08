import { EquipmentBanner } from "@/components/EquipmentBanner";
import EquipmentCTA from "@/components/EquipmentCTA";
import EquipmentSmaterBusiness from "@/components/EquipmentSmarterBusiness";
import WhoWeWorkEquipment from "@/components/WhoWeWorkEquipment";

const EquipmentManagement = () =>{
    return(
        <>

        <section>
            <EquipmentBanner />
            <EquipmentSmaterBusiness />
            <WhoWeWorkEquipment />
            <EquipmentCTA />
        </section>
        </>
    )
}

export default EquipmentManagement;