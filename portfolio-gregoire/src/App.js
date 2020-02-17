import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactForm from "./components/ContactForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Gregoire Boisrond Jr",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Resume", path: "https://www.docdroid.net/McSZWTM/boisrond-greg-2019-resume.pdf"},
      ],
      home: {
        title: "Software Engineer",
        subTitle: "The art of science",
        text: "Checkout my projects below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Contact Me"
      },
      resume: {
        title: "Resume"
      }

    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            className="border-bottom"
            text="text-light"
            bg="black"
            expand="lg"
          >
            <Navbar.Brand className="text-light">
              Gregoire Boisrond Jr
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link text-light" to="/">
                  Home
                </Link>
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
                <Link className="nav-link text-light" to="/contact">
                  Contact
                </Link>
                <a href="https://www.docdroid.net/McSZWTM/boisrond-greg-2019-resume.pdf"
                  className="nav-link text-light"
                >
                  Resume
                </a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactForm title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
