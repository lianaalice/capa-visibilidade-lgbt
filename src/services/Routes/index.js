import React from "react"; 
import { Route , Switch, BrowserRouter } from "react-router-dom";

import Home from "../../pages/Home";
import MoreAbout from "../../pages/MoreAbout";

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}  />
        <Route path="/saibamais" component={MoreAbout} />
    </Switch>
    </BrowserRouter>
)

export default Routes;