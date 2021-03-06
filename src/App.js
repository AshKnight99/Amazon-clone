import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM convention
    <Router>
      <div className="app">
         {/* HEADER */}
         <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">           
            {/* HOME */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
