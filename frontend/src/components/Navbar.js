import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div className="navbar">
      <div id="left-menu">

        <Link to="add-category">
          <button className="left-menu">NEW CATEGORY</button>	
        </Link>&nbsp;	&nbsp;

        <Link to="add-item">
          <button className="left-menu">NEW ITEM</button>
        </Link>
      </div>

      <div className="mainButton">
        <Link to="/"> 
          <button className="mainButton">VEEBILEHT</button>
        </Link>
      </div>

      <div className="right-menu">
        <Link to="cart">
          <img className="cart" src="shopping-bag.svg" alt=""/>
        </Link>
      </div>
      
      
    </div>
  )
}


export default Navbar;