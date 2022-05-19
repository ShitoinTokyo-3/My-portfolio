import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from 'framer-motion';

const HeaderSocials = () => {
    const linkedin = "https://www.linkedin.com/in/juanduque-fullstackdeveloper/";
    const github = "https://github.com/ShitoinTokyo-3";
    const whatsapp = "https://wa.me/+573213982985";
    return (
        <motion.div 
            className="header__socials"
            transition = {{ 
                duration: 1,
                type: "spring"
            }}
            animate={{
                x:150,
            }}
            >
            <a href={linkedin} target="_blank"><BsLinkedin /></a>
            <a href={github} target="_blank"><BsGithub /></a>
            <a href={whatsapp} target="_blank"><BsWhatsapp /></a>
        </motion.div>
    );
}

export default HeaderSocials;