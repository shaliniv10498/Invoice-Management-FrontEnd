import React from  'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';

import {
    MuiPickersUtilsProvider,

    KeyboardDatePicker,
  } from '@material-ui/pickers';

import { DialogContent,TextField,DialogContentText,Button,DialogActions,Select ,MenuItem  } from '@material-ui/core';
export default function(props){
 const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

 
    
    return(
        <Dialog onClose={props.changeDialogState} open={props.editState}>
            <DialogTitle id="simple-dialog-title">Edit</DialogTitle>
            
            <DialogContent>
           <DialogContentText>
            Total Open Amount
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="totalOpenAmt"
            type="number"
            fullWidth
            onChange={(e)=>{props.changeState(e)}}
          />
       
          <DialogContentText>
           Due Date
          </DialogContentText>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy-MM-dd"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          name="dueDate"
          value={props.dueDate}
          onChange={(e)=>{props.changeDueDate(e)}}
        />
       
        </MuiPickersUtilsProvider>
          <DialogContentText>
            Invoice Status
          </DialogContentText>
          <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
         
          onChange={(e)=>{props.changeState(e)}}
        >
          
          <MenuItem value={1}>Open</MenuItem>
          <MenuItem value={0}>Close</MenuItem>
         </Select>     
        </DialogContent>

            <DialogActions>
          <Button onClick={props.changeDialogState} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{props.save()}} color="primary">
            Save
          </Button>
        </DialogActions>
        </Dialog>
    )
}



