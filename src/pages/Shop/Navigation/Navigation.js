import "../Navigation/Navigation.css"
function ShopNavigation(props) {
    return (

        <div className="shopcontainer">
            <ul className="shopnav">
                <li className="shopNavLink">
                    <h4 className="shoplink" onClick={() => props.linkUpdated('sunglasses')}>Sunglasses</h4>
                </li>
                <li className="shopNavLink">
                    <h4 className="shoplink" onClick={() => props.linkUpdated('eyewear')}>Eyewear</h4>
                </li>
                <li className="shopNavLink">
                    <h4 className="shoplink" onClick={() => props.linkUpdated('lenses')}>Contact Lenses</h4>
                </li>
            </ul>
        </div>
    )
}
export default ShopNavigation;