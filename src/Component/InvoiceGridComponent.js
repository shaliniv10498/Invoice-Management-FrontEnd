import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { TextField , Button,CircularProgress,Checkbox } from '@material-ui/core';

import InfiniteScroll from "react-infinite-scroll-component";


const customButtonStyle = makeStyles({
  divCss:{
    backgroundColor:'#402e25',
    border: '0.1vw solid #e5b73b',
    display :'flex'
  },
  root: {
    marginTop:'3vh',
    marginLeft:'2vw',
    boxShadow : '0.1vw 0.1vw 0.1vw 0.1vw rgb(255,219,88,0.25)',
    width: '6vw',
    height:'7vh',
    padding:'0.5vw',
    color : '#e5b73b',
    fontWeight :'bold',
    background:'linear-gradient(45deg, #6d4935 30%, #a67b5b 90%)',
    border : '0.1vw solid #7a563e',
    "&:hover": {
      backgroundColor: "#8B008B !important",
      fontWeight :'bolder',
      color:'#ffc1f3'
    },
    "&:disabled" :{
      color:'#b78727',
      fontWeight :'normal',
      border : '0.1vw solid #805a46',
    }
  
  },

  textFieldCss:{
   
    marginTop:'2vh',
      marginLeft:'55vw',
      width: '15vw',
      height:'9vh',
      padding:'0.5vw',
      color : '#bc6ff1',
   //   border : '0.01vw solid #bc6ff1'
  },
  gridContainer:{
    backgroundColor:'#402e25',
   
  },
 
  
  grid:{
   margin : '2vh 2vw 2vh 2vw',
   overflow : 'scroll',
   border:'0.1vw solid yellow',
   borderRadius:'0.5vw',
   
   boxShadow : '0.2vw 0.2vw 0.3vw 0.4vw rgb(213, 184, 255,0.25)',
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
   height: '80vh',
   width : '95vw'
  },

  gridHeader:{
    backgroundColor:'#543c30',
    
    height: 'auto !important'
  },
  gridHeaderRow :{
    color:'#e5b73b',
    fontWeight:'bold',
    fontSize:'2vh',
    height:'1vh'
  },
  tableBody:{
    height:'0.1vh',
    '&:nth-of-type(odd)': {
      backgroundColor: "#7a5647",
      
    },
    '&:nth-of-type(even)': {
      backgroundColor: "#7a5647",
      
    },
    
  },

  tableCell : {
   color :'#ffb938	',
   
   fontSize:'2vh',
   padding:0,
   height: 'auto !important'
  }
});


export default function InvoiceGridComponent(props){
 // console.log(props)
  const buttonStyle = customButtonStyle();
  //console.log
  var checkedValue = false

        return (
            props.gridData===null?<div><CircularProgress color="secondary"/></div>:
          <div style={{ maxHeight:'100vh'}}>
            
              <div className={buttonStyle.divCss}>
              <Button variant="outlined" color="secondary" className={buttonStyle.root} onClick={props.changeDialogState}>
                 Add
                </Button>
                <Button variant="outlined" color="secondary" className={buttonStyle.root} disabled={props.disableEdit} onClick={props.changeEditDialogState}>
                 Edit
                </Button>
                <Button variant="outlined" color="secondary" className={buttonStyle.root}
                disabled={props.disableDelete}
                onClick={props.changedeleteDialogState}>
                 Delete
                </Button>
                <TextField id="standard-search" label="Search Invoice Id" type="search" 
              variant="outlined" className={buttonStyle.textFieldCss}
              name="search"
              onChange={(event)=>{props.changeValue(event)}}/>
                </div>
                <TableContainer component={Paper} className={buttonStyle.gridContainer} >
               
              <Table  >
              <div id="scrollableDiv"  className={buttonStyle.grid} >
              <InfiniteScroll
            dataLength={props.gridData}
            next={()=>props.dataLoad(props.search)}
            hasMore={props.isNext}
            loader={<CircularProgress color="secondary"></CircularProgress>}
            scrollableTarget="scrollableDiv"
          >
              <TableHead className={buttonStyle.gridHeader}>
              <TableRow >
              
              <TableCell><Checkbox 
              checked={props.checked} onChange={(e)=>{props.changeCheckedState(e)}} /></TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Baseline Date</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Business Area</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Business Year</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Clear Date</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Customer Name</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Customer Number</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Document Create Date</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Document Id</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Document Type</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Due Date</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Invoice Currency</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Invoice Id</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Status</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Payment Terms</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Posting Date</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Posting Id</TableCell>
              <TableCell align="center" className={buttonStyle.gridHeaderRow}>Total Open Amount</TableCell>

             </TableRow>
            </TableHead>
            <TableBody  >
            
       
            
          {
         
          props.gridData.length>0?
          props.gridData.map((value,index) => (
            <TableRow key={index} className={buttonStyle.tableBody}>
             
              {
               props.checkedState.length > 0 ?
               checkedValue=props.checkedState[index].isChecked : checkedValue = false
               }
              
              <TableCell><Checkbox checked={checkedValue} onChange={()=>{
              
              props.updateCheckedState(index);
              
             } 
              }/></TableCell>
              <TableCell align="center" className={buttonStyle.tableCell}>{value.baselineDate}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.businessArea}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.businessYear}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.clearDate}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.custName}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.custNumber}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.docCreateDate}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.docId}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.documentType}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.dueDate}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.invoiceCurrency}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.invoiceId}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.isOpen}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.paymentTerms}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.postingDate}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.postingId}</TableCell>
              <TableCell align="center"className={buttonStyle.tableCell}>{value.totalOpenAmt}</TableCell>

             </TableRow>
             ))
             :
             <h1>No records found</h1>
            
             }
             {props.pushCheckboxState}
           
           </TableBody>
           </InfiniteScroll>
           </div>

              </Table>
             
              </TableContainer>
              
          </div>
        );
      
}