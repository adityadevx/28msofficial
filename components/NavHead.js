import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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

function OffcanvasExample() {
    return (
        <>
            <Container fluid className=''>
                <Container>
                    <Navbar expand="lg" className='mt-2 text-size-lg mx-2'>
                        <Container fluid>
                            <Navbar.Brand href="#">
                                <img
                                    src="./assets/28mslogo.jpg"
                                    width="50" /* Increase the width value as per your preference */
                                    height="50" /* Increase the height value as per your preference */
                                    className="d-inline-block align-top logo-img"
                                    alt="React Bootstrap logo"
                                    style={{ borderRadius: '50%' }}
                                />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="justify-content-end mx-auto"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    {ulItems.map((item, index) => (
                                        <Nav.Link href={item.href} key={index}
                                            style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', padding: '8px 12px', }}
                                        >{item.name}</Nav.Link>
                                    ))}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>

                <div className="text-secondary px-4 py-5 text-center videoSection" style={{ height: "80vh" }}>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            position: "fixed",
                            top: "0",
                            left: "0",
                            width: "100vw",
                            height: "90dvh",
                            objectFit: "cover",
                            zIndex: "-1"


                        }}
                    >
                        <source src="https://res.cloudinary.com/dinwglwia/video/upload/v1685530969/km_20230531-2_1080p_30f_20230531_162928_cropped_jddtyn.mp4" type="video/mp4" />
                        {/* Add additional source tags for different video formats if needed */}
                    </video>

                    <div className="py-5">
                        <div className="col-lg-6 mx-auto">
                            <div className="d-flex justify-content-center">
                                <img src="/assets/28mslogo.jpg" alt="28ms logo" style={{ width: "300px", height: "300px", borderRadius: "50%", }} />
                            </div>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
                                <button type="button" className="btn btn-light btn-lg px-4 me-sm-3 fw-bold">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default OffcanvasExample;
