import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";
import Favorites from "./Favorites";
import { BrowserRouter as Router, Switch, Link, withRouter } from 'react-router-dom';


function App() {
  return (
    <div className="container-fluid">

        <Header />
        <Search />
        <Switch>       
          <Favorites path="/Favorites" component={Favorites} />
          <Weather path="/" component={Weather} />
        </Switch>

    </div>
  );
}

export default App;
