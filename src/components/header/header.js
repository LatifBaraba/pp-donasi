import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Dropdown, DropdownButton} from 'react-bootstrap'
import { LogOutOutline, PencilOutline } from 'react-ionicons'

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
                    <Nav.Link>
                        <DropdownButton
                            menuAlign="right"
                            title="Profile"
                            id="dropdown-menu-align-right"
                            className="btn-profile"
                        >
                            <Dropdown.Item eventKey="1">
                                <PencilOutline color={'#00000'} height="15px" width="15px" />
                                &nbsp; Edit Profile
                                </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">
                                <LogOutOutline color={'#00000'} height="15px" width="15px" />
                                &nbsp; Log Out
                            </Dropdown.Item>
                        </DropdownButton>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default header