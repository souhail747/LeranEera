// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Box from '@mui/material/Box';

export default function SwiperComponent() {
  return (
    <>
      <Box
        sx={{
          width: "25vw",
          height: "100vh",
          maxHeight:"100vh"
        }}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
           <SwiperSlide>
            <img src="./src/images/s1.jpg" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </SwiperSlide>
          
           <SwiperSlide>
            <img src="./src/images/s2.jpg" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </SwiperSlide>
          
         
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-next-custom swiper-button-next"></div>
          <div className="swiper-button-prev-custom swiper-button-prev"></div>
        </Swiper>
      </Box>
    </>
  );
}