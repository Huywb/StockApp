import React from 'react';
import Box from '@mui/material/Box';

const HoverVideo: React.FC<{ src: any }> = ({ src }) => {
  return (
    <Box
      component="video"
      src={src.link}
      autoPlay={false}
      muted
      sx={{
        width: '100%', // Adjust the width as needed
        borderRadius: '8px', // Optional: add border radius
        cursor: 'pointer',
        '&:hover': {
          filter: 'brightness(1.2)', // Optional: brighten the video on hover
        },
      }}
      onMouseEnter={(e) => (e.currentTarget as unknown as HTMLVideoElement).play()}
      onMouseLeave={(e) => (e.currentTarget as unknown as HTMLVideoElement).pause()}
    />
  );
};

export default HoverVideo;
