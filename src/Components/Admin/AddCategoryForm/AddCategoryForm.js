import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { addCategory } from '../../../server/admin-api';
import './AddCategoryForm.css';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Management/Navigation/Navigation';
import { useAlert } from 'react-alert'
const AddCategoryForm = () => {
    const alert = useAlert();
    const navigate = useNavigate();
    function handleSales() {
        navigate(`/admin/sales`);
    };
    function handleCategories() {
        navigate(`/admin/category`);
    };
    function handleHome() {
        navigate(`/admin`);
    }

    const [formData, setFromDate] = useState({
        parent: "",
        name: "",
        description: "",
        imageUrl: "",
    });
    const { parent, name, description, imageUrl } = formData;

    const onChange = (e) => {
        setFromDate({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        console.log("Parent Name is:", parent.value);
        e.preventDefault();
        let category = {
            parent: parent,
            name: name,
            description: description,
            imageUrl: imageUrl,
        };

        addCategory({ category }).then(resp => {
            alert.show("Successfully Updated Category");
            navigate(-1);
        }).catch(err => console.err("Failed to upload Category"));
    };
    return (
        <>
            <Navigation handleHome={handleHome}
                handleCategories={handleCategories}
                handleSales={handleSales} />
            <Container>
                <Row>
                    <Col>
                        <h1 className='header'>Add New Category</h1>
                    </Col>
                </Row>
            </Container>
            <form className="upload-form" onSubmit={(e) => onSubmit(e)}>
                <fieldset className="upload-item">
                    <label htmlFor="parent">Main Category:</label>
                    <select
                        className="form-select select-mini" name="parent"
                        value={parent} onChange={(e) => onChange(e)}>
                        <option disabled>Choose Main Parent</option>
                        <option value="sunglasses">sunglasses</option>
                        <option value="eyewear">eyewear</option>
                        <option value="lenses">lenses</option>
                    </select>

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
                        name="description"
                        value={description}
                        required
                        onChange={(e) => onChange(e)}
                    />
                    <label htmlFor="imageUrl">Display Image:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={imageUrl}
                        required
                        onChange={(e) => onChange(e)}
                    />
                </fieldset>
                <div className="upload-btn-div">
                    <button type="submit" className="upload-btn">
                        Add Category
                    </button>
                </div>
            </form>
        </>

    );
}

export default AddCategoryForm;