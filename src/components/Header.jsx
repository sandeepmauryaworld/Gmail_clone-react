import React from 'react'
import { AppBar, Button, IconButton, Toolbar,styled, InputBase,Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {gmaillogo} from '../constant/constant'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const StyledAppBar=styled(AppBar)({   
  background:'#f5f5f5',
  boxShadow:'none'


})


const OptionsWrapper=styled(Box)({
  width:'100%',
  display:'flex', 
  justifyContent:'end',
'& > svg':{
  marginLeft:20,

}

})

const SearchWrapper=styled(Box)({
  background:'#EAF1FB',
  marginLeft:80,
  borderRadius:8,
  minWidth:690,
  maxWidth:720,
  height:48,
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  padding:'0 20px',
  '& > div':{
    width:'100%',
    padding:'0 10px',
  }
})
const Header = ({toggle}) => {
  return (
   <StyledAppBar position="static">
   
        <Toolbar>
          <MenuIcon color='action' onClick={toggle} />
          <img src={gmaillogo} alt="gmaillogo" height='50px' style={{marginLeft:10,width:110}}/>

         <SearchWrapper> 
          
          <SearchIcon/>
    <InputBase placeholder='Search Mail'/>
    <TuneIcon/>
    </SearchWrapper>
    

    <OptionsWrapper> 
       <HelpOutlineIcon color='action' />
      <SettingsIcon color='action'/>
      <AppsIcon color='action'/>
      <AccountCircleIcon color='action'/>


    </OptionsWrapper>
   
         
          
        </Toolbar>
      </StyledAppBar>
  )
}

export default Header