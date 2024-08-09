import React from 'react';
import Slider from 'react-slick';
import slide from '../../../public/slide1.png'
import slide2 from '../../../public/next.svg'
import { Box } from '@mui/material';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface SliderBannerProps{
  listImage: any
}
const SliderBanner:React.FC<SliderBannerProps> = ({listImage}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {listImage.map((item: string | StaticImport,index: React.Key | null | undefined)=>(
        <Box key={index} sx={{borderRadius:'20px', position: 'relative', width: '100%', height: '400px' }}>
          <Image src={item} className='rounded-2xl' alt="slide 2" layout="fill" objectFit="cover" />
        </Box>
      ))}
    </Slider>
  );
};

export default SliderBanner;