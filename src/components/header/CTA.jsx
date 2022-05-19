import { useEffect, useState } from "react";
import CVEnglish from "../../assets/CVJuanDuqueEnglish05.pdf";
import CVSpanish from "../../assets/CVJuanDuqueEspañol05.pdf";
import { FormattedMessage } from 'react-intl';
import { useContext } from 'react';
import { langContext } from '../../assets/contex/langContex';

const CTA = () => {

    const language = useContext(langContext);
    const [cv , setCv] = useState(language.lang === 'en-US'? CVEnglish : CVSpanish);
    useEffect(() => {
        if(language.lang){
            if(language.lang === 'en-US'){
                setCv(CVEnglish);
            }else if(language.lang === 'es-ES'){
                setCv(CVSpanish);
            }else{
                setCv(CVEnglish);
            }
        }
    }, [language.localeDefault]);

    return (
        <div className="cta">
            <a href={cv} download className="btn"><FormattedMessage
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