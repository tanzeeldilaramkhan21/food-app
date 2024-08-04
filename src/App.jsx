import React from 'react'
import Navbar from './components/Navbar'
import './App.css' 
import Searchbar from './components/Searchbar'
import Explorefood from './components/Explorefood'
import Foodmenu from './components/Foodmenu'
import Socialsites from './components/Socialsites'


function App() {
  return (
    <div>
     <Navbar/> 
     <Searchbar/>
     <Explorefood/>
     <Foodmenu/>  
     <Socialsites/>
    </div>
  )
}

export default App


