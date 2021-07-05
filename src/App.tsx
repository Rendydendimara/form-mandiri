import React, { FC, Fragment, ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Print from './pages/Print';

const App: FC<any> = (): ReactElement => {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/print' exact component={Print} />
        <Route path='*' children={<Redirect to='/' />} />
      </Switch>
    </Fragment>
  );
};

export default App;
