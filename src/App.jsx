import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './screens/home'
import { Store } from './screens/store'
import { Contact } from './screens/contact'
import './App.css'
import { Headers } from './components/header'
import { Footer } from './components/footer'

function App() {
  return (
    <> 
    <div className="app">
      <strong>Shop</strong>
      <Headers />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
    </div>
    <Footer />
    </>
  )
}

export default App