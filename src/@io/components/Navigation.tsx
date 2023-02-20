import { LogoAspectRatioCalculatorSvg } from '@io/svgs';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export function Navigation() {
  const [alignment, setAlignment] = React.useState('home');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <nav className='components--navigation'>
      <div className='logo--container'>
        <img src={LogoAspectRatioCalculatorSvg} className='logo--img' alt='logo' />
      </div>
      <div className='menu--container'>
        <ToggleButtonGroup
          color='primary'
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label='Platform'
        >
          <ToggleButton value='home'>
            <Link to='/'>Home</Link>
          </ToggleButton>
          <ToggleButton value='pure-aspect-ratio'>
            <Link to='pure-aspect-ratio'>Pure Aspect Ratio</Link>
          </ToggleButton>
          <ToggleButton value='square-aspect-ratio'>
            <Link to='square-aspect-ratio'>Square Aspect Ratio</Link>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </nav>
  );
}
