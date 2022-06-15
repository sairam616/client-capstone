import exitImage from "../../images/exit.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import AdminContext from "../../Context/AdminContext/AdminContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const { token, setToken } = useContext(AuthContext);
  const { adminToken, setAdminToken } = useContext(AdminContext);

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminToken");
    setToken(null);
    setAdminToken(null);
    navigate("/");
  };
  return (
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="browse">Shop</Link>
            </li>
            <li>
              <a
                rel={"external"}
                href={"https://bramptonsmainoptician.setmore.com/"}
                target="_blank"
              >
                Book Appointment
              </a>
            </li>
          </ul>
          <ul className="secondary-nav">
            {!adminToken && (
              <li>
                <Link to="contact">Contact</Link>
              </li>
            )}

            {token && (
              <>
                <li>
                  <Link to="orders">MyOrders</Link>
                </li>
                <li>
                  <Link to="cart">
                    <FontAwesomeIcon icon={faShoppingCart} />{" "}
                  </Link>
                </li>
              </>
            )}

            {adminToken && (
              <>
                {/* <li>
                  <Link to="sales">Sales Management</Link>
                </li>
                <li>
                  <Link to="upload">Upload</Link>
                </li> */}
                <li>
                  <Link to="admin">Management</Link>
                </li>
              </>
            )}

            {token || adminToken ? (
              <li onClick={handleLogoutClick}>
                Logout <FontAwesomeIcon icon={faPowerOff} />
              </li>
            ) : (
              <li>
                <Link to="/auth">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navigation;
