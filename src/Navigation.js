import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <div className="Navigation">
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-navs' />
                    <Navbar.Collapse id='responsive-navbar-navs'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/menu'>Menu</Nav.Link>
                            <Nav.Link href='/items'>Items</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;