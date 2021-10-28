import {
  DEFAULT_DATA_AND_POSITION,
  VERSION_LOCAL_STORAGE_FORM_MANDIRI,
} from 'constant';
import { getLocal, setLocal } from 'local/localStorage';
import PreviewDocument from 'pages/PreviewDocument';
import React, { FC, Fragment, ReactElement, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

const App: FC<any> = (): ReactElement => {
  useEffect(() => {
    const DATA_COOKIE_FORM_MANDIRI = getLocal(
      VERSION_LOCAL_STORAGE_FORM_MANDIRI
    );
    console.log('DATA_COOKIE_FORM_MANDIRI', DATA_COOKIE_FORM_MANDIRI);
    if (!DATA_COOKIE_FORM_MANDIRI) {
      setLocal(VERSION_LOCAL_STORAGE_FORM_MANDIRI, DEFAULT_DATA_AND_POSITION);
      window.location.reload();
    }
  }, []);
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/print' exact component={PreviewDocument} />
        <Route path='*' children={<Redirect to='/' />} />
      </Switch>
    </Fragment>
  );
};

export default App;
