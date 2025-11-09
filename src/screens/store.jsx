import { Product } from "../components/product";

export function Store() {
  return (
    <div className="store">
      <h1>Our Store</h1>
      <div className="products-grid">
        {
        /* Product items will be added here */
         <Product name="Shop" price={100} description="two pairs of shoe" 
         imgUrl='https://picsum.photos/200/300'/>
        }
        <p>Products coming soon...</p>
      </div>
    </div>
  );
}
