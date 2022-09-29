import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useDispatch } from "react-redux";
import { setTheme } from "./ReduxState";
import "./styles/NavBar.scss";

function NavBarComponent() {
  const env = process.env.NODE_ENV;
  const url = process.env[`REACT_APP_HOME_URL_${env}`];
  const countryId = useSelector((state) => state.countryId);
  const numberOf = useSelector((state) => state.numberOf);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  function handleClick() {
    if (theme === "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  }

  return (
    <Navbar bg={theme} expand="lg">
      <Container>
        <Link className="navbar-brand" to={`${url}/`}>
          <img
            src={`${url}/logo192.png`}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          Covid Spa Information
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to={`${url}/reported-cases/` + countryId}
              className="nav-link"
            >
              Reported Cases Estonia
            </Link>

            <Link
              to={
                `${url}/ranked-charts/` +
                (numberOf === "total-cases" ? "total-cases" : "total-deaths") +
                "/20"
              }
              className="nav-link"
            >
              Ranked Charts
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Form.Check
          type="switch"
          id="theme-switch"
          onClick={() => handleClick()}
        />
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
