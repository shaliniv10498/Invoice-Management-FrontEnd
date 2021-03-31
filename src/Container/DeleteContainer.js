import react, { Component } from 'react';
import DeleteComponent from '../Component/DeleteDialog';
import Alert from '@material-ui/lab/Alert';
export default class AddContainer extends Component{
   constructor(props){
       super(props)
       this.state={}
       
   }
  
    save=()=>{
      console.log("save")
     const axios=require('axios')
     
     
     
     axios({
         url:'http://localhost:8082/InvoiceManagement/delete.do',
         method:'get',
         params : {
            listofPkIds : this.props.deleteListOfPkId.join()
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
               <DeleteComponent
               deleteDialogState={this.props.deleteDialogState}
               deleteListOfPkId={this.props.deleteListOfPkId}
               changedeleteDialogState={this.props.changedeleteDialogState}
              save={this.save}/>
           </div>
       )
   }
}