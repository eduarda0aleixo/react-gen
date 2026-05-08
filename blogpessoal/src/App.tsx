import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Home/> {/* Componente Home renderizado dentro do componente App, para que o index consiga renderizar na página */ }
      <Footer/>

    </>
  )
}

export default App
