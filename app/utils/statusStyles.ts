export function getStatusStyles(status: string) {
    switch (status) {
      case "Draft Live":
        return "ml-[8px] text-[#B5FF4D] font-normal rounded-[3px] text-xs px-[12px] py-[6px] bg-[rgba(181,255,77,0.1)] shadow-[0px_0px_0px_0.5px_rgba(181,255,77,0.2)] border-[1px] border-[rgba(181,255,77,0.5)]";
      case "Pre-Draft":
        return "ml-[8px] text-[#FFAD33] font-normal rounded-[3px] text-xs px-[12px] py-[6px] bg-[rgba(255,173,51,0.1)] shadow-[0px_0px_0px_0.5px_rgba(255,173,51,0.2)] border-[1px] border-[rgba(255,173,51,0.5)]";
      case "Post-Draft":
        return "ml-[8px] text-[#CCCCC5] font-normal rounded-[3px] text-xs px-[12px] py-[6px] bg-[rgba(0,0,0,0.9)] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.9)] border-[1px] border-[rgba(204,204,197,0.5)]";
      default:
        return "text-[#B5FF4D] bg-[#D0FF7D] border-[#A5FF4D]";
    }
  }
  