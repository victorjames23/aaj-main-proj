import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OurOffers from "./components/ouroffers";
import ViewProjects from "./components/viewprojects";
import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Prices from "./pages/prices";
import Projects from "./pages/projects";
import Events from "./components/events";
const App = () => {
  return ( 
    <div>
      <div className="isSending" id="my-loader">
        <span><i className="fas fa-spinner fa-pulse"></i></span>
      </div>
      <OurOffers/>
      <div className="my-toast" id="my-toast">
      <div className="xs-container my-col-10">
        <div className="xs-12 pdl-10 down-1"><span id="msg" className="xs-px13"></span></div>
      </div>
    </div>
        <Router>
          <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/offers"  component={ Prices} />
          <Route path="/about"  component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:id"  component={ViewProjects} />
          <Route path="/onePercent"  component={Events} />
          <Route path="*" component={ NotFound } />
          </Switch>
        </Router>
    </div>
    );
  }
  
  export default App;
