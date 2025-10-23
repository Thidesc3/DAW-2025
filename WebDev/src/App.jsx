import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FeaturedMovie from './components/FeaturedMovie'
import Navigation from './components/Navigation'
import MovieList from './components/MovieList'

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="conteiner">
          <FeaturedMovie />
          <Navigation />
          <MovieList />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
