import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { Product } from '../components/product'
import { useState, useEffect, useRef } from 'react'

export function Home() {
  const [trendingStart, setTrendingStart] = useState(0)
  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate)
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    
    observerRef.current = observer
    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach(section => observer.observe(section))
    
    return () => observer.disconnect()
  }, [])

  let items = [
    {
      id: 1,
      name: "Premium Sneakers",
      price: 89.99,
      description: "Comfortable and stylish sneakers",
      imgUrl: 'https://picsum.photos/200/300?random=1'
    },
    {
      id: 2,
      name: "Classic Shoes",
      price: 75.50,
      description: "Elegant shoes for every occasion",
      imgUrl: 'https://picsum.photos/200/300?random=2'
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 99.99,
      description: "High-performance athletic footwear",
      imgUrl: 'https://picsum.photos/200/300?random=3'
    },
    {
      id: 4,
      name: "Casual Loafers",
      price: 65.00,
      description: "Perfect for casual wear",
      imgUrl: 'https://picsum.photos/200/300?random=4'
    },
    {
      id: 5,
      name: "Winter Boots",
      price: 120.00,
      description: "Warm and durable winter footwear",
      imgUrl: 'https://picsum.photos/200/300?random=5'
    },
    {
      id: 6,
      name: "Summer Sandals",
      price: 45.99,
      description: "Lightweight and comfortable sandals",
      imgUrl: 'https://picsum.photos/200/300?random=6'
    }
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero} data-animate>
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
      <section className={styles.featuresSection} data-animate>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>&#128663;</div>
            <h3 className={styles.featureTitle}>Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>	&#9889;</div>
            <h3 className={styles.featureTitle}>Fast Delivery</h3>
            <p>Get your items within 24 hours</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>&diams;</div>
            <h3 className={styles.featureTitle}>Premium Quality</h3>
            <p>Guaranteed satisfaction</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>&#x23CE;</div>
            <h3 className={styles.featureTitle}>Easy Returns</h3>
            <p>30-day return policy</p>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className={styles.trendingSection} data-animate>
        <h2 className={styles.trendingTitle}>Trending Products</h2>
        <div className={styles.trendingContainer}>
          <div className={styles.productsCarousel}>
            {/* Show 3 products at a time */}
            {items.slice(trendingStart, trendingStart + 3).map((item) => (
                    <Product 
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      imgUrl={item.imgUrl}
                    />
                ))}
          </div>
          <div className={styles.carouselControls}>
            <button 
              className={styles.carouselBtn}
              onClick={() => setTrendingStart((prev) => (prev - 1 + items.length) % items.length)}
            >
              ← Previous
            </button>
            <button 
              className={styles.carouselBtn}
              onClick={() => setTrendingStart((prev) => (prev + 1) % items.length)}
            >
              Next →
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection} data-animate>
        <h2 className={styles.testimonialsTitle}>What Our Customers Say</h2>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialsImage}>
            <img src="https://picsum.photos/400/500?random=10" alt="Customer testimonials" />
          </div>
          <div className={styles.testimonialsList}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"Amazing quality and fast delivery! Highly recommend this shop."</p>
              <span className={styles.testimonialAuthor}>- Anonymous Customer</span>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"Best prices I found online, and the customer service was exceptional."</p>
              <span className={styles.testimonialAuthor}>- Happy Shopper</span>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"The products exceeded my expectations. Will definitely buy again!"</p>
              <span className={styles.testimonialAuthor}>- Satisfied Customer</span>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"Perfect packaging and arrived earlier than expected. Love it!"</p>
              <span className={styles.testimonialAuthor}>- Loyal Customer</span>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"Great variety and all items were exactly as described. 5 stars!"</p>
              <span className={styles.testimonialAuthor}>- Verified Buyer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection} data-animate>
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
