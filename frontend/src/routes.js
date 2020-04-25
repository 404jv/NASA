import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Apod from './pages/Apod';
import MarsPhoto from './pages/MarsPhotos';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact     component={Home}/>
                <Route path="/detail/:id" component={Detail} />
                <Route path="/apod"       component={Apod} />
                <Route path="/mars"       component={MarsPhoto} />
            </Switch>
        </BrowserRouter>
        
    );
}
