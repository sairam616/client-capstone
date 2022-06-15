import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';

import "./ProductInfo.css";

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])
    function getSelectedQuantity() {
        return document.getElementById(`${Product._id}-quantity`).value;
    }

    return (
        <Container title="Product Info">
            <Row>
                <Col>Price</Col>
                <Col>${Product.base_cost}</Col>
            </Row>
            <Row>
                <Col>Discount</Col>
                <Col>{Product.discount}%</Col>
            </Row>
            <Row>
                <Col>Size</Col>
                <Col>{Product.size}</Col>
            </Row>
            <Row>
                <Col>Color</Col>
                <Col>{Product.color}</Col>
            </Row>
            <Row>
                <Col>Type</Col>
                <Col>{Product.type}</Col>
            </Row>
            <Row>
                <Col>Shape</Col>
                <Col>{Product.shape}</Col>
            </Row>
            <Row>
                <Col>Gender</Col>
                <Col>{Product.gender}</Col>
            </Row>
            <Row>
                <Col>Lens Type</Col>
                <Col>{Product.lenstype}</Col>
            </Row>
            <Row>
                <Col>Description</Col>
                <Col>{Product.description}</Col>
            </Row>
            <Button variant="success" onClick={() => props.buyProduct(Product._id, getSelectedQuantity(), Product.imageUrl, Product.base_cost)}>Buy Now</Button>
            <Button variant="info" onClick={() => props.addProductToCart(Product._id, getSelectedQuantity(), Product.imageUrl, Product.base_cost)}>Add to Cart</Button>
            <select
                className="form-select select-mini"
                id={`${Product._id}-quantity`}
                defaultValue={"1"}
            >
                <option disabled>Choose Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </Container>

    )
}

export default ProductInfo
