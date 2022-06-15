import { useState } from 'react';
import { Card, Col, Fade, Row, Alert } from 'react-bootstrap';

import './Auth.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [validationError, setValidationError] = useState([]);
    const [invalidUser, setInvalidUser] = useState('');
    const loginText = "Log In";
    const signupText = "Sign Up";
    const loginAction = "Login";
    const signupAction = "Signup";

    const onValidationError = (err) => {
        if(Array.isArray(err.errors)) {
            setValidationError(err.errors);
            setInvalidUser('');
        } else {
            setValidationError([]);
            setInvalidUser(err.errors);
        }
        
    }

    const handleTransition = () => {
        setIsLogin(!isLogin);
        setValidationError([]);
        setInvalidUser('');
    }

    return (
        <div className='bg-photo min-vh-90'>
            <Row className="pt-5 pe-5">
                <Col xs={1} sm={7}></Col>
                <Col xs={11} sm={5}>
                    <Card className={isLogin ? '' : 'display-none'}>
                        <Fade in={isLogin}>
                            <div id="login-card">
                                <Card.Header>
                                    <h3>{loginText}</h3>
                                </Card.Header>
                                <Card.Body>
                                    {validationError.length > 0 &&
                                    <Alert variant="danger">
                                        <p>Please address the following errors: </p>
                                        <ul>
                                            {validationError.map((error, index) => {
                                                return (<li key={index}>{error.msg}</li>);
                                            })}
                                        </ul>
                                    </Alert>
                                    }
                                    {invalidUser.length > 0 &&
                                    <Alert variant="danger">
                                        <p>{invalidUser}</p>
                                    </Alert>
                                    }
                                    <Login signupText={signupText} loginAction={loginAction} isLogin={isLogin} handleTransitionToSignup={handleTransition} onValidationError={onValidationError} />
                                </Card.Body>
                            </div>
                        </Fade>
                    </Card>    
                    <Card className={isLogin ? 'display-none' : ''}>
                        <Fade in={!isLogin}>
                            <div id="signup-card">
                                <Card.Header>
                                    <h3>{signupText}</h3>
                                </Card.Header>
                                <Card.Body>
                                    {validationError.length > 0 &&
                                    <Alert variant="danger">
                                        <p>Please address the following errors: </p>
                                        <ul>
                                            {validationError.map((error, index) => {
                                                return (<li key={index}>{error.msg}</li>);
                                            })}
                                        </ul>
                                    </Alert>
                                    }
                                    {invalidUser.length > 0 &&
                                    <Alert variant="danger">
                                        <p>{invalidUser}</p>
                                    </Alert>
                                    }
                                    <Signup loginText={loginText} signupAction={signupAction} isLogin={isLogin} handleTransitionToLogin={handleTransition} onValidationError={onValidationError} />
                                </Card.Body>
                            </div>
                        </Fade>   
                    </Card>         
                </Col>
            </Row>
        </div>
    )
}

export default Auth;