import react, { Component } from 'react';
import EditComponent from '../Component/EditDialog';
import Alert from '@material-ui/lab/Alert';
export default class EditContainer extends Component{
   constructor(props){
       super(props)
       this.state={
      
        totalOpenAmt:null,
        dueDate:null,
        isOpen:0,

       }
       
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


  save=()=>{
      console.log("save")
     const axios=require('axios')
     axios({
         url:'http://localhost:8082/InvoiceManagement/saveOrUpdate.do',
         method:'get',
         params : {
            ...this.state,
            pkId:this.props.editPkId
         }
     })
     .then((res)=>{
         console.log(res);
         return <Alert severity="success">This is a success alert — check it out!</Alert>
     })
     .catch((err)=>{
         console.log(err);
     })
  }
  
   render(){
       //console.log("Add");
       console.log(this.props);
      // console.log()
       return(
           <div>
               <EditComponent
              editState={this.props.dialogState}
              changeDialogState={this.props.changeEditDialogState}
              changeState={this.changeState}
              changeDueDate={this.changeDueDate}
              dueDate={this.state.dueDate}
              save={this.save}/>
           </div>
       )
   }
}