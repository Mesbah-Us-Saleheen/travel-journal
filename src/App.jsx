
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Data from './Data.jsx'
import './App_custom.css'
// import './App.css'

function App() {
  const cards = Data.map(item=>{
    return <Card {...item} />
  })

  return (
    <>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </>
  )
}

export default App
