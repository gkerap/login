import {Container, Row, Col} from 'react-bootstrap';
const Login = () => {
    return ( 
        <Container className='container'>
            <Row>
                <Col className='col-left'>
                    <Container className="login-container">
                        <img src='/image.jpg' alt='logo' className="img" />
                    </Container>
                </Col>
                <Col>right</Col>
            </Row>
        </Container>
     );
}
 
export default Login;