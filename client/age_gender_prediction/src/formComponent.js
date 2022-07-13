import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import postData from "./postData";

const useStyles = makeStyles((theme) => ({
  textField: {
    minWidth: 300,
    margin: "10px 0",
  },
}));

function FormComponent({ predictType = "gender" }: { predictType: string }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({})
  const [predictMessage, setPredictMessage] = useState('')


  const handleSubmit = () => {
    postData(`/${predictType}Predict`, formData).then((data) => {
      setPredictMessage(data)
    });
  };

  const handleValueChange = (field, value) => {
      const obj = {
          [field]: value,
      }

      setFormData({
          ...formData,
          ...obj,
      })
  }  

  return (
    <>
      {predictType === "gender" && (
        <TextField
          onChange={(e) => {
              handleValueChange('age_group', e.target.value)
          }}  
          classes={{
            root: classes.textField,
          }}
          label="Age Group"
        />
      )}

      {predictType === "age" && (
        <TextField
            onChange={(e) => {
              handleValueChange('gender', e.target.value)
            }} 
            classes={{
                root: classes.textField,
            }}
          label="Gender"
        />
      )}

      <TextField
        onChange={(e) => {
              handleValueChange('event_id', parseFloat(e.target.value))
            }} 
        classes={{
          root: classes.textField,
        }}
        label="Event ID"
      />
      <TextField
        onChange={(e) => {
              handleValueChange('hour_of_day', parseInt(e.target.value, 10))
            }}
        classes={{
          root: classes.textField,
        }}
        label="Hour of day (0 - 23)"
      />
      <TextField
      onChange={(e) => {
              handleValueChange('day_of_week', parseInt(e.target.value), 10)
            }}
        classes={{
          root: classes.textField,
        }}
        label="Day of week (between 0 - 6)"
      />
      <TextField
      onChange={(e) => {
              handleValueChange('longitude', parseFloat(e.target.value))
            }}
        classes={{
          root: classes.textField,
        }}
        label="Longitude"
      />
      <TextField
      onChange={(e) => {
              handleValueChange('latitude', parseFloat(e.target.value))
            }}
        classes={{
          root: classes.textField,
        }}
        label="Latitude"
      />
      <TextField
      onChange={(e) => {
              handleValueChange('phone_brand', e.target.value)
            }}
        classes={{
          root: classes.textField,
        }}
        label="Phone Brand"
      />
      <TextField
      onChange={(e) => {
              handleValueChange('device_model', e.target.value)
            }}
        classes={{
          root: classes.textField,
        }}
        label="Device Model"
      />
      <TextField
      onChange={(e) => {
              handleValueChange('app_id', parseInt(e.target.value))
            }}
        classes={{
          root: classes.textField,
        }}
        label="Application ID"
      />
      <TextField
      onChange={(e) => {
              handleValueChange('GENERIC_CATEGORY', e.target.value)
            }}
        classes={{
          root: classes.textField,
        }}
        label="App Category"
      />
      <div className='messageContainer'>
        <Typography variant="subtitle1">
            {predictMessage}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
        Predict
      </Button>
      </div>
    </>
  );
}

export default FormComponent;
