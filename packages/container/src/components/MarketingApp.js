import React, { useRef, useEffect } from "react";
import { Mount } from "marketing/MarketingApp";
export default function MarketingApp() {
  const ref = useRef(null);

  useEffect(()=>{
    Mount(ref.current)
  })
  return <div ref={ref}></div>;
}
