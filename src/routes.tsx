import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Default from './pages/home';
import Evolution from './pages/evolution';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Default} />
      <Route path="/evolution" component={Evolution} />
    </Switch>
  );
}
