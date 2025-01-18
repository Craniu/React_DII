import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'




function App() {
 
  const [activeComponent, setActiveComponent] =useState('home')
  const loadComponent = () =>{
    switch(activeComponent){
      case 'home':
        return <Home/>
      case 'login':
        return <Login/>
      case 'register':
        return <Register/>
    }
  }

  return (
    <div>
      <Navbar setActiveComponent = {setActiveComponent}/>
      {/* <Home /> */}
      <main>
        {loadComponent()}
      </main>
      <Footer />
    </div>
  )
}

export default App
