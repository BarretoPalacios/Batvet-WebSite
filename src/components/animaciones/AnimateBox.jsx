import { motion } from "framer-motion";

const AnimateBox = ({ direction = "simple", children }) => {
  const variants = {
    left: {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
        },
      },
      hidden: {
        opacity: 0,
        x: -100,
      },
    },
    right: {
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
        },
      },
      hidden: {
        opacity: 0,
        x: 100,
      },
    },
    zoom: {
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
        },
      },
      hidden: {
        opacity: 0,
        scale: 0.5,
      },
    },
    simple: {
      visible: {
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      },
      hidden: {
        opacity: 0,
      },
    },
  };

  return (
    <motion.div
      className="box"
      initial="hidden"
      whileInView="visible"
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
};

export default AnimateBox;
