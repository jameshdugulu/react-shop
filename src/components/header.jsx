

import { Link } from 'react-router-dom'

export function Headers(){
  return(
    <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><button>Login</button></li>
        </ul>
      </nav>
  );
}