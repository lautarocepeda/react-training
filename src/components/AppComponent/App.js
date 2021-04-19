import React                        from 'react';
import { BrowserRouter, Route, Switch }     from 'react-router-dom';
import Excercises                   from '../../pages/Excercises';
import ExcerciseNew                from '../../pages/ExcerciseNew';
import NotFound                     from '../../pages/NotFound'


const App = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={ Excercises } />
            <Route exact path="/exercise/new" component={ ExcerciseNew } />
            <Route component={NotFound} />
        </Switch>
        </BrowserRouter>
);

export default App;