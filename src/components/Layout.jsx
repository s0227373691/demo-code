import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Layout = ({ children }) => {
  return (
    <Container>
      <Row className="d-flex flex-fill">{children}</Row>
    </Container>
  );
};

function LayoutLeft({ children }) {
  return <Col className="layout-overflow flex-fill">{children}</Col>;
}

function LayoutRight({ children }) {
  return <Col>{children}</Col>;
}

Layout.left = LayoutLeft;
Layout.right = LayoutRight;

export default Layout;
