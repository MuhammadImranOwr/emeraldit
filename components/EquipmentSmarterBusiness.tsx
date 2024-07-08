import { HiOutlineCpuChip } from "react-icons/hi2";


const EquipmentSmaterBusiness = () =>{
    return(
        <>
         <section className="py-14 bg-custome-services">
        <div className="container">
          <div className="text-center mx-auto space-y-8 lg:px-32 sm:px-0 gap-5">
            <h2 className="text-4xl text-custom-heading-500 font-bold md:text-4xl lg:text-5xl">
            Reliable IT Equipment Management for a Smarter Business
            </h2>
            <p className="font-dmSans text-custome-paragraph "> We offer reliable equipment management services in Australia to enhance your business operations. Our comprehensive solutions ensure that your IT assets are always in top condition, reducing costs and improving efficiency. </p>
          </div>
        </div>

        <div className="container">
          <div className="grid w-full grid-cols-1 bg-custom-emerald   sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 bg-transparent lg:grid-cols-3 pt-10">
            <div className="space-y-4 p-4 text-center border-custom-emerald border-2 rounded bg-custome-white">
              <div className="iconbox flex items-center justify-center m-auto "> <HiOutlineCpuChip size={50} color="hsla(155, 100%, 33%, 1);" /></div>
              <h4 className="text-custom-heading-500 font-bold text-3xl h-20 ">
              Asset Lifecycle Management 
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
              Manage your IT assets from acquisition to disposal for maximum efficiency and cost-effectiveness. 
              </p>

              <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-custom-dark-200 focus:outline-none bg-white rounded-full border-2 border-custom-emerald hover:bg-custom-emerald hover:text-white  ">Alternative</button>
            </div>

            <div className="space-y-4 p-7 text-center border-custom-emerald border-2 rounded bg-custome-white">
              <div className="iconbox flex items-center justify-center"> <HiOutlineCpuChip size={50} color="hsla(155, 100%, 33%, 1);"/></div>
              <h4 className="text-custom-heading-500 font-bold text-3xl h-20  ">
              Inventory Management (Logistic and Purchase)
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
              Real-time logistic and detailed reporting of assets purchasing to streamline operations and reduce loss.  
              </p>
              <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-custom-dark-200 focus:outline-none bg-white rounded-full border-2 border-custom-emerald hover:bg-custom-emerald hover:text-white  ">Alternative</button>
            </div>
            <div className="space-y-4 p-7 text-center border-custom-emerald border-2 rounded bg-custome-white">
              <div className="iconbox flex items-center justify-center "> <HiOutlineCpuChip  size={50} color="hsla(155, 100%, 33%, 1);" />
              </div>
              <h4 className="text-custom-heading-500 font-bold text-3xl  h-20">
              Mobile Device Management (MDM)
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
              Effectively managing and integrating mobile devices and apps in the workplace is crucial for business success. 
              </p>
              <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-custom-dark-200 focus:outline-none bg-white rounded-full border-2 border-custom-emerald hover:bg-custom-emerald hover:text-white  ">Alternative</button>
            </div>

            <div className="space-y-4 p-7 text-center border-custom-emerald border-2 rounded bg-custome-white">
              <div className="iconbox flex items-center justify-center ">
                
              <HiOutlineCpuChip size={50} color="hsla(155, 100%, 33%, 1);" />
              
               </div>
              <h4 className="text-custom-heading-500 font-bold  text-3xl  h-20">
              Compliance and Auditing
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
              Conduct regular audits and ensure compliance with industry standards and regulatory requirements. 
              </p>
              <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-custom-dark-200 focus:outline-none bg-white rounded-full border-2 border-custom-emerald hover:bg-custom-emerald hover:text-white  ">Alternative</button>
            </div>

            <div className="space-y-3 p-7 text-center border-custom-emerald border-2 rounded bg-custome-white">
              <div className="iconbox flex items-center justify-center ">
                
              <HiOutlineCpuChip size={50}  color="hsla(155, 100%, 33%, 1);"/>
              
               </div>
              <h4 className="text-custom-heading-500 font-bold  text-3xl h-20
               ">
              Sustainability Programs 
              </h4>
              <p className="font-dmSans text-custome-paragraph ">
              Implement environmentally responsible practices for the disposal and management of IT equipment. 
              </p>
              <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-custom-dark-200 focus:outline-none bg-white rounded-full border-2 border-custom-emerald hover:bg-custom-emerald hover:text-white  ">Alternative</button>
            </div>
          </div>
        </div>
        </section>
        </>
    )
}

export default EquipmentSmaterBusiness;