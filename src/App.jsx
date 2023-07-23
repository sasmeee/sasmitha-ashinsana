import React from 'react'
import { About, Contact, Home, Portfolio, Prices, Service, Skills, Stacks } from './Components'
import { Footer, Navbar } from './Containers'


const App = () => {
  return (
    <div className='dark:bg-slate-950 min-h-screen duration-100 select-none'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Stacks />
      <Service />
      <Prices />
      <Contact />
      <Footer />
    </div>
  )
}

export default App