type ChevronIconProps = {
    isOpen: boolean;
    className?: string;
  };
  
  export const  ChevronIcon = ({ isOpen, className = '' }: ChevronIconProps) => {
    return (
      <svg
        className={`w-6 h-6 text-[#9D9D95] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'} ${className}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
  