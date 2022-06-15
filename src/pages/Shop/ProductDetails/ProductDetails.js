import React, { useEffect, useState } from "react";
import ProductImage from "./Sections/ProductImage/ProductImage";
import ProductInfo from "./Sections/ProductInfo/ProductInfo";
import { Col, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { getProductDetailsById } from "../../../server/catalogue-api";
import { addProductToCart } from "../../../server/checkout-api";
import { useAlert } from "react-alert";
function ProductDetails(props) {
  const alert = useAlert();
  const navigate = useNavigate();
  const { productid } = useParams();
  const [Product, setProduct] = useState([]);
  const [showToast, setToastVisibility] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (productid) {
      getProductDetailsById(productid)
        .then((p) => {
          setProduct(p);
          //setting the product details retreived from the database
        })
        .catch((e) => {
          //Failed to add to cart
        });
    }
  }, [productid]);

  function buyProduct(productID, quantity, imageUrl, base_cost) {
    //Add and Redirect to checkout page
    if (!token) {
      alert.show("Please Register or Sign in To Continue");
    }
    addProductToCart({ productID, quantity, imageUrl, base_cost })
      .then((resp) => {
        console.log("Product Added to Cart", resp);
        navigate(`/checkout/${resp.cartID}`);
      })
      .catch((e) => console.error("Failed to Create Cart"));
  }

  function addProduct(productID, quantity, imageUrl, base_cost) {
    //Just add to current cart
    if (!token) {
      alert.show("Please Register or Sign in To Continue");
    }
    addProductToCart({ productID, quantity, imageUrl, base_cost })
      .then((resp) => {
        setToastVisibility(true);
      })
      .catch((e) => {
        //Failed to add to cart
      });
  }

  return (
    <>
      <div className="postPage" style={{ width: "100%", padding: "3rem 4rem" }}>
        <div>
          <h1>{Product.name}</h1>
        </div>
        <Row>
          <Col lg={6} xs={12}>
            <ProductImage detail={Product} />
          </Col>
          <Col lg={6} xs={12}>
            <ProductInfo
              detail={Product}
              buyProduct={buyProduct}
              addProductToCart={addProduct}
            />
          </Col>
        </Row>
      </div>

      <ToastContainer className="p-3" position={"bottom-end"}>
        <Toast
          delay={2500}
          show={showToast}
          onClose={() => setToastVisibility(false)}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Cart</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body>Product Added To Cart Successfully</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default ProductDetails;
