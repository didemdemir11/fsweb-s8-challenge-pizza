import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import SiparisFormu from './components/SiparisFormu'
import Home from './components/Home'
import Success from './components/Success'

function App() {

  return (
    <>
     <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/siparis-formu" exact component={SiparisFormu}/>
        <Route path="/siparis-onay" exact component={Success}/>
      </Switch>
     </Router>
    </>
  )
}

export default App
