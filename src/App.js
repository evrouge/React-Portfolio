//======= Imports ===============
import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Projects.js'
import './components/Resume.js';
import './components/Skills.js';
// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


//===========================================
const App = () => {

  //========= Hooks ==========================



  //========= UseEffect ===================
  useEffect(() => {

  }, [])

  return (
    <>
      {/* Navbar */}
      <Navbar bg="primary" expand="lg">
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
              <Nav.Link href="#">Projects</Nav.Link>
              <Nav.Link href="#">Resume</Nav.Link>
              <Nav.Link href="#">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <h1>Evin Lerouge</h1>
        <h2>Software Engineer and Adventurer</h2>
      </div>
      <div class='links'>
        <a href="https://github.com/evrouge">GitHub</a><br />
        <a href="https://www.linkedin.com/in/evinlerouge/">LinkedIn</a>
      </div>

      <div id="about">
        <h4>About Me</h4>
        <p>Hi! I'm Evin! </p>
        <img class="helens" src="https://i.imgur.com/ihTy0QQ.jpg"></img>
        <hr />
      </div>
      <div id="skills">
        <h4>Skills</h4>
        <p>kfa;divbadiuvb;safasdjvblasd
          askdbv;ajsdbv;oajsdbv;akjsdbv;ak
        </p>
        <hr />
      </div>
      <div>
        <h4>Projects</h4>
        <p>aksdvia;usdbfv;a'iufb'vaodifbv'aodbv</p>
        <hr />
      </div>
      <div>
        <h4>Resume</h4>


        <hr />
      </div>
      <div>
        <h4>Contact Me</h4>
        <form>
          Name: <input required></input><br /><br />
          Email: <input required></input><br /><br />
          Message: <textarea required rows="5" cols="30"></textarea><br /><br />
          <input type="submit" value="Send"></input>
        </form>
        <hr />
      </div>
    </>

  )
}

export default App;
