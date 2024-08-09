'use client'
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import slide1 from '../../../public/slide1.png';
import slide2 from '../../../public/slide2.png';
import slide3 from '../../../public/1.webp'
import SliderBanner from '@/app/components/Slider/page';
import Photos from '@/app/components/Photo/page';

const Content = () => {
  const list = [slide1,slide2,slide3]
  const [data,setData] = useState([])
  const [video,setVideo] = useState([])

  const fetchData = async()=>{
    const Fetching = await fetch(`https://api.pexels.com/v1/curated?page=1&per_page=30`,{
      headers: {
        Authorization: 'q0DDDK5x4GZjyxlDSyqL4IXwD4WHGaBdij4ysr5SRMBSCY4jtdBixcAp'
      }
    })
    const finalData = await Fetching.json()
    setData(finalData.photos)
    const FetchingVideo = await fetch(`https://api.pexels.com/videos/popular?page=1&per_page=30`,{
      headers: {
        Authorization: 'q0DDDK5x4GZjyxlDSyqL4IXwD4WHGaBdij4ysr5SRMBSCY4jtdBixcAp'
      }
    })
    const FinalVideo = await FetchingVideo.json()
    setVideo(FinalVideo.videos)
  }
  useEffect(()=>{
    fetchData()
  },[])
  console.log('video',video)
  return (
    <Box sx={{ flex: 4, maxWidth: '80%', margin: '0 auto' }}>  {/* Container with max width */}
      <SliderBanner listImage={list}></SliderBanner>
      <Photos data={data} name='Photos'></Photos>
      <Photos data={video} name='Videos'></Photos>
    </Box>
  );
};

export default Content;
