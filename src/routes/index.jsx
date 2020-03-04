import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Spinner from "../components/commons/spinner";
import NotFound from "../views/NotFound/NotFound";
import Navbar from "../components/features/navbar/navbar";
const Home = lazy(() => import("../views/home/Home"));
const Cats = lazy(() => import("../views/cats/CatPage"));
const LOTR = lazy(() => import("../views/LOTR/LOTRpage"));
const Login = lazy(() => import("../views/login/Login"));
const Signup = lazy(() => import("../views/signup/SignUp"));

const App = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cats" component={Cats} />
        <Route exact path="/lotr" component={LOTR} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
