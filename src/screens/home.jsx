import styles from './Home.module.css'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to React Shop</h1>
          <p className={styles.heroText}>
            Discover our collection of premium products with amazing deals
          </p>
          <Link to="/store">
            <button className={styles.heroButton}>Shop Now</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🚚</div>
            <h3 className={styles.featureTitle}>Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Fast Delivery</h3>
            <p>Get your items within 24 hours</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>💎</div>
            <h3 className={styles.featureTitle}>Premium Quality</h3>
            <p>Guaranteed satisfaction</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔄</div>
            <h3 className={styles.featureTitle}>Easy Returns</h3>
            <p>30-day return policy</p>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className={styles.trendingSection}>
        <h2 className={styles.trendingTitle}>Trending Products</h2>
        <div className={styles.productsGrid}>
          {/* Sample products - replace with actual data */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={styles.product}>
              <img
                src={`/product-${item}.jpg`}
                alt={`Product ${item}`}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>Product Name</h3>
                <p className={styles.productPrice}>$99.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>Subscribe to Our Newsletter</h2>
          <p>Stay updated with our latest products and exclusive offers</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
