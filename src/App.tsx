import React, { FC, ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Navigation';
import Footer from './components/Footer';
import './styles/output.css'

const App: FC = (): ReactElement => {

  return (
    <Router>
      <div className="font-mono bg-gray-800 h-screen text-green-300 font-semibold">
      <Header />
      <div className="md:px-52 px-8 py-8 ">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </div>
      <Footer />
      </div>
    </Router>
  )
}

export default App
