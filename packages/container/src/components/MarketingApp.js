import React, { useRef, useEffect } from "react";
import { Mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default function MarketingApp() {
  const history = useHistory();
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = Mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    history.listen(onParentNavigate);
  });
  return <div ref={ref}></div>;
}
