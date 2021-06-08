import React from "react";
import CarouselBox from "../CarouselBox/Carousel";
import style from "./RootPage.module.css";

const RootPage = () => {
  return (
    <div className={style.rootWrapper}>
      <div className={style.headWrapper}>
        <CarouselBox />
      </div>
      <div className={style.contentWrapper}>
        <h2>WELCOME</h2>
        <h4>
          Bulum iaculis lacinia est. Proin dictumsce euismod consequat antre
        </h4>
        <p>
          Bulum iaculis lacinia est. Proin dictum elemntum velit. Fusce euismod
          consequat ante. Lorem ipsum dolor sit met consectetuer adipiscing
          elit. ellentesque sed dolor. Aliquam congue fermentum nisl. Mauris
          accsan nulla vel diam. Sed in lacus ut enim adipiscing aliquetulla
          vene natis. In pede mi aliquet sit amet euismod inuctor ut ligula.
          Aliquam dapibus tincidunt metus. Praesent justo dolo.
        </p>
        <a className={style.anchor} href="#">
          asdv
        </a>
      </div>
    </div>
  );
};

export default RootPage;
