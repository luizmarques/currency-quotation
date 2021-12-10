import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from './components/layout';
import { isAuthenticated } from "./config/storage";
import DashboardCurrencies from "./views/DashboardCurrencies";
import Home from "./views/Home";
import LoginUser from "./views/LoginUser";
import RegisterUser from "./views/RegisterUser";

function Router() {
  const PrivateRouter = ({ component: Component, ...rest }) => {
    const isLogin = rest.path === "/users/login";
  
    if (!isAuthenticated() && !isLogin) {
      return <Redirect to="/users/login" noThrow />;
    }    

    return <Component {...rest} />;
  };

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
