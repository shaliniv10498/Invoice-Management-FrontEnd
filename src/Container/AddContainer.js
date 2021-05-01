import react, { Component } from 'react';
import AddComponent from '../Component/AddDialog';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

export default class AddContainer extends Component{
   constructor(props){
       super(props)
       this.state={
        invoiceId:null,
        custName:null,
        custNumber:null,
        totalOpenAmt:null,
        dueDate:null,
        docCreateDate:null,
        isOpen:0,
        snackBarState:false,
        message:undefined,
        msgSuccessState:false,
        position:{
            vertical:'top',
            horizontal :'center'
        }
       }
       
   }
   changeTrueSnackBarState=(msg)=>{
       this.setState({
           snackBarState:true,
           message:msg
       })
   }
   changeFalseSnackBarState=()=>{
    this.setState({
        snackBarState:false,
        
    })
}
   changeState=(event)=>{
     this.setState({
         [event.target.name]:event.target.value
     })
   }

   changeDueDate=(selectedDate)=>{
       console.log(selectedDate);
       var dueInDate = new Date(selectedDate);
       console.log(dueInDate);
        var dd = String(dueInDate. getDate()). padStart(2, '0');
        console.log(dd);
       var mm = String(dueInDate. getMonth() + 1). padStart(2, '0'); //January is 0!
       console.log(mm)
        var yyyy = dueInDate. getFullYear();
        console.log(yyyy)
        var dueDate = yyyy+'-'+mm+'-'+dd
        console.log(dueDate)
// ​
//         dueInDate = yyyy + '-' + mm + '-' + dd
    this.setState({
        dueDate : dueInDate
    })
}

changeDocCreateDate=(selectedDate)=>{
    console.log(selectedDate);
    var dueInDate = new Date(selectedDate);
    console.log(dueInDate);
     var dd = String(dueInDate. getDate()). padStart(2, '0');
     console.log(dd);
    var mm = String(dueInDate. getMonth() + 1). padStart(2, '0'); //January is 0!
    console.log(mm)
     var yyyy = dueInDate. getFullYear();
     console.log(yyyy)
     var docCreateDate = yyyy+'-'+mm+'-'+dd
     console.log(docCreateDate)
// ​
//         dueInDate = yyyy + '-' + mm + '-' + dd
 this.setState({
     docCreateDate : docCreateDate
 })
}
  save=()=>{
      console.log("save")
     const axios=require('axios')
     axios({
         url:'http://localhost:8082/InvoiceManagement/saveOrUpdate.do',
         method:'get',
         params : {
            ...this.state
         }
     })
     .then((res)=>{
         console.log(res);
         if(res.data.status===true){
         this.changeTrueSnackBarState("Successfully saved the invoice Data!");
         this.setState({
            msgSuccessState:true,
         })
         
        }
        else{
            this.changeTrueSnackBarState("Could not save the invoice data!");

        }
       
     })
     .catch((err)=>{
         console.log(err);
         this.changeTrueSnackBarState("Could not save the invoice data!");
     })
  }
   
   render(){
      
     const {vertical,horizontal}=this.state.position
       return(
           <div>
               {
                   this.state.snackBarState===true?
                   <Snackbar anchorOrigin={ {vertical,horizontal}} style={{width:'20vw', height:'7vh'}} open={this.state.snackBarState} autoHideDuration={6000} onClose={this.changeFalseSnackBarState}>
                       {
                           this.state.msgSuccessState===true?
                           <Alert severity="success">
                           {this.state.message}
                          </Alert>:
                          <Alert severity="error">
                          {this.state.message}
                         </Alert>
                       }
                      
                   </Snackbar>:null
               }
               <AddComponent
              addState={this.props.dialogState}
              changeDialogState={this.props.changeDialogState}
              changeState={this.changeState}
              changeDueDate={this.changeDueDate}
              changeDocCreateDate={this.changeDocCreateDate}
              dueDate={this.state.dueDate}
              docCreateDate={this.state.docCreateDate}
              save={this.save}
              />
           </div>
       )
   }
}