import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Language from "./language"
import { MdLocationPin } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
const variants2 = {
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

const info = [
  {
    icon: <MdLocationPin />,
    text: "Bogotá D.C, Colombia",
    id: 0
  },{
    icon: <HiOutlineMail />,
    text: "juanmanuelduque0920-@gmail.com",
    link: "mailto:juanmanuelduque0920@gmail.com",
    id: 1
  },{
    icon: <BsGithub />,
    text: "/ShitoinTokyo_3",
    link: "https://github.com/ShitoinTokyo-3",
    id: 2
  },{
    icon: <BsLinkedin />,
    text: `/juanduque-fullstackdeveloper`,
    link: "https://www.linkedin.com/in/juanduque-fullstackdeveloper/",
    id: 3
  }
];

export const Navigation = () => (
  <motion.ul className="sidebar__ul" variants={variants}>
    <motion.li
      className="sidebar__li slider__language"
      variants={variants2}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Language />
    </motion.li>
    
    {info.map(i => (
      <MenuItem i={i.id} key={i.id} value={i}/>
    ))}
  </motion.ul>
);

