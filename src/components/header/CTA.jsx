import CV from "../../assets/CVJuanDuqueEnglish05.pdf";
import { FormattedMessage } from 'react-intl';

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn"><FormattedMessage
                id="headercta.download"
                defaultMessage="Download CV"
            /></a>
            <a href="#contact" className="btn btn-primary"><FormattedMessage
                id="headercta.contact"
                defaultMessage="Let's Talk"
            /></a>
        </div>
    );
}

export default CTA;