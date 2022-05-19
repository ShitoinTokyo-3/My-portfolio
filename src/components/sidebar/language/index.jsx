import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { useContext } from 'react';
import { langContext } from '../../../assets/contex/langContex';
import { BiWorld } from "react-icons/bi";


const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default function Language() {

  let messagesDefault;
  const language = useContext(langContext);

  if(language.lang){
    if(language.lang === 'en-US'){
      messagesDefault = false;
    }else if(language.lang === 'es-ES'){
      messagesDefault = true;
    }else{
      messagesDefault = false;
    }
  }


  const [isOn, setIsOn] = useState(messagesDefault);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    isOn?
    language.setLanguage('en-US'):
    language.setLanguage('es-ES');
  };



  return (
    <div>
        <div className="language__title">
            <BiWorld className="language__title-icon"/>
            {isOn? 
            <motion.span>ESP</motion.span>:
            <motion.span>ENG</motion.span>}
        </div>
      <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </div>
  );
} 

