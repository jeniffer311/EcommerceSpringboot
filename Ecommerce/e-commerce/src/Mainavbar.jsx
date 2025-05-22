import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import orginal from './assets/icon3.png'
function Mainavbar() {
  let user='jeniffer'
  const styles = {
  logo: {
    height: '50px',
    marginRight: '15px',
  }
};
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar">
      <Container fluid>
        <Navbar.Brand href="#"><img src={orginal} alt="Logo" style={styles.logo} />JR Shopper</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Mainhome">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
            <Nav.Link as={Link} to="/wishlist">WishList</Nav.Link>
            <Nav.Link as={Link} to="/query">Query</Nav.Link>
            <Nav.Link as={Link} to="/AddProducts">Add Products</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Button variant="outline-success" style={{borderRadius:'50%'}}>{user.slice(0,1)}</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mainavbar;