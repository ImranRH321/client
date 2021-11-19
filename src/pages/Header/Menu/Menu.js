import Button from '@restart/ui/esm/Button';
import React from 'react';
import './menu.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink as NavLink} from 'react-router-hash-link';

import useAuth from '../../../hooks/useAuth';

const Menu = () => {
    const { user, logOut } = useAuth()
    return (
        // header main menu
        <>
            <Navbar collapseOnSelect expand="lg" className="bg " variant="" sticky="top">
                <Container>
                    <Navbar.Brand as={NavLink} className="text-white" to="/home">
                        <img width="100px" height="20px" className="rounded bg-dark" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBw0Aijeuu3NHxktyafmiW5dw-M4Bb65l-fmH_FDQkIZkRkGPpeJr_Yj_3niuzpXlQZAc&usqp=CAU" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={NavLink} to="/home" className="text-white" >HOME</Nav.Link>
                        <Nav.Link as={NavLink} to="/home#about" className="text-white" >ABOUT</Nav.Link> 
                        <Nav.Link as={NavLink} to="/home#services" className="text-white" >SERVICES</Nav.Link>
                        {user?.email ?
                            <Nav.Link as={NavLink} to="/my-bookings#myBookings" className="text-white" >MY BOOKINGS</Nav.Link>
                            : ""}
                        {user?.email ?
                            <Nav.Link as={NavLink} to="/manage-all-bookings#MangeAllBookings" className="text-white" >MANAGE BOOKINGS</Nav.Link>
                            : ""}
                        {user?.email ?
                            <Nav.Link as={NavLink} to="/add-new-service" className="text-white" >ADD SERVICES</Nav.Link>
                            : ""}

                        <Nav.Link as={NavLink} to="/home#contact" className="text-white" >CONTACT</Nav.Link>
                        <Navbar.Text className="text-black">

                        </Navbar.Text>

                        {user?.email ?
                            <Button onClick={logOut} className="btn btn-danger text-white py-1 px-1 color">Log Out</Button> :
                            <Nav.Link as={NavLink} to="/login"  >LOGIN</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
                {

                    user?.email ? <a href="#login"><p className="">{user?.displayName}</p></a> : <b></b>
                }
            </Navbar>

        </>
    );
};

export default Menu;

