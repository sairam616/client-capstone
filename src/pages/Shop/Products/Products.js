import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

import ItemDetail from './Item';
import { CatelogueContext } from '../../../Context/CatelogueContext/CatelogueContext';
import { getProductsByCategory } from '../../../server/catalogue-api';

function Products() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { state, setState } = useContext(CatelogueContext);

    useEffect(() => {
        if (id) {
            getProductsByCategory(id)
                .then(products => setState((state) => ({
                    ...state,
                    products,
                    categoryId: id
                })))
        }
    }, [setState, id])

    function navigateToProductDetails(productID) {
        navigate(`product/${productID}`);
    }
    return (
        <Container fluid className="p-5">

            <Row xs={2} md={4} className="g-4">
                {state.products.map(p => <ItemDetail {...p}
                    key={p['_id']}
                    navigateToProductDetails={navigateToProductDetails}
                />
                )}
            </Row>
        </Container>
    )
}

export default Products;