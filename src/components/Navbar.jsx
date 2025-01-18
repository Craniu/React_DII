import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NAvbar from 'react-bootstrap/Navbar';

const Navbar = () => {

  const total = 25000;
  const token = false;


  return (
    <NAvbar expand="lg" className="bg-body-tertiary">
    <Container>
      
      <NAvbar.Brand href="#home">La Papaya Loca</NAvbar.Brand>
      <NAvbar.Toggle aria-controls="basic-navbar-nav" />
      <NAvbar.Collapse id="basic-navbar-nav" >
        <Nav className=" me-auto">
          <Nav.Link href="#home">🍕Home</Nav.Link>
          {token == true ? <Nav.Link href="#link">🔒Profile</Nav.Link> : <Nav.Link href="#link">🔐Login</Nav.Link>}
          {token == true ? <Nav.Link href="#link">🔒Logout</Nav.Link> : <Nav.Link href="#link">🔐Register</Nav.Link>}          
          <Nav.Link  href="#link">🛒Total ${total}</Nav.Link>
          </Nav>
      </NAvbar.Collapse>
    </Container>
  </NAvbar>
  )
}

export default Navbar