import React, { Component } from "react";
import { navData } from "../../_mockDB/navData";
import { Navbar, Nav, InputGroup, Row, Col } from "react-bootstrap";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarData: navData
    };
  }

  handleNavigation = item => {
    this.props.history.push(item.path);
  };

  enableNavigation = i => {
    const { navBarData } = this.state;
    navBarData[i].enable = !navBarData[i].enable;
    this.setState(() => ({ navBarData }));
  };

  render() {
    const { navBarData } = this.state;
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Poc For Widgets</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {navBarData.map(
                (item, i) =>
                  item.enable && (
                    <Nav.Link
                      key={i}
                      onClick={() => this.handleNavigation(item)}
                    >
                      {item.title}
                    </Nav.Link>
                  )
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Row>
          {navBarData.map((item, i) => (
            <Col>
              <InputGroup key={i}>
                <InputGroup.Prepend>
                  <InputGroup.Checkbox
                    onClick={() => this.enableNavigation(i)}
                  />
                </InputGroup.Prepend>
                <InputGroup.Append>{item.title}</InputGroup.Append>
              </InputGroup>
            </Col>
          ))}
        </Row>
        <input type="text"></input>
      </div>
    );
  }
}
export default DashBoard;
