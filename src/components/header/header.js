import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar, Dropdown, DropdownButton, NavDropdown, Container } from 'react-bootstrap'
import { LogOutOutline, PencilOutline, AiOutlineHistory, TimeOutline, HeartOutline } from 'react-ionicons'
import { Link } from 'react-router-dom';
import { fetchLogout } from "../../Redux/auth/login/actions";
import { useDispatch, useSelector } from 'react-redux';
import LogoAyoKitaPeduli from "../../assets/images/logo.png"
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';

const Header = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    const userprofile = localStorage.getItem('userprofile')

    
    const logout = () => {
        // history.push(`${process.env.PUBLIC_URL}/dashboard`);
        dispatch(fetchLogout(token))
    }
    
    
    return (
        
        <Navbar sticky="top" expand="lg">
            <Container style={{ padding: 0 }}>

            <Navbar.Brand href="/dashboard"><img src={LogoAyoKitaPeduli} style={{ width: '25%' }} /></Navbar.Brand>
            </Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>                    
                    {username ?
                            
                            // <Nav.Link>
                                
                            // </Nav.Link>
                            // <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title={userprofile} id="basic-nav-dropdown" menuAlign="right" >
                            <NavDropdown.Item href="#">
                           
                            <PencilOutline color={'#00000'} height="15px" width="15px" />
                                       &nbsp; Edit Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/myfundraiser">
                           
                                         <HeartOutline height="15px" width="15px" />
                                       &nbsp; Galang Dana Saya                           
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/history"><TimeOutline color={'#00000'} height="15px" width="15px" /> &nbsp; History Donasi</NavDropdown.Item>
                            <Dropdown.Divider />
                            <NavDropdown.Item onClick={() => { logout() }}><LogOutOutline color={'#00000'} height="15px" width="15px" /> &nbsp; Logout</NavDropdown.Item>
                             </NavDropdown>
                       
                        // <Nav.Link>
                        //     <DropdownButton
                        //         menuAlign="right"
                        //         title={userprofile}
                        //         id="dropdown-menu-align-right"
                        //         className="btn-profile"
                        //     >
                        //         <Dropdown.Item eventKey="1">
                        //             <PencilOutline color={'#00000'} height="15px" width="15px" />
                        //         &nbsp; Edit Profile
                        //         </Dropdown.Item>
                        //         <Dropdown.Item eventKey="2"> 
                        //             <Link to="/myfundraiser" style={{ color: "#212529" }}>
                        //                 <HeartOutline color={'#00000'} height="15px" width="15px" />
                        //               &nbsp; Galang Dana Saya
                        //             </Link>
                        //         </Dropdown.Item>
                        //         <Dropdown.Item eventKey="2"> 
                        //             <Link to="/history" style={{ color: "#212529" }}>
                        //                 <TimeOutline color={'#00000'} height="15px" width="15px" />
                        //               &nbsp; History
                        //             </Link>
                        //         </Dropdown.Item>
                        //         <Dropdown.Divider />
                        //         <Dropdown.Item eventKey="3">
                        //             <LogOutOutline color={'#00000'} height="15px" width="15px" />
                        //         &nbsp; <a onClick={() => { logout() }}>Log out</a>
                        //         </Dropdown.Item>

                        //     </DropdownButton>
                        // </Nav.Link>
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
                <ToastContainer autoClose={2000} />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header