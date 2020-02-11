import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/:id" exact component={Detail} />
      </Router>
    </div>
  );
}
