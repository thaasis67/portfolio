import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Contact from './pages/Contacts'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts'element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
