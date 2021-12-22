import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap'
import { LogOutOutline, PencilOutline, AiOutlineHistory, TimeOutline, HeartOutline } from 'react-ionicons'
import { Link } from 'react-router-dom';
import { fetchLogout } from "../../Redux/auth/login/actions";
import { useDispatch } from 'react-redux';
import LogoAyoKitaPeduli from "../../assets/images/logo.png"

const Header = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    const logout = () => {
        // history.push(`${process.env.PUBLIC_URL}/dashboard`);
        dispatch(fetchLogout(token))
    }

    return (
        <Navbar sticky="top" expand="lg">
            <Navbar.Brand href="/dashboard"><img src={LogoAyoKitaPeduli} style={{ width: '25%' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {/* <Nav.Link href="#features">Contact</Nav.Link>
                    <Nav.Link href="#pricing">Legal</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link> */}
                    {username ?
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
                                <Dropdown.Item eventKey="2"> 
                                    <Link to="/myfundraiser" style={{ color: "#212529" }}>
                                        <HeartOutline color={'#00000'} height="15px" width="15px" />
                                      &nbsp; Galang Dana Saya
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2"> 
                                    <Link to="/history" style={{ color: "#212529" }}>
                                        <TimeOutline color={'#00000'} height="15px" width="15px" />
                                      &nbsp; History
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="3">
                                    <LogOutOutline color={'#00000'} height="15px" width="15px" />
                                &nbsp; <a onClick={() => { logout() }}>Log out</a>
                                </Dropdown.Item>

                            </DropdownButton>
                        </Nav.Link>
                        : 
                        <Nav.Link href="#"><Link
                            to={{
                            pathname: "/login",
                            state: { data: "kosong" },
                            }}
                            className="mr-2"
                        >Login
                        </Link></Nav.Link>
                        // <Link
                        //     to={{
                        //     pathname: "/login",
                        //     state: { data: "kosong" },
                        //     }}
                        //     className="mr-2"
                        // >Login
                        // </Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header