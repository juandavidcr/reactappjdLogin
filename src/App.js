import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Views/Login'
import Dashboard from './Views/Dashboard'

function App() {
  return (
    <div>
     
      <Router>
         <Header />
         {/* <CounterExample /> */}
           <Switch>
               <Route exact path="/">
                   <Login />
               </Route>
               <Route path="/dashboard">
                   <Dashboard  />
               </Route>
           </Switch>
           <Footer />
      </Router>
      
    </div>

  );
}

export default App;
