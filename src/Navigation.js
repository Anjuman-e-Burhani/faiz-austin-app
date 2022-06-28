import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Navigation() {
    return (
        <div className='Navigation'>
            <Navbar collapseOnSelect fixed='top' expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>Faiz-ul-Mawaid-il-Burhaniyah</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/signup'>Signup</Nav.Link>
                            <Nav.Link href='/dishes'>Dishes</Nav.Link>
                            <Nav.Link href='/cooks'>Cooks</Nav.Link>
                            <Nav.Link href='/planner'>Plan</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;