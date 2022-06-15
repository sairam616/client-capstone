import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap"
import AuthContext from '../../../Context/AuthContext/AuthContext';
import AdminContext from "../../../Context/AdminContext/AdminContext";
import { validateUser } from "../../../server/auth/authApi";

const Login = ({ signupText, loginAction, isLogin, handleTransitionToSignup, onValidationError }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { token, setToken } = useContext(AuthContext);
    const { adminToken, setAdminToken } = useContext(AdminContext);
    const navigate = useNavigate();
    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        validateUser(email, password).then((response) => {
            if (email === 'admin@bramptonoptician.ca' && password === "admin123") {
                if (response && response.data) {

                    localStorage.setItem('adminToken', response.data.token);
                    setAdminToken(localStorage.getItem('adminToken'));
                    navigate('/');
                }
            }
            else {
                if (response && response.data) {

                    localStorage.setItem('token', response.data.token);
                    setToken(localStorage.getItem('token'));
                    navigate('/');
                }
            }

        }).catch((error) => {
            if (error && error.response && error.response.data) {
                onValidationError(error.response.data);
            }
        })
    }

    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={(e) => onChange(e)} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={(e) => onChange(e)} placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="helpText">
                <p>New User? <a onClick={handleTransitionToSignup} aria-controls="signup-card" aria-expanded={!isLogin} className="pointer">{signupText}</a></p>
            </Form.Group>
            <Button variant="success" type="submit">
                {loginAction}
            </Button>
        </Form>
    )
}
export default Login;