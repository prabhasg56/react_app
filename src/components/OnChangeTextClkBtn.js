import React, { useState } from "react";
import Box from "@mui/material/Box";

const OnChangeTextClkBtn = () => {
  const [name, setName] = useState("Yadav");

  return (
    <div>
      <h2 style={{ color: "black" }}>
        After clicking on button name should be clange, Note: default any name{" "}
      </h2>
      <Box sx={{ p: 1, border: 2, color: "black", width: 400, height: 400, marginLeft:50 }}>
        <div style={{ color: "blue", fontSize: 20, textAlign:'center' }}>
          <text>Name: {name}</text>
          <button
            style={{ display: "flex", marginLeft: 150, backgroundColor: 'green' }}
            onClick={() => setName("Aman")}
          >
            Change Name
          </button>
        </div>
      </Box>
    </div>
  );
};

export default OnChangeTextClkBtn;
