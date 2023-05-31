import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const ulItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Journey', href: '#' },
    { name: 'Teams', href: '#' },
    { name: 'Videos', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Socials', href: '#' }
];

function VideoBackgroundContainer() {
    return (
        <div className="container-fluid video-container">
            <video className="video-background" autoPlay muted loop>
                <source src="./assets/bgvideo.mp4" type="video/mp4" />
                {/* Add additional source elements for different video formats if needed */}
            </video>
            <div className="video-overlay"></div>
            <Container>
                <Navbar bg="light" expand="lg" className='mt-2 text-size-lg mx-3'>
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img
                                src="./assets/28mslogo.jpg"
                                width="50"
                                height="50"
                                className="d-inline-block align-top logo-img"
                                alt="React Bootstrap logo"
                                style={{ borderRadius: '50%' }}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="justify-content-end mx-auto" style={{ maxHeight: '100px' }} navbarScroll>
                                {ulItems.map((item, index) => (
                                    <Nav.Link href={item.href} key={index}>
                                        {item.name}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            <div className="text-secondary px-4 py-5 text-center" style={{ height: "80vh" }}>
                <div className="py-5">
                    <div className="col-lg-6 mx-auto">
                        <div className="d-flex justify-content-center">
                            <img
                                src="/assets/28mslogo.jpg"
                                alt="28ms logo"
                                style={{ width: "300px", height: "300px", borderRadius: "50%" }}
                            />
                        </div>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoBackgroundContainer;
