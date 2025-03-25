import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

export default ({ history, onSignIn }) => {
  const generateClassName = createGenerateClassName({ productionPrefix: "au" });

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path={"/auth/signin"}>
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route exact path={"/auth/signup"} component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
