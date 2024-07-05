import React, { useState } from "react";
import { motion } from "framer-motion";

import "./acordeon.css";
import { IconArrowBigUpFilled, IconArrowBigDown } from "@tabler/icons-react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    visible: { opacity: 1, height: "auto",padding:"15px" },
    hidden: { opacity: 0, height: 0,overflow:"hidden"},
  };

  return (
    <div className="acordeon-box" >
      <div className="acordeon-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <div className="accordion-header-icon">
          {isOpen ? <IconArrowBigUpFilled /> : <IconArrowBigDown stroke={2} />}
        </div>
      </div>
      <motion.div
        initial={false}
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.4 }}
        variants={variants}
        className="acordeon-descripcion"
      >
        <p>{content}</p>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
