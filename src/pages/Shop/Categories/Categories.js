import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { CatelogueContext } from '../../../Context/CatelogueContext/CatelogueContext';
import { getCategoriesByName } from '../../../server/catalogue-api';
import SpinnerComponent from '../../../Components/Spinner/Spinner';

function Categories(props) {
    const navigate = useNavigate();
    const { state, setState } = useContext(CatelogueContext);

    useEffect(() => {
        getCategoriesByName(props.categoryname)
            .then(categories => setState((state) => ({ ...state, categories, products: [] })))
    }, [setState, props.categoryname]);

    function navigateToCategory(id) {
        navigate(`category/${id}`);
    }

    if (state.categories.length === 0) {
        return <SpinnerComponent />
    }
    return (
        <>

            <Row xs={1} md={4} className="g-4">
                {state.categories.map(c => (<Col sm key={c['_id']}>
                    <Card style={{ width: '20rem', height: '25rem' }}>
                        <Card.Img variant="top" src={c.imageUrl} style={{ width: '320px', height: '240px' }} />
                        <Card.Body>
                            <Card.Title>{c.name}</Card.Title>
                            <Card.Text>{c.description}</Card.Text>
                            <Button variant="dark" size="sm" onClick={navigateToCategory.bind(null, c['_id'])}>Browse</Button>
                        </Card.Body>
                    </Card>
                </Col>)
                )}
            </Row>
        </>
    )
}

export default Categories;