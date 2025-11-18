import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../components/product';
import styles from './ProductDetail.module.css';

// All products data
const allProducts = [
  { id: 1, name: "Premium Sneakers", price: 89.99, category: "Shoes", stock: "In Stock", description: "Comfortable and stylish sneakers", imgUrl: 'https://picsum.photos/400/500?random=1' },
  { id: 2, name: "Classic Shoes", price: 75.50, category: "Shoes", stock: "Out of Stock", description: "Elegant shoes for every occasion", imgUrl: 'https://picsum.photos/400/500?random=2' },
  { id: 3, name: "Running Shoes", price: 99.99, category: "Shoes", stock: "In Stock", description: "High-performance athletic footwear", imgUrl: 'https://picsum.photos/400/500?random=3' },
  { id: 4, name: "Casual Loafers", price: 65.00, category: "Shoes", stock: "In Stock", description: "Perfect for casual wear", imgUrl: 'https://picsum.photos/400/500?random=4' },
  { id: 5, name: "Winter Boots", price: 120.00, category: "Boots", stock: "Out of Stock", description: "Warm and durable winter footwear", imgUrl: 'https://picsum.photos/400/500?random=5' },
  { id: 6, name: "Summer Sandals", price: 45.99, category: "Sandals", stock: "In Stock", description: "Lightweight and comfortable sandals", imgUrl: 'https://picsum.photos/400/500?random=6' },
];

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = allProducts.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Get related products (same category, excluding current product)
      const related = allProducts.filter(
        p => p.category === foundProduct.category && p.id !== foundProduct.id
      );
      setRelatedProducts(related);
    } else {
      navigate('/store'); // Redirect if product not found
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    // TODO: Implement cart logic (for now, just show alert)
    alert(`Added ${quantity} x ${product.name} to cart`);
  };

  if (!product) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.productDetailContainer}>
      {/* Product Detail Section */}
      <section className={styles.detailSection}>
        <div className={styles.imageWrapper}>
          <img src={product.imgUrl} alt={product.name} className={styles.mainImage} />
        </div>

        <div className={styles.infoWrapper}>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Category:</span>
              <span className={styles.value}>{product.category}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Price:</span>
              <span className={styles.value}>${product.price.toFixed(2)}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Availability:</span>
              <span className={`${styles.value} ${product.stock === 'In Stock' ? styles.inStock : styles.outOfStock}`}>
                {product.stock}
              </span>
            </div>
          </div>

          <div className={styles.cartSection}>
            <div className={styles.quantityControl}>
              <label htmlFor="quantity">Quantity:</label>
              <div className={styles.quantityInput}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <input 
                  id="quantity"
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <button 
              className={`${styles.addToCartBtn} ${product.stock === 'Out of Stock' ? styles.disabled : ''}`}
              onClick={handleAddToCart}
              disabled={product.stock === 'Out of Stock'}
            >
              {product.stock === 'Out of Stock' ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>

          <button className={styles.backBtn} onClick={() => navigate('/store')}>
            ← Back to Store
          </button>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className={styles.relatedSection}>
          <h2>Related Products</h2>
          <div className={styles.relatedGrid}>
            {relatedProducts.map(item => (
              <div 
                key={item.id} 
                className={styles.relatedProductCard}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <Product
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  imgUrl={item.imgUrl}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
