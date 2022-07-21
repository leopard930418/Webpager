import React from "react";
import BodyWrapper from "./statics/BodyWrapper";

import Navbar from "./statics/Navbar1";

function Layout({ className = "", children, initialTheme, }) {
  return (
    <div className={className}>
      <Navbar initialTheme={ initialTheme }></Navbar>

      <BodyWrapper>{children}</BodyWrapper>
    </div>
  );
}

export default Layout;
