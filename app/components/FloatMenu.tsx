import { Menu1, Menu2, Menu3, Menu4, Menu5, Search } from "../../public";
import Image from "next/image";

export default function FloatMenu () {
    return (
        <div className="fixed bottom-0 left-0 right-0 mb-4 flex justify-center">
        <div className="flex gap-[12px]">
        <div className="bg-[#262624] rounded-[6px] shadow-lg min-w-[300px] p-[16px]">
          <div className="flex gap-[36px] items-center p-[6px]">
            <div className="hover:bg-[#525252] rounded-[4px] text-blue-500 w-[40px] h-[40px] flex items-center justify-center ">
              <Image src={Menu1} alt="Menu1" width={16} height={16} />
            </div>
            <div className="hover:bg-[#525252] rounded-[4px] text-blue-500 w-[40px] h-[40px] flex items-center justify-center ">
              <Image src={Menu2} alt="Menu1" width={16} height={16} />
            </div>
            <div className="hover:bg-[#525252] rounded-[4px] text-blue-500 w-[40px] h-[40px] flex items-center justify-center ">
              <Image src={Menu3} alt="Menu1" width={16} height={16} />
            </div>
            <div className="hover:bg-[#525252] rounded-[4px] text-blue-500 w-[40px] h-[40px] flex items-center justify-center ">
              <Image src={Menu4} alt="Menu1" width={16} height={16} />
            </div>
            <span className="text-[#525252]"> | </span>
            <div className="hover:bg-[#525252] rounded-[4px] text-blue-500 w-[40px] h-[40px] flex items-center justify-center ">
              <Image src={Menu5} alt="Menu1" width={16} height={16} />
            </div>
          </div>

          
        </div>

        <div className="bg-[#262624] rounded-[6px] shadow-lg min-w-[52px] p-[16px]">
          <div className="flex gap-[36px] items-center p-[6px]">
            <div className="hover:bg-[#525252] rounded-[4px] text-blue-500 w-[40px] h-[40px] flex items-center justify-center ">
              <Image src={Search} alt="Menu1" width={16} height={16} />
            </div>
      
          </div>
        </div>
        </div>
      
      </div>
    )
}