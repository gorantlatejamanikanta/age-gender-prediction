import React from "react";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import FormComponent from "./formComponent";
import TableComponent from "./TableComponent";

import Typography from "@material-ui/core/Typography";
import WcIcon from "@material-ui/icons/Wc";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

function App() {
  return (
    <div className="App">
      {/* <AppBar position="static">
        <Toolbar>         
          <Typography variant="h5">
            Age / Gender Prediction
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Typography variant="h4" style={{margin: 10}}>Prediction Table</Typography>
      <Typography variant="subtitle1" style={{margin: 10}}>Note: Here we take 50 samples dynamically. Based on the necessity we can choose the respective campaign</Typography>
      <div className="tableWrapper">
        <TableComponent />        
      </div>
      <Typography variant="h4" style={{margin: 10}}>Prediction Form</Typography>
      <div className="formWrapper">         
        <div className="genderPredictionContainer">
          <WcIcon style={{ fontSize: 100 }} color="primary" />
          <FormComponent predictType="gender" />
        </div>
        <div className={"agePredictionContainer"}>
          <CalendarTodayIcon style={{ fontSize: 100 }} color="primary" />
          <FormComponent predictType="age" />
        </div>
      </div>
    </div>
  );
}

export default App;
