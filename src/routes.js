import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/DashBoard/Dashboard';
import Wizard from './Components/Wizard/Wizard';

export default (
    <Switch>
        <Route exact path = '/' component={Dashboard} />
        <Route exact path = '/Wizard' component={Wizard} />
    </Switch>
)