
import TitreH1 from "../TitreH1";
import Cadre from "./Cadre";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";



function Realisation() {

  return (
    <>
      <div className='compartiment-realisations'>
        <TitreH1 texte='Realisation'/>
          <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }}
            navigation={true} modules={[Pagination, Navigation]} className="mySwiper" >
            <SwiperSlide>
              <div className="cadre">
                <Cadre />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cadre">
                <Cadre />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cadre">
                <Cadre />
              </div>
            </SwiperSlide>
          </Swiper>
          
      </div>
    </>
  );
}

export default Realisation;