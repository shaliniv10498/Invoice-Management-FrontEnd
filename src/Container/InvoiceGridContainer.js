import react, { Component } from 'react';
import InvoiceGridComponent from '../Component/InvoiceGridComponent';
import AddContainer from  '../Container/AddContainer';
import EditContainer from '../Container/EditContainer';
import DeleteContainer from '../Container/DeleteContainer'
export default class InvoiceGridContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            gridData : null,
            search : null,
            addState : false,
            totalRecords:50000,//as of now hardcoded, should be fetched from backend with a count query
            offset:1,
            loading:false,
            checkedState:[],
            disableEdit:true,
            checked:false,
            editDialogState:false,
            editPkId:0,
            deleteListOfPkId:[],
            deleteDialogState:false,
            disableDelete:true
            
        }

    }

    setEditPkId=(pkId)=>{
        this.setState({
            editPkId:pkId
        })
    }

    changeEditDialogState=()=>{
        this.setState({
            editDialogState:!this.state.editDialogState
        })
    }
    changeDialogState=()=>{
        this.setState({
            addState:!this.state.addState
        })
    }

    componentDidMount(){
        this.setState({
            loading:true
        },this.dataLoad(this.state.search))
        console.log(this.state.gridData)
       
        
    }
    
    
    changeValue=(event)=>{
        this.setState(
            {
                [event.target.name] : event.target.value
            }, this.dataLoad(this.state.search))
    }
    pushCheckboxState=()=>{
        var arr = new Array();
        console.log(this.state.gridData)
        for(var i=0;i< this.state.gridData.length;i++){
            var jsonObj={pkId:null, isChecked:false}
            
            console.log(this.state.gridData[i].id)
            jsonObj['pkId']=this.state.gridData[i].id
            var myJSON = JSON.stringify(jsonObj);
            arr.push(myJSON);
            console.log("arr");
            console.log(arr[i].isChecked);
            this.setState({
                checkedState : [...arr]
            },()=>{console.log(this.state.checkedState[i])})
        }
    }

   

    changeListOfPkIds=(pkIds)=>{
        var arr = new Array();
        
        arr.push(pkIds)
        this.setState({
            deleteListOfPkId: [...this.state.deleteListOfPkId,...arr]
        },()=>{this.changedeleteDisableState(); this.changeEditButtonState()})
    }
    updateCheckedState=(index)=>{
     //   const { checkedState } = this.state;
      //  console.log(checkedState[index])
      
        this.setState(state => {

            const checkedState = state.checkedState.map((val, j) => {
              if (j === index) {
                  var obj = JSON.parse(val)
                  console.log(obj)
                  obj['isChecked']=!obj['isChecked']
                  this.changeListOfPkIds(obj['pkId'])
                  console.log(obj['pkId'])
                  obj=JSON.stringify(obj)
                  
                return obj
              } 
              else{
                  return val
              }
            });
       
            return {
              checkedState,
            };
        })
    }
    changeCheckedState=(event)=>{
        this.setState({
           checked : event.target.checked
        })
    }
    dataLoad=(search)=>{
        const axios = require('axios')
      //  var totalPages = this.state.totalRecords/20
       // console.log(totalPages);
        axios({
            method : 'get',
            url : 'http://localhost:8082/InvoiceManagement/loadData.do',
            
              params :{  query : search,
                start : this.state.offset,
                limit : 20
            }
        })
        .then((res)=>{
          //  var response = JSON.parse(res);
            //console.log(res.data.data);
            if(this.state.gridData===null){
             setTimeout(() => {
                this.setState({
                    gridData:res.data.data,
                    offset:this.state.offset+20,
                    loading:false
                },()=>{console.log(this.state.gridData); this.pushCheckboxState()})
              }, 3000);
          }
          else{
            setTimeout(() => {
                this.setState({
                    gridData:[...this.state.gridData,...res.data.data],
                    offset:this.state.offset+20,
                    loading:false
                },this.pushCheckboxState)
              }, 3000);
          }

         
        })
        .catch((er)=>{
            console.log(er);
        })
    }

    changeEditButtonState=()=>{
        if(this.state.deleteListOfPkId.length===1){
        this.setState({
            disableEdit:!this.state.disableEdit,
            editPkId:this.state.deleteListOfPkId[0]
        })
    }
    }
   
    changedeleteDialogState=()=>{
        if(this.state.deleteListOfPkId.length>0){
            this.setState({
                deleteDialogState:!this.state.deleteDialogState
            })
        }
    }

    changedeleteDisableState=()=>{
        this.setState({
            disableDelete:!this.state.disableDelete
        })
    }
    render(){
       
        return(
        <div >
            {
                
                this.state.addState===true? <AddContainer  dialogState={this.state.addState}
                changeDialogState={this.changeDialogState}
               
                />:null
            }
            {
                this.state.editDialogState===true?<EditContainer
                dialogState={this.state.editDialogState}
                changeEditDialogState={this.changeEditDialogState}
                editPkId={this.state.editPkId}
                />:null
            }
            {
               this.state.deleteDialogState===true?<DeleteContainer
               deleteDialogState={this.state.deleteDialogState}
            disableDelete={this.state.disableDelete}
            deleteListOfPkId={this.state.deleteListOfPkId}
                changedeleteDialogState={this.changedeleteDialogState}/>:null
            }
            <InvoiceGridComponent gridData={this.state.gridData}
            changeValue={this.changeValue}
            dialogState={this.state.addState}
            changeDialogState={this.changeDialogState}
            totalRecords={this.state.totalRecords}
            dataLoad={this.dataLoad}
            loading={this.state.loading}
            search={this.state.search}
            pushCheckboxState={this.pushCheckboxState}
            disableEdit={this.state.disableEdit}
            changeCheckedState={this.changeCheckedState}
            checked={this.state.checked}
            checkedState={this.state.checkedState}
            changeEditButtonState={this.changeEditButtonState}
            updateCheckedState={this.updateCheckedState}
            changeEditDialogState={this.changeEditDialogState}
            deleteDialogState={this.state.deleteDialogState}
            disableDelete={this.state.disableDelete}
           
            changedeleteDialogState={this.changedeleteDialogState}
            />
        </div>
        )
    }
}