import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Layout = ({ children }) => {
  return <div className="d-flex w-100">{children}</div>;
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
