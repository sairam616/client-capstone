import { Card, Row, Col } from "react-bootstrap";
import "./Item.css";
function ItemDetail(props) {
  console.log("props item", props);
  return (
    <Col md={4} className="p-2">
      <Card border="light" style={{ width: "20rem", height: "25rem" }}>
        <Card.Img
          variant="top"
          src={props.imageUrl}
          className="product-item-card_img"
        />
        <Card.Body>
          <Card.Link
            href="#"
            onClick={() => props.navigateToProductDetails(props["_id"])}
          >
            {props.name}
          </Card.Link>
          <Card.Subtitle className="mb-3 text-muted">
            ${props.base_cost}
          </Card.Subtitle>
          <Card.Text>
            Looking to get back in shape? Discover top quality aerobic training
            machines
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemDetail;
