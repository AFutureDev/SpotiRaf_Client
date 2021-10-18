import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import './index.css';

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=5a92c45276b94d77a201cd6ab82124af&response_type=code&redirect_uri=http://3.81.228.234:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
  return (
 
      <div className="bg"> 
      <Navbar bg="myBlack" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          {/* <img src="./logo.png" width="40px" height="40px" /> */}
          Logo
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link href="#">Music</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

       
      </Navbar>
        <div className="content">
          <h1 style={{textAlign: 'center', fontSize: '22px', color: '#fff'}}>Connect on SpotiRaf
              Discover,
          </h1>
          <h3 style={{textAlign: 'center', fontSize: '14px', fontweight: '500', color: '#fff'}}>
            stream, and share a constantly expanding 
            mix of music
          </h3>
          <h3 style={{textAlign: 'center', fontSize: '14px', fontweight: '500', color: '#fff'}}>
            from emerging and major artists around the world. 
          </h3>
          <div class="d-flex justify-content-center">
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
              Login with SpotiRaf
            </a>
          </div>
        </div>
      </div>

  )
}

export default Login;