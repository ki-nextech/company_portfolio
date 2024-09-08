import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

const HamburgerMenuIcon = () => {
  // drawerがopenしているかどうかのstate
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <header>
      <img 
        src="hamburger.svg" 
        onClick={() => setDrawerOpened(true)}
      />
      <Drawer
        anchor={'right'}
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}>

      </Drawer>
    </header>
  )
}
export default HamburgerMenuIcon;