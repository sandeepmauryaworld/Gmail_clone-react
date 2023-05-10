import { Box, Button, styled, List, ListItem, Container } from '@mui/material'
import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import SIDEBAR_DATA from '../config/Sidebar.config';
import ComposeMail from './ComposeMail';
const ComposeButton=styled(Button)({
    background:'#c2e7ff',
    color:'#001d35',
    padding:"16px",
    borderRadius:"16px",
    minWidth:140,
    textTransform:"none",   

})


const Cont= styled(Box)({
    padding:8,
    '&>ul ':{
        padding:'10px 0 0 5px',
        fontSize:14,
        fontWeight:500,
        cursor:'pointer',
    },

    '& >ul>li> svg':{
        marginRight:20,

    }
})
const SidebarContent = () => {


    const [openDialog, setOpenDialog]=useState(false);


    const onComposeClick=()=>{
        setOpenDialog(true);


    }
  return (
    <Cont>
       
            <ComposeButton onClick={onComposeClick} variant="contained"> <CreateIcon/>Compose</ComposeButton>
       <List>
        {
            SIDEBAR_DATA.map(data=>(
                <ListItem>
              <data.icon fontSize='small'/>  {data.title}
                    </ListItem>
            ))
        }
       </List>
       <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Cont>
  )
}

export default SidebarContent;