
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './header.module.css'

export function Headers(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
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
            <li><Link to="/admin" onClick={closeMenu}>Admin</Link></li>
            <li><button className={styles.loginBtn} onClick={closeMenu}>Login</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
