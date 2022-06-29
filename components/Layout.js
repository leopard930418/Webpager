import React from "react";
import BodyWrapper from "./statics/BodyWrapper";

import Navbar from "./statics/Navbar";

function Layout({ children }) {
  return (
    <div >
      <Navbar></Navbar>

      <BodyWrapper>{children}</BodyWrapper>

    </div>
  );
}

export default Layout;
