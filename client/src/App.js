import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path={"/portfolio"} component={Portfolio} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"*"} component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
