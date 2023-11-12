"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const mobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}
