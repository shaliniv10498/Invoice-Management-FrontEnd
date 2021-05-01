import React from  'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {
    MuiPickersUtilsProvider,

    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { DialogContent,TextField,DialogContentText,Button,DialogActions,Select ,MenuItem,Menu } from '@material-ui/core';
import { findByLabelText } from '@testing-library/dom';


const form = makeStyles({
  containerStyle:{
    marginTop:'3vh',
    maxHeight:'70vh',
    width:'80vw',
  },
  root:{
    background :'linear-gradient(45deg, #543c30 30%, #946c57 90%)',
    boxShadow : '0.1vw 0.1vw 0.1vw 0.1vw rgb(213,197,189,0.25)',
    color : '#ffc65c',
    
    overflowY:'scroll',
    width:'40vw',
    height:'70vh',
    '&::-webkit-scrollbar': {
      width: '1vw',
      backgroundColor:'#1e1510',
      borderRadius:'2vw',
      
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgb(95, 53, 58,0.25)',
      borderRadius:'2vw'
    },
     },

  titleCss:{
    color : '#ffb429',
    fontWeight: 'bolder'
  },
  
  layoutLabelTextFieldCSS:{
    display:'flex',
    justifyContent: 'space-between',
  },
  textFieldsCss : {
    width : '15vw',
    height: '5vh',
    color : 'yellow',
    
  },
  buttonStyle:{
    boxShadow : '0.1vw 0.1vw 0.1vw 0.1vw rgb(255,219,88,0.25)',
    width: '6vw',
    height:'5vh',
    padding:'0.5vw',
    color : '#e5b73b',
    fontWeight :'bold',
    background:'linear-gradient(45deg, #6d4935 30%, #a67b5b 90%)',
    border : '0.1vw solid #7a563e',
    "&:hover": {
      backgroundColor: "#402e25 !important",
      fontWeight :'bolder',
      color:'yellow'
    },
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
});

export default function(props){
 const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
 const formStyle = form();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    
    return(
        <Dialog onClose={props.changeDialogState} open={props.addState} className={formStyle.containerStyle}>
          <div className={formStyle.root}>
            <DialogTitle id="simple-dialog-title" className={formStyle.titleCss}>ADD</DialogTitle>
            
            <DialogContent>
            <div className={formStyle.layoutLabelTextFieldCSS}>
            <DialogContentText style={{color:'#ffa805'}}>
             Invoice Id
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="invoiceId"
            type="text"
            variant="filled"
            className={formStyle.textFieldsCss}
            onChange={(e)=>{props.changeState(e)}}
          />
          </div>
          <br/>
          <div className={formStyle.layoutLabelTextFieldCSS}>
          <DialogContentText style={{color:'#ffa805'}}>
             Customer Name
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="custName"
            type="text"
            variant="filled"
            className={formStyle.textFieldsCss}
            onChange={(e)=>{props.changeState(e)}}
          />
          </div>
          <br/>
          <div className={formStyle.layoutLabelTextFieldCSS}>
          <DialogContentText style={{color:'#ffa805'}}>
             Customer Number
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="custNumber"
            variant="filled"
            type="text"
            required
            className={formStyle.textFieldsCss}
            onChange={(e)=>{props.changeState(e)}}
          />
          </div>
          <br/>
          <div className={formStyle.layoutLabelTextFieldCSS}>
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
            required
            className={formStyle.textFieldsCss}
            onChange={(e)=>{props.changeState(e)}}
          />
          </div>
          <br/>
          <div className={formStyle.layoutLabelTextFieldCSS}>
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
          required
          name="dueDate"
          value={props.dueDate}
          onChange={(e)=>{props.changeDueDate(e)}}
        />
         <br/>
        </MuiPickersUtilsProvider>
        </div>
        <div className={formStyle.layoutLabelTextFieldCSS}>
          <DialogContentText style={{color:'#ffa805'}}>
            Document Create Date
          </DialogContentText>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          disableToolbar
          variant="filled"
          format="yyyy-MM-dd"
          margin="normal"
          id="date-picker-inline"
          required
          value={props.docCreateDate}
          onChange={(e)=>{props.changeDocCreateDate(e)}}
        />
        </MuiPickersUtilsProvider>
        </div>
        <br/>
        <div className={formStyle.layoutLabelTextFieldCSS}>
          <DialogContentText style={{color:'#ffa805'}}>
            Invoice Status
          </DialogContentText>
          <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          variant="filled"
          required
          style={{width:'15vw'}}
          onChange={(e)=>{props.changeState(e)}}
        >
          <MenuItem  value={1}>Open</MenuItem>
          <MenuItem  value={0}>Close</MenuItem>
         </Select>  
         </div> 
         <br/>  
        </DialogContent>
        
        <div className={formStyle.buttonDiv}>
            <DialogActions>
          <Button onClick={props.changeDialogState} className={formStyle.buttonStyle}>
            Cancel
          </Button>
          <Button onClick={()=>{props.save()}}  className={formStyle.buttonStyle}>
            Save
          </Button>
        </DialogActions>
        </div>
        </div>
        </Dialog>
    )
}



