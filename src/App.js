import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import statusData from './statusData.json';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTableSearch } from 'react-table';
import './App.css';
const StyledExpandMoreIcon = withStyles({
  root: {
    color: 'white',
  },
})(ExpandMoreIcon);
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  accordion: {
    marginBottom: '10px',
  },
  nestedAccordion: {
    flexDirection: 'column',
  },
});

export default function App() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(statusData);
  }, []);
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'black',
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

  return (
    <div>
      <h1>BP WAF</h1>
      <Accordion className={classes.accordion}>
  <AccordionSummary expandIcon={<StyledExpandMoreIcon />} >
    <h2>Development</h2>
  </AccordionSummary>
  <AccordionDetails>
    <Accordion>
      <AccordionSummary expandIcon={<StyledExpandMoreIcon />}>
        <h3>Blocked IPsets</h3>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="IP Status Table">
            <TableHead>
              <TableRow>
                <TableCell>IP Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                    {statusData.map((row) => (
                      <TableRow key={row.ip}>
                        <TableCell component="th" scope="row">
                          {row.ip}
                        </TableCell>
                        <TableCell>{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<StyledExpandMoreIcon />}>
        <h3>WhiteListed IPsets</h3>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="IP Status Table">
            <TableHead>
              <TableRow>
                <TableCell>IP Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statusData.map((row) => (
                <TableRow key={row.ip}>
                  <TableCell component="th" scope="row">
                    {row.ip}
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  </AccordionDetails>
</Accordion>
      <Accordion className={classes.accordion}>
  <AccordionSummary expandIcon={<StyledExpandMoreIcon />}>
    <h2>Production</h2>
  </AccordionSummary>
  <AccordionDetails>
    <Accordion>
      <AccordionSummary expandIcon={<StyledExpandMoreIcon />}>
        <h3>Blocked IPsets</h3>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="IP Status Table">
            <TableHead>
              <TableRow>
                <TableCell>IP Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statusData.map((row) => (
                <TableRow key={row.ip}>
                  <TableCell component="th" scope="row">
                    {row.ip}
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<StyledExpandMoreIcon />}>
        <h3>WhiteListed IPsets</h3>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="IP Status Table">
            <TableHead>
              <TableRow>
                <TableCell>IP Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {statusData.map((row) => (
                <TableRow key={row.ip}>
                  <TableCell component="th" scope="row">
                    {row.ip}
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  </AccordionDetails>
</Accordion>

      
    </div>
  );
}
