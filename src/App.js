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
      <Navbar bg="transparent" expand="lg">
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
      </Navbar><br />
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
        <h4>About Me</h4><br />
        <p class="aboutme">Hi! I'm Evin, nice to meet you! I am a software engineer with experience as a yoga teacher, childcare teacher, and a special education paraeducator! My previous experiences have provided me with leadership skills and a passion for creativity that I can't wait to bring to the field! I am always up for a challenge and continually seek them out, whether I am working or not.</p>
        <p class="aboutme">In my free time I enjoy many hobbies that challenge me. I am a runner and am currently training for a half marathon and a marathon this year. I am an alpinist, and am training to climb Mount Rainier in Washington. I am a rock climber, and enjoy spending time at the gym in the winter and climbing outside all other seasons. I am also a painter and enjoy anything that involves crafting and creativity.</p>
        <p class="aboutme">Below is a picture of me at the top of Mount Saint Helens in Washington.</p>
        <img class="helens" src="https://i.imgur.com/ihTy0QQ.jpg"></img>
        <hr />
      </div><br />

      {/* Technical Skills */}

      <div id="skills">
        <h4>Technical Skills</h4><br />
        <p class="aboutme">These are all of the technical skills that I have learned over the last year! I started out by learning Python with a book called Python Crash Course: A Hands On, Project-Based Introduction to Programming. I also found resources online such as Mosh Hamedani's courses, and free code camp. After practicing and finding out how much I loved the programming, I decided to join General Assembly's Software Engineer Immersive - Remote program. Here we dove into the fundamentals of computer science, and I also learned how to deploy websites that I have created.</p><br />
        {/* <!--javascript icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          class="skill" />
        {/* Java icon */}
        <img class="skill" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
        {/* <!--html icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
          class="skill" />
        {/* <!--CSS icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
          class="skill" />
        {/* <!--python icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
          class="skill" />
        {/* <!--react icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
          class="skill" />
        {/* <!--git icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          class="skill" />
        {/* <!--mongodb icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          class="skill" />
        {/* <!--visual studio code icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain-wordmark.svg"
          class="skill" />
        {/* <!--Spring icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-plain-wordmark.svg"
          class="skill" />
        {/* <!--ruby icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg"
          class="skill" />
        {/* <!--jquery icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
          class="skill" />
        {/* <!--github icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          class="skill" />
        {/* <!--django icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
          class="skill" />
        {/* <!--express icon--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
          class="skill" />
        {/* <!--nodejs--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          class="skill" />
        {/* <!--postgresql--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
          class="skill" />
        {/* <!--mysql--> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
          class="skill" />
      </div>
      <br /><hr /><br />
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
