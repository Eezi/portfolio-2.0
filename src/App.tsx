import React, { FC, ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/Navigation';
import Footer from './components/Footer';
import './styles/output.css'

const App: FC = (): ReactElement => {

  return (
    <Router>
      <div className="font-mono text-primary bg-gray-800 font-semibold min-h-screen">
      <Header />
      <div className="md:px-52 px-8 pt-8">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      </div>
      <Footer />
      </div>
    </Router>
  )
}

export default App
