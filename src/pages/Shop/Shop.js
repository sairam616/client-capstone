import Categories from './Categories/Categories';
import { Container } from 'react-bootstrap';
import ShopNavigation from './Navigation/Navigation';
import { useState } from 'react';
function Shop() {
    const text = window.location.pathname;
    const myArray = text.split("/");
    const [cName, setCname] = useState(myArray[2] || "sunglasses");
    function linkUpdated(name) {
        console.log("Update Link:", name);
        setCname(name);
    }

    return (
        <>
            <ShopNavigation linkUpdated={linkUpdated} />
            <Container fluid className="p-3">
                <Categories
                    categoryname={cName}
                />
            </Container>
        </>
    )
}

export default Shop;