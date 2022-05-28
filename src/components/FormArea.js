import React, { useState } from "react";
import {  Fab, Paper, TextField } from "@material-ui/core";

function FormArea({addNote}) {
    const [note, setNote] = useState({
        title :"",
        content:"",
    }); //takes argument and return
    function clickHandler(){
      addNote(note); //title and note are empty after submitting 
      setNote({
        title:"",
       content:"",
      
      })
    }
function changeHandler(event){
   const {name, value} = event.target
   setNote(preValues =>{
     return{
       ...preValues,
       [name]: value,
     }
   })
}
  
  return (
    <Paper style={{ margin: "20px 10%", padding: "8px" }}>
      <form>
        <TextField 
         onChange={changeHandler}
         name="title"
         value={note.title} 
          label="Player no. and Colour"
           fullwidth autoComplete="off"
            />
          <br></br>
         <TextField
         onChange={changeHandler}
         name="content" 
         value={note.content}
          label=" Player Name"
          multiline
          rows={2}
          fullwidth
          autoComplete="off"
        />
        <Fab onClick={clickHandler} style={{marginTop:"60px", left: "70px" }}>play</Fab>
      </form>
    </Paper>
  );
}

export default FormArea;
