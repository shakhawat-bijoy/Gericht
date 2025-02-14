import React from "react";
import Container from "../layer/Container";
import chef01 from "../../assets/chef2.jpg";
import Image from "../layer/Image";
import spoon from "../../assets/spoon.png";
import Line2 from "../../assets/Line2.png";
import fork from "../../assets/fork.png";
import PatrickChoi from "../../assets/PatrickChoi.png";

const ChefsDetails = () => {
  return (
    <div className=" bg-bg-img bg-cover z-20 py-32 ">
      <Container>
        <div className="main flex gap-x-8 justify-center">
          <div className="left ">
            <div className="w-[634px] h-[800px] ">
              <Image className="w-full h-full object-cover" src={chef01} />
            </div>
          </div>

          <div className="right">
            <p className="text-white font-CU text-[23px] font-bold leading-7 capitalize">
              Deputy Chef
            </p>
            <p className="flex gap-x-2 my-2">
              <Image className="rotate-180 cursor-auto" src={fork} alt="fork" />
              <Image className="cursor-auto" src={spoon} alt="spoon" />
            </p>
            <h2 className="text-[#DCCA87] font-CU text-[64px] font-semibold leading-[84px] capitalize">
              Patrick Choi
            </h2>

            <div className="max-w-[570px] my-16">
              <p className="text-[#AAA] font-OS text-base leading-7 italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit. Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
                eget sit. Nulla scelerisque scelerisque consectetur adipiscing
                elit.
              </p>
            </div>
            <div className="flex flex-col gap-y-6 mb-12">
              <p className="flex items-center gap-x-2">
                <Image src={Line2} />
                <p className="text-[#F5EFDB] text-base font-semibold leading-7 capitalize">
                  Graduated from Culinary Institute of New Jersey, USA.
                </p>
              </p>

              <p className="flex items-center gap-x-2">
                <Image src={Line2} />
                <p className="text-[#F5EFDB] text-base font-semibold leading-7 capitalize">
                  Graduated from Culinary Institute of New Jersey, USA.
                </p>
              </p>

              <p className="flex items-center gap-x-2">
                <Image src={Line2} />
                <p className="text-[#F5EFDB] text-base font-semibold leading-7 capitalize">
                  Graduated from Culinary Institute of New Jersey, USA.
                </p>
              </p>

              <p className="flex items-center gap-x-2">
                <Image src={Line2} />
                <p className="text-[#F5EFDB] text-base font-semibold leading-7 capitalize">
                  Graduated from Culinary Institute of New Jersey, USA.
                </p>
              </p>
            </div>

            <Image
              className="cursor-auto"
              src={PatrickChoi}
              alt="KevinLuo.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChefsDetails;
