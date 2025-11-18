
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './screens/home';
import { Contact } from './screens/contact';
import { Estore } from './screens/estore';
import { ProductDetail } from './screens/ProductDetail';
import './App.css';
import { Headers } from './components/header';
import { Footer } from './components/footer';

function App() {
  return (  
    <> 
    <div className="app">
      <strong>Internship Project</strong>
      <Headers />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Estore />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
    </div>
    <Footer />
    </>
  )
}

export default App