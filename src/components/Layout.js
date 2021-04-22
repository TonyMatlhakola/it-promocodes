import React from "react";
import { Container } from "reactstrap";


const Layout = props => {
  return (
    <div className="body">
         <Container>{props.children}</Container>
    </div>
  );
};
export default Layout;
