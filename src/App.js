import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/NavComponent";
import Home from "./screens/Home";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={CartScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
