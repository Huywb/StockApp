'use client'
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import Header from "./pages/Header/page";
import SiderBar from "./pages/Siderbar/page";
import Content from "./pages/Content/page";


export default function Home() {
  const data =process.env.API_KEY
  const fetchData = async()=>{
    const Fetching = await fetch(`https://api.pexels.com/v1/curated?page=1&per_page=80`,{
      headers: {
        Authorization: 'q0DDDK5x4GZjyxlDSyqL4IXwD4WHGaBdij4ysr5SRMBSCY4jtdBixcAp'
      }
    })
    const finalData = await Fetching.json()
    console.log('data',finalData)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <Box>
      <Stack>
        <Header></Header>
      </Stack>
      <Stack paddingY={4} display='flex' flexDirection='row' gap={4}>
        <SiderBar></SiderBar>
        <Content></Content>
      </Stack>
    </Box>
  );
}
