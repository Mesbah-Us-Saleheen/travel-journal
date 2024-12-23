
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Data from './Data.jsx'
import './App.css'

function App() {
  const cards = Data.map(item=>{
    return <Card {...item} />
  })

  return (
    <>
      <Header />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </>
  )
}

export default App
