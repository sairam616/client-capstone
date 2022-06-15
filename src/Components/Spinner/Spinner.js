import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import './Spinner.css';

function SpinnerComponent() {
    return (
        <Container fluid className="p-3">
            <Spinner animation="border" role="status" className='tc-spinner'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}

export default SpinnerComponent;