import React from  'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent,DialogContentText,Button,DialogActions } from '@material-ui/core';

export default function(props){
 const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

 
    
    return(
        <Dialog onClose={props.changedeleteDialogState} open={props.deleteDialogState}>
            <DialogTitle id="simple-dialog-title">Edit</DialogTitle>
            
            <DialogContent>
           <DialogContentText>
            Do you really want to deleted ?
          </DialogContentText>
            <DialogActions>
          <Button onClick={props.changedeleteDialogState} color="primary">
            No
          </Button>
          <Button onClick={()=>{props.save()}} color="primary">
            Yes
          </Button>
        </DialogActions>
        </DialogContent>
        </Dialog>
    )
}



