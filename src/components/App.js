import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";
import Favorites from "./Favorites";
import { BrowserRouter as Router, Switch, Link, withRouter, Route } from 'react-router-dom';



function App() {
  return (
    <div className="container-fluid">
      <Router>

        <Header />
        <Search component={withRouter(Search)} />
        <Switch>

          <Favorites path="/Favorites" component={withRouter(Favorites)} />
          
          <Weather exact path="/" component={withRouter(Weather)} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
