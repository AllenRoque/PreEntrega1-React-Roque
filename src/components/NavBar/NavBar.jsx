import { Container, Nav, Navbar } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#inicio">TOPOEQUIPOS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#est-totales">EST. TOTALES</Nav.Link>
            <Nav.Link href="#gnss">GNSS</Nav.Link>
            <Nav.Link href="#drones">DRONES</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar> 
    )
}

export default NavBar 