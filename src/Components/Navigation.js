
import exitImage from '../images/exit.svg';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
<div className="navbar">
        <div className="container">
          <a href="#" className="logo">
            {" "}
            BRAMPTON'S MAIN <span>OPTICIANS</span>{" "}
          </a>
          <img
            id="mobile-cta"
            className="mobile-menu"
            src={exitImage}
            alt="open navigation"
          />
          <nav>
            <img
              src={exitImage}
              className="mobile-menu-exit"
              id="mobile-exit"
              alt="close navigation"
            />
            <ul className="primary-nav">
              <li className="current">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="shop">Shop</Link>
              </li>
              <li>
                <Link to="appointment">Book Appointment</Link>
              </li>
            </ul>
            <ul className="secondary-nav">
              <li>
                <Link to="contact">Contact</Link>
              </li>
              <li>
                <Link to="sales">Sales Management</Link>
              </li>
              <li className="go-premium-cta">
                <Link to="cart">My Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
};
    export default Navigation;