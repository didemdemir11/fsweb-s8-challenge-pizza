import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import SiparisFormu from './components/SiparisFormu'
import Home from './components/Home'
import Success from './components/Success'
import { useState } from 'react'

function App() {
  const [orderData,setOrderData] = useState(null);
  const [errorMessage,setErrorMessage] = useState('');
  return (
    <>
     <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route 
        path="/siparis-formu" exact 
        render={() => <SiparisFormu setOrderData={setOrderData} setErrorMessage={setErrorMessage} />}/>
        <Route path="/siparis-onay" exact 
        render={() => <Success orderData={orderData} errorMessage={errorMessage} />}/>
      </Switch>
     </Router>
    </>
  )
}

export default App
