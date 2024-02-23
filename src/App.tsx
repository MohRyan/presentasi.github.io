
import './App.css'
import { Article } from './components/Article'
import { Footer } from './components/Footer'
import { Motto } from './components/Motto'
import { Navbar } from './components/Navbar'
import { Welcome } from './components/Welcome'

function App() {
  return (
    <div className='w-[1440px] h-[2361px]'>
      <Navbar />
      <section className='px-40 pt-14 w-screen bg-page flex justify-center items-center flex-col'>
        <Welcome />
        <Article />
      </section>
      <section className='px-40 pt-14 w-screen flex justify-center items-center flex-col'>
        <Motto />
      </section>
      <Footer />
    </div>
  )
}

export default App
