import { useState, useEffect } from "react";
import { Product } from "../components/product";
import styles from './Store.module.css';

 function Estore() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 200]); // min 0, max 200
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const items = [
    { id: 1, name: "Premium Sneakers", price: 89.99, category: "Shoes", stock: "In Stock", description: "Comfortable and stylish sneakers", imgUrl: 'https://picsum.photos/200/300?random=1' },
    { id: 2, name: "Classic Shoes", price: 75.50, category: "Shoes", stock: "Out of Stock", description: "Elegant shoes for every occasion", imgUrl: 'https://picsum.photos/200/300?random=2' },
    { id: 3, name: "Running Shoes", price: 99.99, category: "Shoes", stock: "In Stock", description: "High-performance athletic footwear", imgUrl: 'https://picsum.photos/200/300?random=3' },
    { id: 4, name: "Casual Loafers", price: 65.00, category: "Shoes", stock: "In Stock", description: "Perfect for casual wear", imgUrl: 'https://picsum.photos/200/300?random=4' },
    { id: 5, name: "Winter Boots", price: 120.00, category: "Boots", stock: "Out of Stock", description: "Warm and durable winter footwear", imgUrl: 'https://picsum.photos/200/300?random=5' },
    { id: 6, name: "Summer Sandals", price: 45.99, category: "Sandals", stock: "In Stock", description: "Lightweight and comfortable sandals", imgUrl: 'https://picsum.photos/200/300?random=6' },
  ];

  // FILTERING FUNCTION
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    const matchesStatus = status === "All" || item.stock === status;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesStatus && matchesPrice;
  });

  return (
    <div className={styles.storeContainer}>
      {/* Mobile compact filters bar - visible on small screens */}
      <div className={styles.mobileFiltersBar}>
        <input
          type="text"
          className={styles.mobileSearch}
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search products"
        />
        
        {/* Selected Filter Options Display */}
        <div className={styles.selectedFilters}>
          <span className={styles.filterTag}>
            {category === "All" ? "All Categories" : category}
            {category !== "All" && <button className={styles.tagClose} onClick={() => setCategory("All")} title="Clear category">×</button>}
          </span>
          <span className={styles.filterTag}>
            {status === "All" ? "All Status" : status}
            {status !== "All" && <button className={styles.tagClose} onClick={() => setStatus("All")} title="Clear status">×</button>}
          </span>
          <span className={styles.filterTag}>
            {priceRange[1] === 200 ? "All Prices" : `$${priceRange[0]}-$${priceRange[1]}`}
            {priceRange[1] !== 200 && <button className={styles.tagClose} onClick={() => setPriceRange([0, 200])} title="Clear price">×</button>}
          </span>
        </div>

        <button
          className={styles.mobileFiltersBtn}
          onClick={() => setShowMobileFilters((s) => !s)}
          aria-expanded={showMobileFilters}
          aria-controls="store-filters"
        >
          Filters
        </button>
      </div>
      {(!isMobile || showMobileFilters) && (
        <aside id="store-filters" className={`${styles.sidebar} ${showMobileFilters ? styles.mobileOpen : ''}`}>
          <h2>Filters</h2>

          {/* Search */}
          <input 
            type="text" 
            placeholder="Search..." 
            className={styles.searchBar}
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />

          {/* Category */}
          <h3>Category</h3>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Shoes">Shoes</option>
            <option value="Boots">Boots</option>
            <option value="Sandals">Sandals</option>
          </select>

          {/* Status */}
          <h3>Status</h3>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="All">All</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          {/* Price Range */}
          <h3>Price Range</h3>
          <input 
            type="range" 
            min="0" 
            max="200" 
            value={priceRange[1]} 
            onChange={(e) => setPriceRange([0, Number(e.target.value)])} 
          />
          <p>${priceRange[0]} - ${priceRange[1]}</p>
        </aside>
      )}

      <main className={styles.productsArea}>
        {filteredItems.length > 0 ? (
          <div className={styles["products-grid"]}>
            {filteredItems.map(item => (
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
        ) : (
          <p>No products found.</p>
        )}
      </main>
    </div>
  );
}

export { Estore };