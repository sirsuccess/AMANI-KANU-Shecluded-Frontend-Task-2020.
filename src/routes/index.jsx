import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Spinner from "../components/commons/spinner";
// const Home = lazy(() => import("../views/home"));
// const Cats = lazy(() => import("../views/cats"));
// const LOTR = lazy(() => import("../views/LOTR"));
// const ContactUs = lazy(() => import("../views/home"));
// const About = lazy(() => import("../views/home"));

const App = () => (
  <Router>
    <Suspense fallback={Spinner}>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route path="/cats" component={Cats} />
        <Route path="/lotr" component={LOTR} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} /> */}
      </Switch>
    </Suspense>
  </Router>
);

export default App;
