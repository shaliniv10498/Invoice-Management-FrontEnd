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
import '../customCSS/grid.css';
import InfiniteScroll from "react-infinite-scroll-component";


export default function InvoiceGridComponent(props){
  
  var checkedValue = false
 
    const columnMap = [
        {field:"baselineDate", headerName : "Base Line Date", width : 150},
        {field:"businessArea", headerName : "Business Area",width : 150},
        {field:"businessYear", headerName : "Business Year",width : 150},
        {field:"clearDate", headerName :"clear Date",width : 150},
        {field:"custName", headerName : "Customer Name",width : 150},
        {field:"custNumber", headerName : "Customer Number",width : 150},
        {field:"docCreateDate", headerName : "Document Create Date",width : 150},
        {field:"docId", headerName : "Document Id",width : 150},
        {field:"documentType", headerName : "Document Type",width : 150},
        {field:"dueDate", headerName : "Due Date",width : 150},
        {field:"invoiceCurrency", headerName : "Invoice Currency",width : 150},
        {field:"invoiceId", headerName : "Invoice Id",width : 150},
        {field:"isOpen", headerName : "isOpen",width : 150},
        {field:"paymentTerms", headerName : "Payment Terms",width : 150},
        {field:"postingDate", headerName : "Posting Date",width : 150},
        {field:"postingId", headerName : "Posting Id",width : 150},
        {field:"totalOpenAmt", headerName : "Total Open Amount",width : 150}
    ]
 
      
        return (
            props.gridData===null?<div><CircularProgress color="secondary"/></div>:
          <div style={{ maxHeight:'100vh'}}>
            
              <div>
              <TextField id="standard-search" label="Search Invoice Id" type="search" 
              variant="outlined" className="textFieldCss"
              name="search"
              onChange={(event)=>{props.changeValue(event)}}/>
              <Button variant="outlined" color="secondary" className="textFieldstyle" onClick={props.changeDialogState}>
                 Add
                </Button>
                <Button variant="outlined" color="secondary" className="textFieldCss" disabled={props.disableEdit} onClick={props.changeEditDialogState}>
                 Edit
                </Button>
                <Button variant="outlined" color="secondary" className="textFieldCss"
                disabled={props.disableDelete}
                onClick={props.changedeleteDialogState}>
                 Delete
                </Button>
                </div>
                <TableContainer component={Paper} >
             
              <Table  className="grid" >
              <div d="scrollableDiv" style={{overflowY: 'scroll',maxHeight:'90vh'}}>
              <InfiniteScroll
            dataLength={200}
            next={()=>props.dataLoad(props.search)}
            hasMore={false}
            loader={<CircularProgress color="secondary"></CircularProgress>}
            scrollableTarget="scrollableDiv"
          >
              <TableHead className="gridheader">
              <TableRow>
              
              <TableCell><Checkbox 
              checked={props.checked} onChange={(e)=>{props.changeCheckedState(e)}} /></TableCell>
              <TableCell align="center" >Baseline Date</TableCell>
              <TableCell align="center">BusinessArea</TableCell>
              <TableCell align="center">BusinessYear</TableCell>
              <TableCell align="center">clearDate</TableCell>
              <TableCell align="center">custName</TableCell>
              <TableCell align="center">custNumber</TableCell>
              <TableCell align="center">docCreateDate</TableCell>
              <TableCell align="center">docId</TableCell>
              <TableCell align="center">documentType</TableCell>
              <TableCell align="center">dueDate</TableCell>
              <TableCell align="center">invoiceCurrency</TableCell>
              <TableCell align="center">invoiceId</TableCell>
              <TableCell align="center">isOpen</TableCell>
              <TableCell align="center">paymentTerms</TableCell>
              <TableCell align="center">postingDate</TableCell>
              <TableCell align="center">postingId</TableCell>
              <TableCell align="center">totalOpenAmt</TableCell>

             </TableRow>
            </TableHead>
            <TableBody >
            
       
            
          {
         
            
          props.gridData.map((value,index) => (
            <TableRow key={index}>
             
              {
               props.checkedState.length > 0 ?
               checkedValue=props.checkedState[index].isChecked : checkedValue = false
               }
              
              <TableCell><Checkbox checked={checkedValue} onChange={()=>{
              
              props.updateCheckedState(index);
             } 
              }/></TableCell>
              <TableCell align="center">{value.baselineDate}</TableCell>
              <TableCell align="center">{value.businessArea}</TableCell>
              <TableCell align="center">{value.businessYear}</TableCell>
              <TableCell align="center">{value.clearDate}</TableCell>
              <TableCell align="center">{value.custName}</TableCell>
              <TableCell align="center">{value.custNumber}</TableCell>
              <TableCell align="center">{value.docCreateDate}</TableCell>
              <TableCell align="center">{value.docId}</TableCell>
              <TableCell align="center">{value.documentType}</TableCell>
              <TableCell align="center">{value.dueDate}</TableCell>
              <TableCell align="center">{value.invoiceCurrency}</TableCell>
              <TableCell align="center">{value.invoiceId}</TableCell>
              <TableCell align="center">{value.isOpen}</TableCell>
              <TableCell align="center">{value.paymentTerms}</TableCell>
              <TableCell align="center">{value.postingDate}</TableCell>
              <TableCell align="center">{value.postingId}</TableCell>
              <TableCell align="center">{value.totalOpenAmt}</TableCell>

             </TableRow>
             ))
           
            
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