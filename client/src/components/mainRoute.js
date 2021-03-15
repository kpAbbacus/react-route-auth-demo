import React from "react";
import {Route, Switch} from "react-router-dom";

// import asyncComponent from "util/asyncComponent";

const mainRoute = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.pathname}games`} component={() => import('./components/games/GamesPage')}/>
    </Switch>
  </div>
);

export default mainRoute;
