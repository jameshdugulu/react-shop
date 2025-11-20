import { Routes, Route } from 'react-router-dom';
import { Home } from './screens/home';
import { Contact } from './screens/contact';
import { Estore } from './screens/estore';
import { Admin } from './screens/admin/admin';
import { ProductDetail } from './screens/ProductDetail';
import './App.css';
import { Headers } from './components/header';
import { Footer } from './components/footer';
import { Dashboard } from './screens/admin/Admin_components/Dashboard';
import { Products } from './screens/admin/Admin_components/Products';
import { Orders } from './screens/admin/Admin_components/Orders';
import { Users } from './screens/admin/Admin_components/Users';
import { Settings } from './screens/admin/Admin_components/Settings';

function App() {
  return (  
    <> 
      <div className="app">
        <strong>Internship Project</strong>
        <Headers />
        <main className="main">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Estore />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<Admin />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App;
