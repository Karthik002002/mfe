import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default ({ history }) => {
  const generateClassName = createGenerateClassName({ productionPrefix: "ma" });

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path={"/pricing"} component={Pricing} />
            <Route exact path={"/"} component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
