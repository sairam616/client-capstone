import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Cart/Cart.css'
import { getUserCartInfo } from '../../server/checkout-api';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { deleteProductFromCart, deleteAllProductsFromCart, updateProductQtyInCart } from '../../server/checkout-api';

function Cart() {
    const navigate = useNavigate();
    const [cart, setCart] = useState({ fetchCart: true });
    // const [count, setCount] = useState(0);
    const [cartLength, setCartLength] = useState(-1);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    useEffect(() => {
        let qty = 0, price = 0;
        getUserCartInfo().then(data => {
            setCart({ ...data, fetchCart: false });
            if (data.products) {
                for (const product of data.products) {
                    qty += product.quantity;
                    price += product.base_cost * product.quantity;
                }
            }
            setTotalQuantity(qty);
            setTotalPrice(price);
            setCartLength(data.products.length);
            console.log(data.products.length);
        }).catch((e) => console.error("Cannot retrieve, User Cart"));
    }, [setCart, cart.fetchCart, setTotalQuantity, setTotalPrice]);

    function doneUpdation(cartid, updatedQty) {
        console.log(updatedQty);
        setCurrentIndex(-1);
        updateProductQtyInCart({ cartid, updatedQty }).then(res => (setCart((...state) => ({ ...state, fetchCart: true }))))
    }
    function getSelectedQuantity(index) {
        return document.getElementById(`${index}-quantity`).value;
    }
    function updateQty(index) {
        setCurrentIndex(index);
    }
    function deleteProduct(product_id) {
        console.log(product_id);
        console.log({ product_id });
        deleteProductFromCart({ product_id }).then(res => (setCart((...state) => ({ ...state, fetchCart: true }))))
    }
    function deleteAllProducts() {
        deleteAllProductsFromCart().then(res => { setCart((state) => ({ ...state, fetchCart: true })) })
    }
    function handleCheckout() {
        navigate(`/checkout/${cart._id}`);
    }
    // console.log(cartLength);
    return (
        <div className="Cart-container">

            <Container fluid="md">
                <Row>
                    {cartLength > 0 &&
                        <>
                            <h1 className='Cart-header'>Shopping Cart</h1>
                            <Col xs={12} md={10}>
                                <h3>You have {totalQuantity} items in your Cart</h3>
                            </Col>
                            <Col xs={6} md={2}>
                                <Button variant="danger" onClick={() => deleteAllProducts()}>Empty Cart</Button>
                            </Col>
                        </>
                    }
                    {cartLength <= 0 &&

                        <Col xs={12} md={10}>
                            <h1 className='header2'>Your Cart is empty</h1>
                        </Col>
                    }
                </Row>
            </Container>

            {cart.products && cart.products.map((product, index) => {
                {/* console.log({index}); */ }
                {/* <CartItems product={p} index={i}/> */ }
                return (
                    <Container key={index} className='Cart-item'>

                        <Row className='Cart-mainrow'>
                            <Col md={3} className='Cart-col1'>
                                <img src={product.imageUrl} alt="order" width="250" height="230" />
                            </Col>
                            <Col md={9} className='Cart-col2'>
                                <Row >
                                    <span className='Cart-item-name'>
                                        <a href="#" >{product.productID.name}</a>
                                    </span>
                                </Row>
                                <Row>
                                    <span className='Cart-item-price'>${product.base_cost}</span>
                                </Row>
                                <Row >

                                    <Col xs={6} md={2}><h2>Qty: {product.quantity}</h2></Col>

                                    {currentIndex == index &&
                                        <Col xs={6} md={2}>
                                            <select select name="Cart-order-qty" id={`${index}-quantity`} defaultValue={product.quantity}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                            </select>
                                        </Col>
                                    }
                                    {currentIndex == index &&
                                        <Col xs={6} md={1}><Button variant='info' onClick={() => doneUpdation(product._id, getSelectedQuantity(index))} >done</Button></Col>
                                    }
                                    {/* </fieldset> */}
                                </Row>
                                <Row >
                                    <Col xs={6} md={1}><a href="#" onClick={() => deleteProduct(product._id)}>Delete</a></Col>
                                    <Col xs={6} md={1}><a href="#" onClick={() => updateQty(index)}>Update</a></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container >
                )
            })
            }
            {
                cartLength > 0 &&
                <>
                    <div className='Cart-pricefooter'>Total Price:${totalPrice}</div>
                    <div className='Cart-checkout'>
                        <Button variant='success' onClick={(() => handleCheckout())}>Proceed to Checkout</Button>
                    </div>
                </>
            }
        </div >
    );
};

export default Cart;
