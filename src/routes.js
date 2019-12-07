import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './routeWrapper';
import Home from './pages/Home';
import Boleto from './pages/Boleto';
import Termos from './pages/Termos';
import Erro from './pages/Error';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivate />
      <Route path="/boleto/extrato" component={Boleto} isPrivate />
      <Route path="/error" component={Erro} />
      <Route path="/termodeuso" component={Termos} />
    </Switch>
  );
}
