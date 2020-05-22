import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {Routes.map((route, ind) => {
            return (
              <Route
                key={ind}
                path={route.path}
                exact={route.isExact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
