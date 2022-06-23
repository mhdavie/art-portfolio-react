import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">

                    <Container>

                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>

                        <Nav className="me-auto">

                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>

                    </Container>
                </Navbar>
                
            </div>
        );
    }
}

export default Home;