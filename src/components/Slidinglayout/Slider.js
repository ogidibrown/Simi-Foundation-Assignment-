import './Slider.css';
import { Autoplay, Pagination, Navigation } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import Img1 from '../Slidinglayout/img/img1.jpg';
import Img2 from '../Slidinglayout/img/img2.jpg';
import Img3 from '../Slidinglayout/img/img3.jpg';
import Img4 from '../Slidinglayout/img/img4.jpeg';
import 'swiper/css';



const Slider = () => {
  return (
    <div>
         <Swiper 
            style={{
                "--swiper-navigation-color":"black",
                "--swiper-navigation-size":"3.3rem"
            }}
            centeredSlides={true}
            autoplay={{
                delay:2000,
                disableOnInteraction:false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide>
                    <img src={Img1} style={{width:'100%'}} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img2} style={{width:'100%'}} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img3} style={{width:'100%'}} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img4} style={{width:"100%"}} alt="" />
                </SwiperSlide>
                
            </Swiper>
    </div>
  )
}

export default Slider