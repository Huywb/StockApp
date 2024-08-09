import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useMemo } from 'react'
import HoverVideo from '../Video/page'

interface PhotosProps{
    data : any,
    name: String
}
const Photos:React.FC<PhotosProps> = ({data,name}) => {
    if(!data){
        return (
            <Box>Loading...</Box>
        )
    }
    const data1 = data.filter((_: any, index: number) => index % 3 === 0);
    const data2 = data.filter((_: any, index: number) => index % 3 === 1);
    const data3 = data.filter((_: any, index: number) => index % 3 === 2);
  return (
    <Box sx={{width:'80%'}} display='flex'gap={4} flexDirection='column' marginTop={4} marginX='auto'>
        {name}
        <Box gap={2} display='flex' flexDirection='row'  sx={{
            position: 'relative',
            overflow: 'hidden',
            maxHeight:'1500px',
            '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px', // Adjust based on how much blur you want
            background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)',
            backdropFilter: 'blur(3px)',
            zIndex: 1, // Ensures the blur appears above the content
            },
        }} >
            <Box width='33%' display='flex' flexDirection='column' gap={2}>
                {data1.map((item: any,index: any)=>(
                    (item.src)?
                        <img src={item.src.large} ></img>
                    : 
                    <> 
                        <HoverVideo src={item.video_files[2]}></HoverVideo>
                    </>
                ))}
            </Box>
            <Box width='33%' display='flex' flexDirection='column-reverse' gap={2}>
                {data2.map((item: any,index: any)=>(
                   (item.src)?
                        <img src={item.src.large} ></img>
                    :
                    <> 
                        <HoverVideo src={item.video_files[2]}></HoverVideo>
                    </>
                ))}
            </Box>
            <Box width='33%' display='flex' flexDirection='column' gap={2}>
                {data3.map((item: any,index: any)=>(
                  (item.src)?
                        <img src={item.src.large} ></img>
                    : 
                    <> 
                        <HoverVideo src={item.video_files[2]}></HoverVideo>
                    </>
                ))}
            </Box>
            <Button sx={{borderRadius:'20px',fontSize:'18px',background:'#1de9b6',color:'white',position:'absolute',bottom:'20px',zIndex:10,right:0,left:0,width:'30%',marginX:'auto'}}>See More</Button>
        </Box>    
    </Box>
  )
}

export default Photos