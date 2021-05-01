import React from  'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,

    KeyboardDatePicker,
  } from '@material-ui/pickers';

import { DialogContent,TextField,DialogContentText,Button,DialogActions,Select ,MenuItem  } from '@material-ui/core';

const editFormStyle=makeStyles({
  containerStyle:{
    marginTop:'3vh',
    height:'55vh',
    width:'80vw',
  },
  titleCss:{
    color : '#ffb429',
    fontWeight: 'bolder'
  },
  layoutLabelTextFieldCSS:{
    display:'flex',
    justifyContent: 'space-between',
  },
  root:{
    background :'linear-gradient(45deg, #543c30 30%, #946c57 90%)',
    boxShadow : '0.1vw 0.1vw 0.1vw 0.1vw rgb(213,197,189,0.25)',
    color : '#ffc65c',
    width:'40vw',
    height:'55vh',
    
  },
  buttonDiv:{
    display:'flex',
    justifyContent:'flex-end',
    marginBottom:'0.5vh',
  },
  dropDownItems:{
    color : '#e5b73b',
    fontWeight :'bold',
    width:'10vw',
    height:'7vh',
    background:'linear-gradient(45deg, #6d4935 30%, #a67b5b 90%)',
    border : '0.1vw solid #7a563e',
    "&:hover": {
      backgroundColor: "#402e25 !important",
      fontWeight :'bolder',
      color:'yellow'
    },
  }
})
export default function(props){
 
 const editStyle = editFormStyle()
    return(
        <Dialog onClose={props.changeDialogState} open={props.editState} className={editStyle.containerStyle}>
          <div className={editStyle.root}>
            
            <DialogTitle id="simple-dialog-title">EDIT</DialogTitle>
            
            <DialogContent>
           <div className={editStyle.layoutLabelTextFieldCSS}>
           <DialogContentText style={{color:'#ffa805'}}>
            Total Open Amount
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="totalOpenAmt"
            type="number"
            variant="filled"
            className={editStyle.textFieldsCss}
            onChange={(e)=>{props.changeState(e)}}
            required
          />
          </div>
          <div className={editStyle.layoutLabelTextFieldCSS}>
          <DialogContentText style={{color:'#ffa805'}}>
           Due Date
          </DialogContentText>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          disableToolbar
          variant="filled"
          format="yyyy-MM-dd"
          margin="normal"
          id="date-picker-inline"
          name="dueDate"
          value={props.dueDate}
          style={{width:'15vw'}}
          className={editStyle.textFieldsCss}
          onChange={(e)=>{props.changeDueDate(e)}}
          required
        />
        
        </MuiPickersUtilsProvider>
        </div>
        <div className={editStyle.layoutLabelTextFieldCSS}>
          <DialogContentText style={{color:'#ffa805'}}>
            Invoice Status
          </DialogContentText>
          <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          className={editStyle.textFieldsCss}
          onChange={(e)=>{props.changeState(e)}}
          style={{width:'15vw'}}
          variant="filled"
        >
          
          <MenuItem value={1}>Open</MenuItem>
          <MenuItem value={0}>Close</MenuItem>
         </Select>  
         </div>   
        </DialogContent>

            <DialogActions>
          <div className={editStyle.buttonDiv}>
          <Button onClick={props.changeDialogState} className={editStyle.buttonStyle}>
            Cancel
          </Button>
          <Button onClick={()=>{props.save()}} className={editStyle.buttonStyle}>
            Save
          </Button>
          </div>
        </DialogActions>
        </div>
        </Dialog>
    )
}



