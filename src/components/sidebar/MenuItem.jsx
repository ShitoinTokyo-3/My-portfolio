import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
    display: "flex"
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    },
    display: "none"
  }
};


export const MenuItem = ({ i, value }) => {
  return (
    <motion.li
      className="sidebar__li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="sidebar__icon-placeholder" >
        <a>{value.icon}</a>
      </div>
      <div className="sidebar__text-placeholder" >
        {value.link?
        <a href={value.link} target="_blank">{value.text}</a>:
        <a>{value.text}</a>}
      </div>
    </motion.li>
  );
};
