import spechome from "../../images/spec.png";
import { Link } from "react-router-dom";
const UpperBody = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="left-col">
          <p className="subhead">One stop for your spectacles</p>
          <h1>Best Selling Collections</h1>
          <div className="hero-cta">
            <div className="primary-cta">
              <Link to="browse">Buy Now</Link>
            </div>
            {/* <a href="#" className="primary-cta">
              Buy Now
            </a> */}
          </div>
        </div>
        <img src={spechome} className="hero-img" alt="illustration" />
      </div>
    </section>
  );
};

export default UpperBody;
