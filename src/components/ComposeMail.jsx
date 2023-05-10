import React from 'react'
import { Dialog,Box , Typography,styled, InputBase, TextField, Button} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
const dialogStyle = {
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0'
}

const Header= styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background:'#f2f6fc',
    '&> p':{
        fontSize:'14px',
        fontWeight:500

    }

    })


    const FooterWrapper=styled(Box)({

        display:'flex',
        justifyContent:'space-between',
        padding:'10px 15px',



    })

    const SendButton=styled(Button)({
        background:'#0857D0',
        color:'#fff',
        fontWeight:'500',
        textTransform:'none',
        borderRadius:18,
        width:100
    })


    const RecipentWrapper=styled(Box)({

        display:'flex',
        flexDirection:'column', 
        padding:'0 15px',

        '& >div':{
            fontSize:'14px',
            borderBottom:'1px solid #e0e0e0',
            marginTop:10
        }

    })
const ComposeMail = ({openDialog,setOpenDialog}) => {


    const closeComposeMail=(e)=>{
        e.preventDefault()
        setOpenDialog(false)


    }
  return (
   <Dialog 
   open={openDialog}
   PaperProps={{sx:dialogStyle}}>
    
    
 
    
            <Header>
                <Typography>New Message</Typography>
                
                    <CloseIcon onClick={(e)=>closeComposeMail(e)} fontSize='small'/>
                
            </Header>
             <RecipentWrapper>
                <InputBase placeholder='Recipent'/>
                <InputBase placeholder='Subject'/>
            </RecipentWrapper>
          

          <TextField
          multiline
          rows={13}
          sx={{ '&. MuiOutlinedInput-notchedOutline':{border:'none'}}}
          />
            
          <FooterWrapper>
            <SendButton variant='contained' sx={{marginTop:2}}>Send</SendButton>
            <DeleteIcon/>
          </FooterWrapper>

        </Dialog>
  )
}

export default ComposeMail