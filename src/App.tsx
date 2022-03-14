import React, { FC, ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Header from './components/Navigation';
import Footer from './components/Footer';
import './styles/output.css';
// test
const App: FC = (): ReactElement => {
  return (
    <Router>
      <div className="font-mono text-primary bg-mainBg font-semibold min-h-screen">
        <Header />
        <div className="flex justify-center px-8 pt-8">
          <TransitionGroup>
            <CSSTransition
              //key={location?.pathname}
              classNames="fade"
              timeout={300}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/blog" component={Blogs} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
