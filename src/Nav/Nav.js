
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Link
} from "react-router-dom";
import './Nav.css'



export default function Nav() {

  return (
    <div  >
      <AppBar position="static">
        <Toolbar  className='toolbar'>
           <p className='header'>Location App</p> 
            <Button variant="contained"  className='button' > <Link to="/Location" className='link'>Location</Link></Button>
            <Button variant="contained" className='button' > <Link to="/Category" className='link'>Category</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}