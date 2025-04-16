import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { getStatusStyles } from "../utils/statusStyles";
import { Dots, Calendar } from "../../public";

interface Props {
  id: string;
  text: string;
  author: string;
  year: string;
  status: string;
  titleIcon: string;
  brandLogo: string;
}

export function SortableCard({
  id,
  text,
  author,
  year,
  status,
  titleIcon,
  brandLogo,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex  bg-[url('/BgCard.svg')] bg-no-repeat bg-right items-center justify-between max-h-[114px] pl-[32px] py-[34px]  rounded-[6px] shadow bg-[#030303] border cursor-grab hover:bg-[#050505] ${
        isDragging &&
        " transform origin-center rotate-[-6deg] translate-x-2 translate-y-1"
      }`}
    >
      <div>
        <div className="flex gap-[24px]">
          <Image src={titleIcon} alt="Dots" width={40} height={40} />

          <div>
            <div>
              <span className="text-[#E5E5DD] font-normal text-base font-normal ">
                {text}
              </span>
              <span className={`${getStatusStyles(status)} ml-[8px]`}>
                {status}
              </span>
            </div>
            <div className="flex gap-[16px] mt-[16px]">
              <div className="flex gap-[6px]">
                <Image src={brandLogo} alt="Dots" width={12} height={12} />
                <span className="text-[#9D9D95] font-normal text-xs">
                  {author}
                </span>
              </div>

              <div className="flex gap-[6px]">
                <Image src={Calendar} alt="Dots" width={12} height={12} />
                <span className="text-[#9D9D95] font-normal text-xs">
                  {year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isDragging && (
        <div className=" flex items-center justify-center w-[24px] h-screen max-h-[110px] bg-[rgba(255,255,255,0.3)]  rounded-r-[5px] rounded-l-[2px] mx-[2px]">
          <Image src={Dots} alt="Dots" width={6} height={11} />
        </div>
      )}
    </div>
  );
}
