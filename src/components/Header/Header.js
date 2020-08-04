import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="#home2">Home |</Nav.Link>
      <Nav.Link href="#change-password">Change Password</Nav.Link>
      <Nav.Link href="#sign-out">Sign Out</Nav.Link>
      <Nav.Link href="#items">Show Items</Nav.Link>
      <Nav.Link href="#items-create">Create Items</Nav.Link>
    </Nav>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#home2">Home |</Nav.Link>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#"></Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#">
  ItemEyes™
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
