
import './App.css'
import { Article } from './components/Article'
import { Footer } from './components/Footer'
import { Motto } from './components/Motto'
import { Navbar } from './components/Navbar'
import { Welcome } from './components/Welcome'
import { useState } from 'react'


function App() {

  return (
    <div className='w-[1440px] h-[2361px]'>
      <Navbar users={""} />
      <section className='flex flex-col items-center justify-center w-screen h-full px-40 bg-page'>
        <Welcome />
        <Article />
      </section>
      <section className='flex flex-col items-center justify-center w-screen px-40 pt-14'>
        <Motto black={""} />
      </section>
      <Footer />

    </div>
  )
}

export default App
