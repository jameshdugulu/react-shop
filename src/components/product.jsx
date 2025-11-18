import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './product.module.css';


export function Product(props){
const [isHovered, setIsHovered] = useState(false);
const navigate = useNavigate();

const handleProductClick = () => {
  if (props.id) {
    navigate(`/product/${props.id}`);
  }
};

  return( 
  <>
      <div className={`${styles.card} ${isHovered ? styles.cardHovered : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleProductClick}
        style={{ cursor: props.id ? 'pointer' : 'default' }}>
        <figure className={styles.figure}>
          <img src={props.imgUrl} alt={props.name} className={styles.img} />
          <figcaption className={styles.figcaption}>{props.description}</figcaption>
        </figure>
        <h2 className={styles.title}>{props.name}</h2>
        <h3 className={styles.price}>${props.price}</h3>
        <button className={styles.button} onClick={(e) => { e.stopPropagation(); }}>Buy</button>
      </div>
  </>);
}

Product.propTypes={
  id: PropTypes.string,
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string

}