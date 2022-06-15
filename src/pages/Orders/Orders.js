import "../Orders/Orders.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrdersInfo } from "../../server/orders-api";
import { addProductToCart } from "../../server/checkout-api";
import jwtDecode from "jwt-decode";
import { useAlert } from "react-alert";
function Orders() {
  const alert = useAlert();
  const navigate = useNavigate();
  const [orders, setOrders] = useState({});
  // const [search, setSearch] = useState(false);
  const token = localStorage.getItem("token");

  const decodeddata = jwtDecode(token);

  useEffect(() => {
    getOrdersInfo()
      .then((data) => {
        setOrders(data);
      })
      .catch((e) => console.error("Cannot retrieve, User Orders"));
  }, [setOrders]);

  function handleBuyAgain(productID, quantity, imageUrl, base_cost) {
    addProductToCart({
      productID: productID._id,
      quantity,
      imageUrl,
      base_cost,
    }).then((res) => navigate(`/cart`));
  }
  function handleReturnReplace() {
    alert.show("Please raise a request using contact form");
  }
  return (
    <div className="orders-container">
      {orders.order &&
        orders.order.map((product, index) => {
          return (
            <Container className="orders-table" key={index}>
              <Row className="orders-row">
                <Col md={3} className="col1">
                  <img
                    src={product.imageUrl}
                    alt="order1"
                    width="250"
                    height="200"
                  />
                </Col>
                <Col md={6} className="col2">
                  <Row className="order-item-name">
                    <a href="#">{product.productID.name}</a>
                  </Row>
                  <Row className="order-item-address">
                    <a href="#">Shipped to {decodeddata.user.name}</a>
                  </Row>
                  <Row className="order-item-delivery">
                    <h4>Delivery is {orders.status}</h4>
                  </Row>
                </Col>
                <Col md={2} className="col3">
                  <Row>
                    <Button
                      variant="success"
                      onClick={() =>
                        handleBuyAgain(
                          product.productID,
                          product.quantity,
                          product.imageUrl,
                          product.base_cost
                        )
                      }
                    >
                      Buy it Again
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      variant="success"
                      onClick={() => handleReturnReplace()}
                    >
                      Return or Replace Item
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Container>
          );
        })}
      {!orders.order && <h1>There are no orders</h1>}
    </div>
  );
}

export default Orders;
