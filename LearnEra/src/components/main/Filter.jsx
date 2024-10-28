import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
export default function Filter({ onCategoryChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index, category) => {
    setActiveIndex(index);
    onCategoryChange(category);
  };

  const buttons = [
    { label: 'All courses' },
    { label: 'Web' },
    { label: 'Design' },
    { label: 'JS' },
    { label: 'NextJs' }
  ];

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", gap: 2, mt: "18px" , }}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant="outlined"
          className={` ${index === activeIndex ? 'active' : 'mybutton'}`}
          onClick={() => handleButtonClick(index, button.label)}
        >
          {button.label}
        </Button>
      ))}
    </Box>
  );
}
