import { useState } from 'react';
import { Accordion, Button, Form, Nav } from 'react-bootstrap';
import { updateAddressSelection } from '../../utils/app-utils';

function AddressList({ addresses, addressSelected }) {
    const [list, setList] = useState({ initial: addresses, current: addresses });

    function handleAddressSelection(index) {
        addressSelected(index);
        const updatedList = updateAddressSelection(list.initial, index);
        console.log(list);
        setList((state) => ({
            ...state,
            current: updatedList
        }))
    }

    if (!list.initial || list.initial.length === 0) {
        return (<></>);
    }
    return (
        <>{list.current.map((l, i) => <Accordion.Item key={i} eventKey={`${i}`}>
            <Accordion.Header>{l.city} <Nav.Link onClick={(e) => handleAddressSelection(i)} href="#">(Choose)</Nav.Link></Accordion.Header>
            <Accordion.Body>
                <p><b>{l.country}</b></p>
                <i>{l.line1}</i>
                <p><b>{l.pincode}</b></p>
            </Accordion.Body>
        </Accordion.Item>)}</>
    )
}

function AddNewAddressAccordin({ eventKeyVal, onNewAddress }) {
    const [newAddress, setNewAddress] = useState({});

    function handleSubmit(event) {
        onNewAddress(newAddress);
        event.target.reset();
        event.preventDefault();
    }

    function handleChange(e) {
        const keyName = e.target.getAttribute('name');
        setNewAddress((state) => ({ ...state, [keyName]: e.target.value }));
    }

    return (<Accordion.Item eventKey={eventKeyVal}>
        <Accordion.Header>Add New Address</Accordion.Header>
        <Accordion.Body>
            <Form onSubmit={handleSubmit}>
                <fieldset disabled={false}>
                    <Form.Group className="mb-3" controlId="formCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control required name='country' type="text" placeholder="Enter Country" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control required name='city' type="text" placeholder="Enter City" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPincode">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control required name='pincode' type="text" placeholder="Enter Pincode" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLine1">
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control required name='line1' type="text" placeholder="Enter Address/Apart/Suite" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formLine2">
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control name='line2' type="text" placeholder="" onChange={handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </fieldset>
            </Form>
        </Accordion.Body>
    </Accordion.Item>)
}

function Addresses({ addresses, onNewAddress, onAddressSelection }) {
    return (
        <>
            <Accordion>
                <AddressList addresses={addresses} addressSelected={onAddressSelection} />
                <AddNewAddressAccordin eventKeyVal={`${addresses.length}`} onNewAddress={onNewAddress} />
            </Accordion>
        </>
    )
}

export default Addresses;