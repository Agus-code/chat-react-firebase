import { useContext } from 'react'

import Header from './components/header/Header'
import SignIn from './components/signin/SignIn'
import Messenger from './components/messenger/Messenger'

import { AuthContext } from './provider/AuthContext'

import './App.css'

const App = ()=>{

  
  const { isLogged } =  useContext(AuthContext)

  return (
    <>
      <Header/>
      {isLogged===false
        ?
        <SignIn/>
        :
        <Messenger/>
      }
    </>
  );
}

export default App;
