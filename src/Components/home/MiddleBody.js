import holdingPhoneImage from "../../images/holding-phone.jpg";
const MiddleBody = () => {
    return(
        <section className="features-section">
                <div className="container">
                <ul className="features-list">
                    <li>Varsatile Collection</li>
                    <li>Best Quality</li>
                    <li>Precise Finishing</li>
                    <li>Great Discounts</li>
                    <li>Easy Return</li>
                    <li>Satisfactory Service</li>
                </ul>
                <img src={holdingPhoneImage} alt="man holding phone" />
                </div>
            </section>
    );
};

export default MiddleBody;