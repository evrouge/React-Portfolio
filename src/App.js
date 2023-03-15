//======= Imports ===============
import React from 'react';
import './App.css';
// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
//===========================================
const App = () => {

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
              style={{ maxHeight: '200px' }}
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
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@300&family=Dancing+Script:wght@500&family=Poiret+One&family=Quicksand&display=swap');
        </style>
        <h1>Evin Lerouge</h1>
        <h2>Software Developer and Adventurer</h2><br />
      </div>
      <div class='links'>
        <a href="https://github.com/evrouge">GitHub</a><br />
        <a href="https://www.linkedin.com/in/evinlerouge/">LinkedIn</a>
      </div>
      <br /><br />


      {/* About section */}

      <div id="about"><br />
        <h4>About Me</h4><br />
        <p class="aboutme">Hi! I'm Evin, nice to meet you! I am a software developer with experience as a yoga teacher, childcare teacher, and a special education paraeducator! My previous experiences have provided me with leadership skills and a passion for creativity that I can't wait to bring to the field! I am always seeking a challenge, I love to probelm solve, and learn new things consistently.</p>
        <p class="aboutme">In my free time I enjoy many hobbies that challenge me. I am a runner and am currently training for a half marathon and marathon this year. I am an alpinist, and am training to climb technical glaciated peaks. I am a rock climber, and enjoy spending time at the climbing gym in the winter and climbing outside during warmer seasons. I am a new skier, and love a chance to be a beginner again with new things that challenge me. I am also a painter and enjoy anything that involves crafting and creativity.</p>
        <p class="aboutme">Below is a picture of me at the top of Mount Saint Helens in Washington.</p><br />
        <img class="helens" src="https://i.imgur.com/ihTy0QQ.jpg"></img><br />
      </div><br />

      {/* Technical Skills */}

      <div id="skills">
        <h4>Technical Skills</h4><br />
        <p class="aboutme">Technologies that I have learned over the last year!</p><br />
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
      <br /><br />

      {/* Projects Section */}

      <div id="projects"><br />
        <h4>My Projects</h4>

        {/* Project 5 */}
        <Card className="project5" style={{ width: '20rem', height: '31rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/ZNSW50l.png" />
          <Card.Body>
            <Card.Title className='title'>Outdoor Blog - Solo Project</Card.Title>
            <Card.Text>
              <ul>
                <li class="projectt">Java, Spring, PostgreSQL, and React </li>
                <li>Full-stack app created to share photos and stories of outdoor adventures</li>
              </ul>
            </Card.Text>
            <div className="project">
              <Button href="https://lucky-sprite-9372ed.netlify.app" variant="primary">Website</Button><br /><br />
              <Button href="https://github.com/evrouge/outdoor-blog-frontend" variant="info">Frontend Code</Button>
              <Button href="https://github.com/evrouge/outdoor-blog-backend" variant="info">Backend Code</Button><br />
            </div>
          </Card.Body>
        </Card>

        {/* Project 2 */}
        <Card className="project2" style={{ width: '20rem', height: '33rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/qItp7Rs.png" />
          <Card.Body>
            <Card.Title className='title'>Hiker App - Solo Project</Card.Title>
            <Card.Text>
              <ul>
                <li class="projectt">Express, Encrypted JavaScript, and CSS</li>
                <li>Full-stack app created for hikers who want to keep track of their hikes instead of using and excel spreadsheet.</li>
              </ul>
            </Card.Text>
            <div className="project">
              <Button href="https://safe-bastion-22148.herokuapp.com/hike" variant="primary">Website</Button><br /><br />
              <Button href="https://github.com/evrouge/hiker-app" variant="info">See Code</Button>
            </div>
          </Card.Body>
        </Card>

        {/* Project 4 */}
        <Card className="project4" style={{ width: '20rem', height: '35rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/qMsU4IX.png" />
          <Card.Body>
            <Card.Title className='title'>Dating App - Group Project</Card.Title>
            <Card.Text>
              <ul>
                <li class="projectt">React, Django, Python, Bootstrap for React, and PostgreSQL</li>
                <li>Recreated Tinder app. This app allows users to create a profile and "swipe" left or right.</li>
                <li>In this app we also added user authentication with Bcrypt</li>
              </ul>
            </Card.Text>
            <div className="project">
              <Button href="https://singular-druid-6c25ce.netlify.app/" variant="primary">Website</Button><br /><br />
              <Button href="https://github.com/evrouge/dating-app-frontend" variant="info">Frontend Code</Button>
              <Button href="https://github.com/evrouge/dating-app-backend" variant="info">Backend Code</Button>
            </div>
          </Card.Body>
        </Card>

        {/* Project 3 */}
        <Card className="project3" style={{ width: '20rem', height: '34rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/GhjyM7B.png" />
          <Card.Body>
            <Card.Title className='title'>MERN Book Tracker - Group Project</Card.Title>
            <Card.Text>
              <ul>
                <li class="projectt">React, Express, MongoDB, Node and Bootstrap for React</li>
                <li>Full-stack app created to keep track of the books you have read and want to read</li>
              </ul>
            </Card.Text>
            <div className="project">
              <Button href="https://papaya-mochi-57fe5a.netlify.app/" variant="primary">Website</Button><br /><br />
              <Button href="https://github.com/evrouge/Book-tracker-frontend" variant="info">Frontend Code</Button>
              <Button href="https://github.com/evrouge/outdoor-blog-backend" variant="info">Backend Code</Button>
            </div>
          </Card.Body>
        </Card>

        {/* Project 1 */}
        {/* <Card className="project1" style={{ width: '20rem', height: '30rem' }}>
          <Card.Img variant="top" src="https://i.imgur.com/yEB088r.png" />
          <Card.Body>
            <Card.Title className='title'>Portfolio - My First Solo Project</Card.Title>
            <Card.Text>
              <ul>
                <li class="projectt">HTML 5, CSS, and jQuery</li>
                <li>I created this website to introduce myself and show my previous experience</li>
              </ul>
            </Card.Text>
            <div className="project">
              <Button href="https://celadon-platypus-739458.netlify.app/" variant="primary">Website</Button><br /><br />
              <Button href="https://github.com/evrouge/Portfolio" variant="info">See Code</Button>
            </div>
          </Card.Body>
        </Card> */}
      </div>
      <br />

      {/* Resume Section */}

      <div id="resume">
        <h4>My Resume</h4><br />
        <div class="iframe">
          <iframe src="https://drive.google.com/file/d/1EnIi92iMyUE9WNL2miuJwgxYIYlA0XSg/preview" width="640" height="826" allow="autoplay"></iframe>
        </div>
      </div>
      <br /><br />

      {/* Contact Section */}

      <div id="contact"><br />
        <h4>Contact Me</h4>
        <br />
        <div class="submitbtn">
          <form action="mailto:evinlerouge@icloud.com">
            <input type="submit" value="Send Me an Email" />
          </form><br />
        </div>
      </div><br />
      <div>
        <p>SLC - Utah | Evin Lerouge | She/her | Women in Technology</p>
      </div>
    </>
  )
}


export default App;
