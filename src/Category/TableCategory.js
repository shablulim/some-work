import React from 'react';
import Table from "react-table-lite";

function TableCategory(){
     let Users = [
      {

        category: "Bank",


      },
      {

        category: "Atm",

 
      },
      {
 
        category: "Supermarket",

      },

    ];
      return(
        <Table
           data = {Users}		
           // Array of JSONObjects(required)
           header = {["category"]}  
           // Headers should be same as data JSON Object's keys (required)
           sortBy = {["category"]}
           // keys for sorting should be present in header array
           customHeaders={{"category":"category"}}
           // custom header label in JSON        
           searchable={true}
           // Enable table search field
           searchBy={["category"]}
           // keys for sorting should be present in header array
           download = {true}
           // Pass true to enable download button 
           // note: If multiselect is enabled,
           // only checked rows will be downloaded
           downloadButtonID="my-download"
           // id of download button
           searchInputID={"my-search"}
           // id of input element used for search
           searchFormID={"my-form"}
           // id of form element used for search
           // with reset and search button feature
           fileName = {"Table_Data"}
           // Default name of downloaded csv file
           noDataMessage={"my custom no data"}
           // Custom no data string.            
           limit = {10}
           // No of rows to display at a time
        //    containerStyle = {}
           // Customize table container style           
        //    headerStyle = {}
           // Customize table header style
        //    rowStyle = {}
           // Customize table row style
        //    dataStyle = {}
           // Customize table data cell style
           selectedClassName={"my-selected-class"}
           // Assign className to checked row
           showActions = {true}
           // Enable Row Operation
           showPagination={true}
           // Enable Pagination
           totalPages={10} 
           // Total Pages of data
           currentPage={1}
           // Current Page number
           range={5}
           // range for show page number 
           actionTypes={["edit","delete"]} 
           // Type of Row Operation (case insensitive)
           // Enable Multi-select
           defaultCheckedKey={"selected"}
           // Key present in data to mark row checked
           disableCheckedKey={"selectDisabled"}
           // Key present in data to make row checkbox disabled
           renderView={{
             "render":
               <button 
                 style={{"background": "red", "color": "white"}} 
                 className={"my-view"}
               >
                 view
               </button>
             ,
             "className": "my-view" 
           }}
           // Custom JSX and className in JSON Object
           // to render custom 'view' action button
           // className required for onClick event binding  
           renderEdit={{
             "render":
               <button 
                 style={{"background": "lightblue", "color": "white"}} 
                 className={"my-edit"}
               >
                 edit
               </button>
             ,
             "className": "my-edit" 
           }}
           // Custom JSX and className in JSON Object
           // to render custom 'edit' action button
           // className required for onClick event binding 
           renderDelete={{
             "render":
               <button 
                 style={{"background": "blue", "color": "white"}} 
                 className={"my-delete"}
               >
                 delete
               </button>
             ,
             "className": "my-delete" 
           }}
           // Custom JSX and className in JSON Object
           // to render custom 'delete' action button
           // className required for onClick event binding 
           onRowSelect={(args, event, row)=>{
            // 'row' returns row object 
            // any arguments passed will be before 'event' and 'row'
           }}
           onAllRowSelect={(args, event, allrows)=>{
            // 'allrows' returns JSON objects of all rows of table
            // any arguments passed will be before 'event' and 'allrows'
           }}
           onRowDelete={(args, event, row)=>{
            // 'row' returns row object
            // any arguments passed will be before 'event' and 'row'
           }}
           onRowEdit={(args, event, row)=>{
            // 'row' returns row object
            // any arguments passed will be before 'event' and 'row'
           }}
           onRowView={(args, event, row)=>{
            // 'row' returns row object
            // any arguments passed will be before 'event' and 'row'
           }}
           onDownload={()=>{
             // return true to use built-in download functionality
             return true;
           }}
           onSort={(data)=>{
             // 'data' returns new sorted data
           }}
           onPaginate={(currentPage)=>{
            // 'currentPage' returns updated current page;
           }}
        />
      )
  }
  export default TableCategory;