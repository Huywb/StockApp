'use client'
import { MenuList } from '@/app/libs/Menu'
import { Box, IconButton, Input, Stack, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <Box display='flex' alignItems='center' flexDirection='row' justifyContent='space-between'>
      <Link href='/'><Typography sx={{fontWeight:'bold',fontSize:'30px',cursor:'pointer'}}>ImageStock</Typography></Link>
      <Stack display='flex' alignItems='center' paddingX={2} sx={{width:'50%',background:'#e0e0e0',color:'white',borderRadius:'30px'}} flexDirection='row' gap={2}>
        <IconButton> <FaSearch></FaSearch></IconButton>
        <TextField variant='standard'  sx={{width:'90%','& .MuiInput-underline:hover':{borderBottom:'none'},'& .MuiInput-underline:after':{borderBottom:'none'},'& .MuiInput-underline:before':{borderBottom:'none'}}} />
      </Stack>
      <Stack></Stack>
    </Box>
  )
}

export default Header