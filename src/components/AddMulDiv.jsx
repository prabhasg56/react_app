import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { Button, TextField } from '@mui/material';


const AddMulDiv = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [add, setAdd] = useState(0);
  const [mul, setMul] = useState(0);
  
  const firstNum = (e) => {
    setNum1(e.target.value);
  }

  const secondNum = (e) => {
    setNum2(e.target.value);
  }

  console.log(add)
  return (
    <div>
        <h2 style={{ color: "black" }}>
        Addition, multiplication, Division
      </h2>
      <Box sx={{ p: 1, border: 2, color: "black", width: 500, height: 500, marginLeft:60 }}>
        <div style={{ color: "blue", fontSize: 20, margin: 5 }}>
            <TextField placeholder='Enter First Number' style={{ borderRadius:2}} onChange={firstNum}></TextField>
            <TextField placeholder='Enter Second Number' style={{ borderRadius:2, marginLeft:10}} onChange={secondNum}></TextField>
        </div>
        <div style={{margin: 5}}>
            <Button style={{backgroundColor:'green', fontSize: 20, textAlign: 'center'}} onClick={()=>setAdd(parseFloat(num1)+parseFloat(num2))}>+</Button>
            <Button style={{backgroundColor:'green', marginLeft: 10, fontSize: 20,  textAlign: 'center'}}>-</Button>
            <Button style={{backgroundColor:'green', margin: 10, fontSize: 20,  textAlign: 'center'}} onClick={()=>setMul(parseFloat(num1)*parseFloat(num2))}>*</Button>
            <Button style={{backgroundColor:'green', margin: 10, fontSize: 20,  textAlign: 'center'}}>/</Button>
            <Box sx={{ p: 1, border: 2, color: "black", width: 400, height: 15, marginLeft:5 }}> OUTPUT: 
            if(true)
              {add}
            
            </Box>
           
        </div>
      </Box>
    
    </div>
  )
}

export default AddMulDiv