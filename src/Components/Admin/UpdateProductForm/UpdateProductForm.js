import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { updateProduct } from "../../../server/admin-api";
import { getProductDetailsById } from "../../../server/catalogue-api";
import { useNavigate } from "react-router-dom";
import Navigation from "../Management/Navigation/Navigation";
import { useAlert } from "react-alert";
import "../Styles/ManagementPagesStyles.css";
const UpdateProductForm = () => {
  const alert = useAlert();
  const { productid } = useParams();
  const [Product, setProduct] = useState({});
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    size: "",
    color: "",
    type: "",
    shape: "",
    gender: "",
    lenstype: "",
    imageUrl: "",
    subImgLink1: "",
    subImgLink2: "",
    subImgLink3: "",
    base_cost: "",
    discount: "",
    itemNumber: "",
    quantity: "",
  });
  useEffect(() => {
    if (productid) {
      getProductDetailsById(productid)
        .then((product) => {
          setProduct(product);
          setFormData({
            name: product.name,
            description: product.description,
            size: product.size,
            color: product.color,
            type: product.type,
            shape: product.shape,
            gender: product.gender,
            lenstype: product.lenstype,
            imageUrl: product.imageUrl,
            subImgLink1: product.subImgLink1,
            subImgLink2: product.subImgLink2,
            subImgLink3: product.subImgLink3,
            base_cost: product.base_cost,
            discount: product.discount,
            itemNumber: product.itemNumber,
            quantity: product.quantity,
          });
        })
        .catch((err) => console.error(err));
    }
  }, [productid, setProduct]);

  console.log(Product);

  const {
    name,
    description,
    size,
    color,
    type,
    shape,
    gender,
    lenstype,
    imageUrl,
    subImgLink1,
    subImgLink2,
    subImgLink3,
    base_cost,
    discount,
    itemNumber,
    quantity,
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let product = {
      productid: productid,
      name: name,
      description: description,
      size: size,
      color: color,
      type: type,
      shape: shape,
      gender: gender,
      lenstype: lenstype,
      imageUrl: imageUrl,
      subImgLink1: subImgLink1,
      subImgLink2: subImgLink2,
      subImgLink3: subImgLink3,
      base_cost: base_cost,
      discount: discount,
      itemNumber: itemNumber,
      quantity: quantity,
    };
    updateProduct({ product })
      .then((resp) => {
        console.log("Update Product Data is:", resp);
        alert.show("Successfully Updated Product");
        navigate(-1);
      })
      .catch((err) => console.err("Failed to upload Product"));
  };

  return (
    <>
      <Navigation />

      <Container>
        <Row>
          <Col>
            <h1 className="update-product-heading">Update Product</h1>
          </Col>
        </Row>
      </Container>
      <form className="upload-form" onSubmit={(e) => onSubmit(e)}>
        <fieldset className="upload-item">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="size">Size:</label>
          <input
            type="number"
            name="size"
            value={formData.size}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="shape">Shape</label>
          <input
            type="text"
            name="shape"
            value={formData.shape}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="lenstype">Lens Type</label>
          <input
            type="text"
            name="lenstype"
            value={formData.lenstype}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="imageUrl">Main display Image Link</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="subImgLink1">subImgLink1</label>
          <input
            type="text"
            name="subImgLink1"
            value={formData.subImgLink1}
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="subImgLink2">subImgLink2</label>
          <input
            type="text"
            name="subImgLink2"
            value={formData.subImgLink2}
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="subImgLink3">subImgLink3</label>
          <input
            type="text"
            name="subImgLink3"
            value={formData.subImgLink3}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="base_cost">Price</label>
          <input
            type="number"
            name="base_cost"
            value={formData.base_cost}
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="itemNo">itemNo</label>
          <input
            type="number"
            name="itemNo"
            value={formData.itemNumber}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="quantity">InStock Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            required
            onChange={(e) => onChange(e)}
          />
        </fieldset>
        <div className="upload-btn-div">
          <button type="submit" className="upload-btn">
            Update Product
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateProductForm;
