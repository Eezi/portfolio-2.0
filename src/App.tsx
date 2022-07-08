import React, { FC, ReactElement, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Header from './components/Navigation';
import Footer from './components/Footer';
import { Background } from './components/Vanta';
import './styles/output.css';

const App: FC = (): ReactElement => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div >
          <Background isDark={darkMode}>
            <div className="font-mono text-back dark:text-light font-semibold">
              <Header setDarkMode={setDarkMode} darkMode={darkMode} />
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
          </Background>
        </div>
      </div>
    </Router>
  );
};

export default App;
