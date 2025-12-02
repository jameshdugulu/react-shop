 
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/useAuth'
import Login from './loginPage'
import styles from './header.module.css'

export function Headers(){
  const { user, logout, isAuthenticated, userRole } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openLoginDialog = () => {
    setIsLoginOpen(true)
    setIsMenuOpen(false)
  }

  const closeLoginDialog = () => {
    setIsLoginOpen(false)
  }

  const handleLogout = () => {
    logout()
  }

  return(
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>React Shop</div>

        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
          <ul className={styles.navList}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/store" onClick={closeMenu}>Store</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/cart" onClick={closeMenu}>Cart</Link></li>
            {isAuthenticated && userRole === 'admin' && (
              <li><Link to="/admin/dashboard" onClick={closeMenu}>Admin</Link></li>
            )}
            {isAuthenticated ? (
              <li>
                <span>Welcome, {user?.username}</span>
                <button className={styles.loginBtn} onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li><button className={styles.loginBtn} onClick={openLoginDialog}>Login</button></li>
            )}
          </ul>
        </nav>

        {isLoginOpen && (
          <div className={styles.dialogOverlay} onClick={closeLoginDialog}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
              <Login onClose={closeLoginDialog} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
