import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './components/layout';
import DashboardCurrencies from "./views/DashboardCurrencies";
import Home from "./views/Home";
import LoginUser from "./views/LoginUser";
import RegisterUser from "./views/RegisterUser";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users/login" component={LoginUser} exact />
          <Route path="/users/register" component={RegisterUser} exact />
          <Route path="/currencies" component={DashboardCurrencies} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
