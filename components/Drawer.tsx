import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { CastMember } from '../lib/readGroupJson';
import Link from 'next/link';
import Image from 'next/image';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SwipeableTemporaryDrawer( {cast} : {cast: CastMember[]}) {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {cast.map((member: CastMember) => (
          <ListItem key={member.id} disablePadding>
            <Link href={member.name} style={{color: "white"}}>
              <ListItemButton>
                <ListItemIcon>
                  <Image width={28} height={28} alt={member.name} src={`/icons/${member.slug}.svg`}/>
                </ListItemIcon>
                <ListItemText primary={member.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  
  return (
    <>
      <div>
        {
          <ThemeProvider theme={darkTheme}>
            <React.Fragment>
              <Button  onClick={toggleDrawer(true)}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                {list()}
              </SwipeableDrawer>
            </React.Fragment>
          </ThemeProvider>
        }
      </div>
    </>
  );
}