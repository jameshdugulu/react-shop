import PropTypes from 'prop-types';


export function Product(props){


  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    Width: '30px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const imgStyle = {
    width: '100%',
    borderRadius: '4px',
    height: '200px'
  };

  const figureStyle ={
    width: '100%'
    
  }

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  return( 
  <>
      <article style={cardStyle}>
        <figure style={figureStyle}>
          <img src={props.imgUrl} alt={props.name} style={imgStyle} />
          <figcaption>{props.description}</figcaption>
        </figure>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <button style={buttonStyle}>Buy</button>
      </article>
  </>);
}

Product.propTypes={
  id: PropTypes.string,
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string

}