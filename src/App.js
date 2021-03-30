import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Classes from "./Components/Classes/Classes";
import ClassShedule from "./Components/ClassShedule/ClassShedule";
import Home from "./Components/Home/Home/Home";
import MembershipForm from "./Components/MembershipForm/MembershipForm";
import PrincingPlan from "./Components/PrincingPlan/PrincingPlan";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaymentProcess from "./Components/PaymentProcess/PaymentProcess";
import NoMatch from "./Components/NoMatch/NoMatch";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/classes'>
          <Classes></Classes>
        </Route>
        <Route path='/class/:id'>
          <ClassShedule></ClassShedule>
        </Route>
        <Route path='/princing'>
          <PrincingPlan></PrincingPlan>
        </Route>
        <Route path='/membershipForm'>
          <MembershipForm></MembershipForm>
        </Route>
        <Route path='/payment'>
          <PaymentProcess></PaymentProcess>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
