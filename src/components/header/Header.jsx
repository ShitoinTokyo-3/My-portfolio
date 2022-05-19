import './header.css';
import CTA from "./CTA";
import HeaderSocials from './HeaderSocials';
import { FormattedMessage } from 'react-intl';
import Typical from 'react-typical';
import { motion } from 'framer-motion';
import Portada from '../../assets/Portada.png';


const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <div className='header__flex'>
                    <div className='header__presentation'>
                        <h1>
                            <FormattedMessage
                                id="header.titleh1"
                                defaultMessage="Hello 👋 I am "/><br/>
                            <span>
                                <FormattedMessage
                                    id="header.titleh1span"
                                    defaultMessage="Juan Duque"/>
                            </span>
                        </h1>
                        <span>
                            <FormattedMessage
                                id="header.span"
                                defaultMessage="I'm a"/>{' '} 
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'Front-end Developer 💅',
                                    3000,
                                    'Back-end Developer 🤖',
                                    3000,
                                    'Full-stack Developer 🚀',
                                    3000,
                                    'UI/UX Designer 🤠',
                                    2000,
                                    'Student 🧐',
                                    2000
                                ]}
                            />
                        </span>
                    </div>
                    <div className='header__flex-child2'>
                            <motion.img
                                className='header__img'
                                src={Portada}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 , scale: 1.2}}
                                transition={{ duration: 1, delay: 1 }}
                            />
                    </div>
                </div>
                <CTA />
                <HeaderSocials />
            </div>
        </header>
    );
}

export default Header;