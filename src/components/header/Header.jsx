import './header.css';
import CTA from "./CTA";
import ME from "../../assets/meAja.png";
import HeaderSocials from './HeaderSocials';
import { FormattedMessage } from 'react-intl';
import { useContext } from 'react';
import { langContext } from '../../assets/contex/langContex';
import { BiWorld } from "react-icons/bi";


const Header = () => {
    const language = useContext(langContext);
    return (
        <header>
            <div className="container header__container">
                <div className='header__language'>
                    <button 
                        onClick={() => language.setLanguage('es-ES')}
                        className='btn btn-primary languages'>
                        <BiWorld className='header__language-icon'/>ESP
                    </button>
                    <button 
                        onClick={() => language.setLanguage('en-US')}
                        className='btn btn-primary languages'>
                        <BiWorld className='header__language-icon'/>ENG
                    </button>
                </div>
                <h5><FormattedMessage
                    id="header.titleh5"
                    defaultMessage="Hello I'm"
                /></h5>
                <h1><FormattedMessage
                    id="header.titleh1"
                    defaultMessage="Juan Duque"
                /></h1>
                <h5 className="text-light"><FormattedMessage
                    id="header.titleh52"
                    defaultMessage="Full Stack Developer"
                /></h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} />
                </div>

                <a href="#contact" className="scroll__down"><FormattedMessage
                    id="header.scrolldown"
                    defaultMessage="Scroll Down"
                /></a>
            </div>
        </header>
    );
}

export default Header;