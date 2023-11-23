import ExpandIcon from "@/svg/expand_icon";
import ExpandLessIcon from "@/svg/expand_less_icon";
import { useState } from "react";

type FaqType = {
  ask: string;
  ans: string;
  isOpen: boolean;
  isAboveOpen?: boolean;
  onClick: () => any;
};

export default function FaqItem({
  ask,
  ans,
  isOpen,
  isAboveOpen,
  onClick,
}: FaqType) {
  const [isMounted, setIsMounted] = useState(false);
  const handleClick = () => {
    if (!isMounted) {
      setIsMounted(true);
      onClick();
    } else {
      setIsMounted(false);

      setTimeout(() => {
        onClick();
      }, 300);
    }
  };

  return (
    <div className={`relative w-full ${isAboveOpen && "mt-44"}`}>
      <button
        className="flex justify-between w-full hover:text-darkGreen"
        onClick={handleClick}
      >
        <p className="text-b1">{ask}</p>
        {isOpen ? <ExpandLessIcon /> : <ExpandIcon />}
      </button>
      {isOpen && (
        <div
          className={
            isMounted
              ? "animate-dropdown text-b2 leading-normal mt-3"
              : "animate-dropdown-close text-b2 leading-normal mt-3"
          }
        >
          <div>{ans}</div>
        </div>
      )}
    </div>
  );
}
