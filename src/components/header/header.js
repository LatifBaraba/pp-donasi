import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar} from 'react-bootstrap'

const header = () => {
    return (
        <Navbar sticky="top" expand="lg">
            <Navbar.Brand href="#home">Pemuda Peduli</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#features">Contact</Nav.Link>
                    <Nav.Link href="#pricing">Legal</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default header