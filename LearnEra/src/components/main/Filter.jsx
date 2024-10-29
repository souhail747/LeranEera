import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// eslint-disable-next-line react/prop-types
export default function Filter({ onCategoryChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index, category) => {
    setActiveIndex(index);
    onCategoryChange(category);
  };
  const scrollContainerRef = useRef(null);

  const handleScrollL = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -100,
        behavior: 'smooth', 
      });
    }
  }
  const handleScrollR = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 100,
        behavior: 'smooth', 
      });
    }
  }
  const buttons = [
    { label: 'All courses' },
    { label: 'Web' },
    { label: 'Design' },
    { label: 'JS' },
    { label: 'All courses' },
    { label: 'Web' },
    { label: 'Design' },
    { label: 'JS' },
    { label: 'All courses' },
    { label: 'Web' },
    { label: 'Design' },
    { label: 'JS' },

  ];

  return (
    <div style={{ width: "100%", display:'flex', flexDirection:'row', gap:'20px',alignItems:'center',justifyContent:'center' }}>
    <ArrowBackIcon
    onClick={handleScrollL}
    sx={{
      padding:'10px',
      borderRadius:'50px',
      "&:hover" : {
        bgcolor : 'rgba(0,0,0,0.1)',
        color:'#2cccc4',
        cursor:'pointer'
      }
    }}/>
      <Box ref={scrollContainerRef} className='fbox' sx={{ maxWidth: "800px", display: "flex", justifyContent: "center", gap: 2,overflow:'hidden',hoverflowX: 'auto' }}>
        {buttons.map((button, index) => (
          <button 
            key={index}
            className={` ${index === activeIndex ? 'active' : 'mybutton'}`}
            onClick={() => handleButtonClick(index, button.label)}
          >
            {button.label}
          </button>
        ))}
      </Box>
      <ArrowForwardIcon
      onClick={handleScrollR}
      sx={{
      padding:'10px',
      borderRadius:'50px',
      "&:hover" : {
        bgcolor : 'rgba(0,0,0,0.1)',
        color:'#2cccc4',
        cursor:'pointer'
      }
    }} />
    </div>
  );
}
