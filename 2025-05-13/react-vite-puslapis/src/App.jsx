import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Cards from './components/cards/Cards'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Intro />
        <Cards />
      </div>
    </>
  )
}

export default App
