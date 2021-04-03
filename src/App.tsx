import React from 'react';
import './App.less';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './router';

function RouteWithSubRoutes(route: any) {
  return <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />;
}

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {routes.map((route, index) => {
            return <RouteWithSubRoutes key={index} {...route} />;
          })}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
