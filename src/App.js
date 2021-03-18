import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            {/* HEADER */}
            <h1>Hello</h1>
            <Header />
          </Route>
          <Route path="/">
            {/* HEADER */}
            <Header />
            {/* HOME */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
