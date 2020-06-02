import React from 'react';
import { AnimatedSwitch } from 'react-router-transition';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuBar from './Menu';
import Home from './Home';
import Careeras from './Careeras';
import Project from './Project';
import Theme from './components/Theme';
import Footer from './components/Footer';
const App = () => {
  return (
    <Theme>
      <Router>
        <MenuBar />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <>
            <Route path="/projects/:name" component={Project} exact />
            <Route path="/careers" component={Careeras} exact />
            <Route path="/" component={Home} exact />
            <Footer />
          </>
        </AnimatedSwitch>
      </Router>
    </Theme>
  );
};

export default App;
