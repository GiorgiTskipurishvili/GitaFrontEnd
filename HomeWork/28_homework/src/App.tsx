import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './components/Main/Main'
import About from './components/About/About'
import Location from './components/Location/Location'
import Careers from './components/Careers/Careers'
import HeaderComponent from './components/Header/HeaderComponent'
import FooterComponent from './components/Footer/FooterComponent'

function App() {


  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <FooterComponent />
    </>
  )
}

export default App
