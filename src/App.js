import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation,  LForm, Employee } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <LForm />} />
          <Route path="/employee" exact component={() => <Employee />} />
        </Switch>      
        <Navigation />
      </Router>
    </div>
  );
}

export default App;