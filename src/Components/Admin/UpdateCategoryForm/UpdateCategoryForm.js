import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { updateCategory, getCategoryById } from '../../../server/admin-api';
import Navigation from '../Management/Navigation/Navigation';
import { useAlert } from 'react-alert'
const UpdateCategoryForm = () => {

    const { id } = useParams();
    const alert = useAlert();
    const [Category, setCategory] = useState({})
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        imageUrl: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getCategoryById(id).then(category => {
                setCategory(category)
                setFormData({
                    parent: category.parent,
                    name: category.name,
                    description: category.description,
                    imageUrl: category.imageUrl,
                })
            }).catch(err => console.error(err));
        }
    }, [id, setCategory]);

    const { parent, name, description, imageUrl } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        let category = {
            id: id,
            parent: parent,
            name: name,
            description: description,
            imageUrl: imageUrl,
        };
        console.log(category);
        updateCategory({ category }).then(resp => {
            console.log("Update Category Data is:", resp);
            navigate(-1);
            alert.show("Successfully Updated Category");
        }).catch(err => console.err("Failed to upload Category"));
    };


    return (

        <>

            <Navigation />
            <Container>
                <Row>
                    <Col>
                        <h1>Update Category</h1>
                    </Col>
                </Row>
            </Container>
            <form className="upload-form" onSubmit={(e) => onSubmit(e)}>
                <fieldset className="upload-item">
                    <label htmlFor="parent">Main Category:</label>
                    <input
                        type="text"
                        name="parent"
                        value={formData.parent}
                        required
                        onChange={(e) => onChange(e)}
                    />
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
                        name="description"
                        value={formData.description}
                        required
                        onChange={(e) => onChange(e)}
                    />
                    <label htmlFor="imageUrl">Display Image:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        required
                        onChange={(e) => onChange(e)}
                    />
                </fieldset>
                <div className="upload-btn-div">
                    <button type="submit" className="upload-btn">
                        Update Category
                    </button>
                </div>
            </form>
        </>

    );
}

export default UpdateCategoryForm;