import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StyledButtons } from '../StyledButtons/StyledBtn'
import { FaUser } from "react-icons/fa";

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="col-12 Mynavbar" variant="white">
            <Container fluid>
                <Navbar.Brand href="#">ELGOHARY</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Coming Soon</Nav.Link>
                        <Nav.Link href="#action2">This Month</Nav.Link>


                    </Nav>
                    <Form className="d-flex">
                        {/* <Nav.Link href="#action2"><FaUser className='fs-3 me-5 mt-2 text-dark' /></Nav.Link> */}
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <StyledButtons>Search</StyledButtons>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;