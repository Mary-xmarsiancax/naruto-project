import s from "./Preloader.module.css"
import React from "react";
import preloading from "./../../../images/preloading.svg"

let Preloader =(props)=>{

  return <div className={s.preloader}>
      < img  src={preloading} alt="preloading"/>
  </div>

}

export default Preloader;