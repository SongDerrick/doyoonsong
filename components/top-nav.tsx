import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'

export default function TopNavBar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "black" }}>
      <AppBar position="static" sx={{backgroundColor: "black"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doyoon Song
          </Typography>
          <Button color="inherit">Porfolio</Button>
          <Button color="inherit" onClick={() => {
            <Link href={"/blogs"}></Link>
          }}>Blogs</Button>
          <Button color="inherit">Stories</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
