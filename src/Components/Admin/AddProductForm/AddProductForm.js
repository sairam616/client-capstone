import { useState } from "react";
import { useParams } from "react-router-dom";
import { addProducts } from "../../../server/admin-api.js";
import Navigation from "../Management/Navigation/Navigation.js";
import "./AddProductForm.css";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useAlert } from "react-alert";
const AddProductForm = () => {
  const navigate = useNavigate();
  const alert = useAlert();
  const { id } = useParams();
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
  });
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
      categoryid: id,
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
    addProducts({ product })
      .then((res) => {
        console.log(res);
        navigate(-1);
        alert.show("Successfully Updated Category");
      })
      .catch((error) => console.error("Failed to upload products"));
  };

  return (
    <>
      <Navigation />

      <Container>
        <Row>
          <Col>
            <h1 className="header">Add New Category</h1>
          </Col>
        </Row>
      </Container>
      <form className="upload-form" onSubmit={(e) => onSubmit(e)}>
        <fieldset className="upload-item">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="size">Size:</label>
          <input
            type="number"
            name="size"
            value={size}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            value={color}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="shape">Shape</label>
          <input
            type="text"
            name="shape"
            value={shape}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            value={type}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="lenstype">Lens Type</label>
          <input
            type="text"
            name="lenstype"
            value={lenstype}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="imageUrl">Main display Image Link</label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="subImgLink1">subImgLink1</label>
          <input
            type="text"
            name="subImgLink1"
            value={subImgLink1}
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="subImgLink2">subImgLink2</label>
          <input
            type="text"
            name="subImgLink2"
            value={subImgLink2}
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="subImgLink3">subImgLink3</label>
          <input
            type="text"
            name="subImgLink3"
            value={subImgLink3}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="base_cost">Price</label>
          <input
            type="number"
            name="base_cost"
            value={base_cost}
            required
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            name="discount"
            value={discount}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="itemNo">itemNo</label>
          <input
            type="number"
            name="itemNumber"
            value={itemNumber}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor="quantity">InStock Quantity</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            required
            onChange={(e) => onChange(e)}
          />
        </fieldset>
        <div className="upload-btn-div">
          <button type="submit" className="upload-btn">
            Add Product
          </button>
        </div>
      </form>
    </>
  );
};

export default AddProductForm;
