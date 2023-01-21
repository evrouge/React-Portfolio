//======= Imports ===============
import React, { useState, useEffect } from 'react';
import './App.css';
// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

//===========================================
const App = () => {

  //========= Hooks ==========================
  const [show, setShow] = useState(false);

  //============================================
  //Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //========= UseEffect ===================
  useEffect(() => {

  }, [])

  return (
    <>
      {/* Navbar */}
      <Navbar bg="warning" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <h1>Evin Lerouge</h1>
        <h2>Software Engineer and Adventurer</h2><br />
      </div>
      <div class='links'>
        <a href="https://github.com/evrouge">GitHub</a><br />
        <a href="https://www.linkedin.com/in/evinlerouge/">LinkedIn</a>
      </div>
      <br /><hr /><br />

      {/* About section */}

      <div id="about">
        <h4>About Me</h4>
        <p>Hi! I'm Evin! </p>
        <img class="helens" src="https://i.imgur.com/ihTy0QQ.jpg"></img>
        <hr />
      </div>
      <div id="skills">
        <h4>Technical Skills</h4>
        <p>kfa;divbadiuvb;safasdjvblasd
          askdbv;ajsdbv;oajsdbv;akjsdbv;ak
        </p>
        <hr />
      </div>

      {/* Projects Section */}

      <div id="projects">
        <h4>My Projects</h4>

        {/* Project 5 */}
        <Card className="project5" style={{ width: '20rem', height: '30rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/ZNSW50l.png" />
          <Card.Body>
            <Card.Title>Outdoor Blog - Solo Project</Card.Title>
            <Card.Text>
              <ul>
                <li>Full Stack CRUD app using Java, Spring, PostgreSQL, and React </li>
                <li>I created this app to use for writing and posting about my outdoor activities</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Website</Button>
            <Button variant="primary">See Code</Button>
          </Card.Body>
        </Card>

        {/* Project 2 */}
        <Card className="project2" style={{ width: '20rem', height: '33rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/qItp7Rs.png" />
          <Card.Body>
            <Card.Title>Hiker App - Solo Project</Card.Title>
            <Card.Text>
              <ul>
                <li>I created this Full Stack CRUD app using Express, Encrypted JavaScript, and CSS</li>
                <li>I created this because I was bored of keeping track of my hikes with an excel spreadsheet!</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Website</Button>
            <Button variant="primary">See Code</Button>
          </Card.Body>
        </Card>

        {/* Project 4 */}
        <Card className="project4" style={{ width: '20rem', height: '33rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/qMsU4IX.png" />
          <Card.Body>
            <Card.Title>Dating App - Group Project</Card.Title>
            <Card.Text>
              <ul>
                <li>We created a Full Stack app using React, Django, Python, Bootstrap for React, and PostgreSQL</li>
                <li>In this app we added user authentication with Bcrypt</li>
                <li>We created this app to allow users to create a profile and "swipe" through profiles like Tinder</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Website</Button>
            <Button variant="primary">See Code</Button>
          </Card.Body>
        </Card>

        {/* Project 3 */}
        <Card className="project3" style={{ width: '20rem', height: '33rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/GhjyM7B.png" />
          <Card.Body>
            <Card.Title>Book Tracker (MERN) - Group Project</Card.Title>
            <Card.Text>
              <ul>
                <li>CRUD app using React, Express, MongoDB, and Node to create this app.</li>
                <li>Once a book has been read, it moves to the bottom of the page</li>
                <li>We created this app to keep track of the books we have read</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Website</Button>
            <Button variant="primary">See Code</Button>
          </Card.Body>
        </Card>

        {/* Project 1 */}
        <Card className="project1" style={{ width: '20rem', height: '33rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/yEB088r.png" />
          <Card.Body>
            <Card.Title>Portfolio - Solo Project</Card.Title>
            <Card.Text>
              <ul>
                <li>This website was my first project</li>
                <li>This interactive website was built using HTML 5, CSS, and JavaScript. There are three different jQuery interactions</li>
                <li>I created this website to introduce myself and show my previous experience</li>
              </ul>
            </Card.Text>
            <Button variant="primary">Website</Button>
            <Button variant="primary">See Code</Button>
          </Card.Body>
        </Card>
      </div>
      <hr />

      {/* Resume Section */}

      <div id="resume">
        <h4>Resume</h4>

      </div>
      <hr />

      {/* Contact Section */}

      <div id="contact">
        <h4>Contact Me</h4>
        <Button variant="primary" onClick={handleShow}>Fill out contact form</Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Leave your contact information here:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input type="text" placeholder='Name'></input><br /><br />
              <input type="text" placeholder='Email'></input><br /><br />
              <textarea cols="30" rows="5" placeholder='Message'></textarea>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default App;
