import React from 'react'

import {Footer, Blog, Possibility, Features,WhatGPA,Header} from './containers'
import { Cta, Brand, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPA/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App