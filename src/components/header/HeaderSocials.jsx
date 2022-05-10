import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const HeaderSocials = () => {
    const linkedin = "https://www.linkedin.com/in/juanduque-fullstackdeveloper/";
    const github = "https://github.com/ShitoinTokyo-3";
    const whatsapp = "https://wa.me/+573213982985";
    return (
        <div className="header__socials">
            <a href={linkedin} target="_blank"><BsLinkedin /></a>
            <a href={github} target="_blank"><BsGithub /></a>
            <a href={whatsapp} target="_blank"><BsWhatsapp /></a>
        </div>
    );
}

export default HeaderSocials;