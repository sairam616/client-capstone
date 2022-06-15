import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../../../server/auth/authApi";
import AuthContext from '../../../Context/AuthContext/AuthContext';
const Signup = ({ loginText, signupAction, isLogin, handleTransitionToLogin, onValidationError }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { token, setToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const { name, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password
        }
        signupUser(data).then((response) => {
            if (response && response.data) {
                localStorage.setItem('token', response.data.token);
                setToken(localStorage.getItem('token'));
                alert("Successfully Registered!");
                //Navigate to login page
            }
        }).catch((error) => {
            if (error && error.response && error.response.data) {
                onValidationError(error.response.data);
            }
        })
    }

    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="name" value={name} placeholder="Enter full name" onChange={(e) => onChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={email} placeholder="Enter email" onChange={(e) => onChange(e)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} placeholder="Enter Password" onChange={(e) => onChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="helpText">
                <p>Existing User? <a onClick={handleTransitionToLogin} aria-controls="login-card" aria-expanded={isLogin} className="pointer">{loginText}</a></p>
            </Form.Group>
            <Button variant="success" type="submit">
                {signupAction}
            </Button>
        </Form>
    )
}

export default Signup;