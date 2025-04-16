export function getStatusStyles(status: string) {
    const baseStyles = "ml-[8px] font-normal rounded-[3px] text-xs px-[12px] py-[6px] border-[1px]";
  
    const statuses: Record<string, string> = {
      "Draft Live": `text-[#B5FF4D] bg-[rgba(181,255,77,0.1)] shadow-[0px_0px_0px_0.5px_rgba(181,255,77,0.2)] border-[rgba(181,255,77,0.5)]`,
      "Pre-Draft": `text-[#FFAD33] bg-[rgba(255,173,51,0.1)] shadow-[0px_0px_0px_0.5px_rgba(255,173,51,0.2)] border-[rgba(255,173,51,0.5)]`,
      "Post-Draft": `text-[#CCCCC5] bg-[rgba(0,0,0,0.9)] shadow-[0px_0px_0px_0.5px_rgba(0,0,0,0.9)] border-[rgba(204,204,197,0.5)]`
    };
  
    const colorStyles = statuses[status] 
      || "text-[#B5FF4D] bg-[#D0FF7D] border-[#A5FF4D]";
  
    return `${baseStyles} ${colorStyles}`;
  }
  