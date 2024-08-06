'use client'
import { MenuList } from '@/app/libs/Menu'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SiderBar = () => {
  const pathName = usePathname()

  return (
    <Box sx={{flex:1}}display='flex' flexDirection='column'> 
      {MenuList.map((item,index)=>(
          <Link href={item.route} key={index}>
            <Stack  padding={2} display='flex'  flexDirection='row' alignItems='center' gap={2} sx={{transition:'.2s',borderRadius:'30px',background: pathName==item.route ?'#ffe0b2' : '','&:hover' : {background: pathName==item.route ?'' : '#e0e0e0'}}}>
              <Stack fontSize={20}>{item.icon}</Stack>
              <Typography  sx={{ fontSize:'20px',opacity:pathName==item.route ?'1' : '.5',transition:'.2s','&:hover':{cursor:'pointer',opacity:'1'},}}>{item.name}</Typography>
            </Stack>
          </Link>
        ))}
    </Box>
  )
}

export default SiderBar