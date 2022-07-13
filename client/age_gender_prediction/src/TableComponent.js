import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxHeight:600,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#fffebc",
    color: "#000",
  },
  body: {
    fontSize: 14,
    fontWeight: 600,
  },
}))(TableCell);

const cols = [
  "Device Id",
  "Gender",
  "F probability",
  "M probability",
  "predicted gender",
  // "Event id",
  // "Longitude",
  // "Latitude",
  "Phone Brand",
  "Device Model",
  // "App ID",
  "Age Group",
  "0-24 Prob",
  "24-32 Prob",
  "32_plus Prob",
  "Predicted age",
  // "Hour",
  // "Day",
  "Category",
  
];

export default function TableComponent() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("/predict")
      .then((response) => response.json())
      .then((data) => setRows(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {cols.map((c) => (
              <StyledTableCell >{c}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.device_id}>
              <TableCell component="th" scope="row">
                {row.device_id}
              </TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.female_probability}</TableCell>
              <TableCell align="right">{row.male_probability}</TableCell>
              <TableCell align="right">{row.predicted_gender}</TableCell>
              {/* <TableCell align="right">{row.event_id}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
              <TableCell align="right">{row.latitude}</TableCell> */}
              <TableCell align="right">{row.phone_brand}</TableCell>
              <TableCell align="right">{row.device_model}</TableCell>
              {/* <TableCell align="right">{row.app_id}</TableCell> */}
              <TableCell align="right">{row.age_group}</TableCell>
              <TableCell align="right">{row["0-24_Prob"]}</TableCell>
              <TableCell align="right">{row["24-32_Prob"]}</TableCell>
              <TableCell align="right">{row["32_plus_Prob"]}</TableCell>
              <TableCell align="right">{row.predicted_age}</TableCell>
              {/* <TableCell align="right">{row.hour_of_day}</TableCell>
              <TableCell align="right">{row.day_of_week}</TableCell> */}
              <TableCell align="right">{row.GENERIC_CATEGORY}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
