import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import Item from "./Item";
import imgLogo from "../../assets/imagenes/logo.svg";
import { IconMenu2, IconX } from "@tabler/icons-react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const clickCloseNav =()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="hamburger-navbar">
      <motion.nav className="navbar-pc">
        <div className="navbar-pc-logo">
          <Logo src={imgLogo} alt={"logo de la veterinaria"} size={80} />
        </div>
        <div className="navbar-pc-link">
          <Item text={"Servicios"} link={"#servicios"} />
          <Item text={"Productos"} link={"#productos"} />
          <Item text={"Testimonios"} link={"#testimonios"} />
          <Item text={"Nosotros"} link={"#nosotros"} />
        </div>
      </motion.nav>

      <motion.nav className="navbar-movil">
        <div className="navbar-movil-logo">
          <Logo src={imgLogo} alt={"logo de la veterinaria"} size={80} />
          <div className="navbar-movil-logo-btn" onClick={toggleMenu}>
            {isOpen ? <IconX stroke={2} /> : <IconMenu2 stroke={2} />}
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="navbar-movil-link"
            >
              <Item text={"Servicios"} link={"#servicios"}  />
              <Item text={"Productos"} link={"#productos"}  />
              <Item text={"Testimonios"} link={"#testimonios"}  />
              <Item text={"Nosotros"} link={"#nosotros"}  />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

export default HamburgerMenu;
