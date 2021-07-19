import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from "./Home";
import CreateQuiz from "./CreateQuiz";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path="/create-quiz">
            <CreateQuiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
