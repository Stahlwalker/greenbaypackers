import Header from './components/Header'
import Tradition from './components/Tradition'
import Games from './components/Games'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="min-h-screen">
      <Header />
      <Tradition />
      <div className="w-full min-h-[600px] lg:min-h-[800px] bg-contain bg-center bg-no-repeat"
           style={{ backgroundImage: `url(${baseUrl}img/nflmapcomplete.png)` }}>
      </div>
      <Games />
      <div className="w-full min-h-[400px] lg:min-h-[600px] bg-cover bg-center"
           style={{ backgroundImage: `url(${baseUrl}img/packers.jpg)` }}>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
