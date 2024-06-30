import React,{useEffect,useContext} from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom'

//tab create cheyan

import Signup from './Pages/Signup'

import Login from './Pages/Login'

import Create from './Pages/Create'

import View from './Pages/ViewPost'

import { AuthContext, FirebaseContext } from './storage/Context'

import Post from './storage/PostContext';

import './App.css';



/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';


function App() {

  const {setUser} =useContext(AuthContext)

  const {firebase} = useContext(FirebaseContext)



  useEffect(()=>{

    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
  return (
    //tab execution
    <div>

      <Post>
      
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/Signup'>
          <Signup />
        </Route>

        <Route path='/Login'>
          <Login/>
        </Route>

        <Route path='/Create'>
          <Create />
        </Route>

        <Route path='/View'>
          <View/>
        </Route>

      </Router>
      
      </Post>

      
    </div>
  );
}

export default App;
