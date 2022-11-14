import "./App.css";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";
import Supliers from "./components/Supliers";
import Product from "./components/Product";
import Projectmorders from "./components/Projectmorders";
import Header from "./components/Header";
import Main from "./components/Main";
import Accounting from "./components/Accounting";
import Manager from "./components/Manager";
import Productview from "./components/Productview";
import Activities from "./components/Activities";
import Profile from "./components/Profile";
import AccountingProfileview from "./components/AccountingProfileview";
import ManagementProfileview from "./components/ManagementProfileview";

// all functions implemented
const App = () => {
  return (
    <BRouter>
      <main className="page-body-content">
        <Switch>
          <Route exact path="/supplier" component={Supliers} />
        </Switch>
        <Switch>
          <Route exact path="/Accounting" component={Accounting} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Switch>
          <Route exact path="/add" component={Product} />
        </Switch>
        <Switch>
          <Route exact path="/manager" component={Projectmorders} />
        </Switch>
        <Switch>
          <Route exact path="/manageractivity" component={Manager} />
        </Switch>
        <Switch>
          <Route exact path="/nav" component={Header} />
        </Switch>
        <Switch>
          <Route exact path="/addedproduct" component={Productview} />
        </Switch>
        <Switch>
          <Route exact path="/activities" component={Activities} />
        </Switch>
        <Switch>
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Switch>
          <Route exact path="/paccountinh" component={AccountingProfileview} />
        </Switch>{" "}
        <Switch>
          <Route exact path="/pmanagement" component={ManagementProfileview} />
        </Switch>
      </main>
    </BRouter>
  );
};
export default App;
