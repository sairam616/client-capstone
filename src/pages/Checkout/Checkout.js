import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { addNewUserAddress, getCartBillDetails, getUserAddresses, updateAddressIDForCart, updateProductStockQty } from '../../server/checkout-api';
import SpinnerComponent from '../../Components/Spinner/Spinner';
import Addresses from './Address';
import { Card } from 'react-bootstrap';
import { addCartToOrders } from '../../server/orders-api';
import { deleteAllProductsFromCart } from '../../server/checkout-api';

function Checkout() {
    const { cartID } = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState({
        addresses: [],
        isLoading: true,
        newAddressAdded: false,
        deliveryAddressIndex: -1
    });

    const [bill, setBill] = useState({ qty: null, tax: null, totalCost: null });

    useEffect(() => {
        getCartBillDetails().then((data) => setBill(data));
    }, []);

    useEffect(() => {
        getUserAddresses()
            .then(data => {
                setState((st) => ({ ...st, addresses: data, isLoading: false, newAddressAdded: false }))
            });
    }, [state.newAddressAdded]);

    function onNewAddressSubmit(data) {
        addNewUserAddress({ location: data })
            .then(() => setState((st) => ({ ...state, newAddressAdded: true, isLoading: true })))
            .catch(e => console.error("Cannot Save New Address"));
    }

    function onAddressSelected(index) {
        setState((st) => ({ ...st, deliveryAddressIndex: index }));
    }

    function onProceed() {
        if (state.deliveryAddressIndex < 0) {
            alert("Please Choose Address for Delivery");
            return;
        }
        const data = { addressID: state.addresses[state.deliveryAddressIndex]['_id'] };
        updateAddressIDForCart(data);
        addCartToOrders({ cartID }).then(() => {
            updateProductStockQty(cartID).then(() => deleteAllProductsFromCart().then(res => {
                navigate('/orders')
                console.log("Checkout Completed, Cart id Emptied")
            }))
        });

    }

    return (
        <Container fluid className="p-3">
            <h1 className="header text-center">Checkout</h1>
            <Container fluid className="p-3">
                <h4> Choose Delivery </h4>
                {state.isLoading ? <SpinnerComponent /> : <Addresses addresses={state.addresses} onNewAddress={onNewAddressSubmit} onAddressSelection={onAddressSelected} />}
                <hr />

                <h4> Enter Payment Details</h4>
                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="16" placeholder="xxxx - xxxx - xxxx - xxxx" />
                </Form.Group>
                <hr />

                <h4> Review Bill Details</h4>
                <Card body>
                    <p>Total Items: {bill.qty}</p>
                    <p style={{ color: 'red' }}>Tax: {bill.tax}</p>
                    <p style={{ color: 'blue' }}>Final Amount: {bill.totalCost}</p>
                </Card>
                <hr />
                <Button variant="primary" onClick={onProceed}>Confirm Bill</Button>{' '}
            </Container>
        </Container>
    )
}

export default Checkout;