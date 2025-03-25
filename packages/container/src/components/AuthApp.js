import React, { useRef, useEffect } from "react";
import { Mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

export default function AuthApp({ onSignIn }) {
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
      onSignIn,
    });

    history.listen(onParentNavigate);
  });
  return <div ref={ref}></div>;
}
