import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

const Card = () => {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-600 flex justify-center items-center">
      <div className="w-72 h-72 [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            val ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front Image */}
          <img
            className="absolute w-full h-full object-cover rounded backface-hidden "
            src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-4544-622f-b428-e6d0eb50b568/raw?se=2025-05-21T18%3A09%3A23Z&sp=r&sv=2024-08-04&sr=b&scid=14520def-af6b-5039-9149-9ed87fff5e7f&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-20T22%3A32%3A18Z&ske=2025-05-21T22%3A32%3A18Z&sks=b&skv=2024-08-04&sig=FWetvew2O7L4bwDeEV8fE01l98MohpDJ%2BgcgwqZthNM%3D"
            alt="Front"
          />

          {/* Back Image */}
          <img
            className="absolute w-full h-full object-cover rounded [transform:rotateY(180deg)] backface-hidden"
            src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-fff8-622f-b9bb-d41320148c51/raw?se=2025-05-21T17%3A58%3A25Z&sp=r&sv=2024-08-04&sr=b&scid=b96b34e0-daa7-5e37-9c70-27855a93734b&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-21T10%3A15%3A07Z&ske=2025-05-22T10%3A15%3A07Z&sks=b&skv=2024-08-04&sig=VDYTFk/uQ7sZZtcvWRp07EQ0hQWM3kggbxpPaxz4rvA%3D"
            alt="Back"
          />
        </div>

        <span
          onClick={() => setVal(!val)}
          className="w-10 h-10 absolute bottom-0 flex items-center justify-center bg-[#9b82828b] rounded-full left-1/2 -translate-x-[30%] -translate-y-[85%] cursor-pointer"
        >
          <GoArrowRight size={".7em"} />
        </span>
      </div>
    </div>
  );
};

export default Card;
