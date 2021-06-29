import React, { useState } from "react";

import Header from "../../components/header/header.component";
import Menu from "../../components/menu/menu.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Servicios from "../../components/servicios/servicios.component";
import Info from "../../components/info/info.component";
import { DataMenu } from "../../components/info/data";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      {/* <Menu /> */}
      <Info {...DataMenu} />
      <Servicios />
    </>
  );
};

export default Homepage;
