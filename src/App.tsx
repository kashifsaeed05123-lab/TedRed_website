import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Challenges from './components/sections/Challenges'
import Portfolio from './components/sections/Portfolio'
import Process from './components/sections/Process'
import Partners from './components/sections/Partners'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Challenges />
        <Portfolio />
        <Process />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
