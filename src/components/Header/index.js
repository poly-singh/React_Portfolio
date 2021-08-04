import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";
import About from "../../components/about";
// import { Nav } from "react-bootstrap";
import Portfolio from "../../components/Portfolio";
import Contact from '../../components/contact';
import Resume from '../../components/Resume';


// function Header (){
//   return(
//    <Navigation />
//   );
// }

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    );
  }
}

export default Header;