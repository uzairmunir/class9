
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Autorenew, CenterFocusStrong } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar'
import Chart from './Chart'
import PieChart from './PieChart'
import './App.css'


const useStyles = makeStyles((theme) => ({
  root: {
    
    },
  
  paper:{
    marginTop:50,
    width:400,
    margin:'0 auto',
    textAlign:'center',
    padding:15,
  },
  input:{
    width:'100%',
    marginBottom:10,
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Material Ui</h2>
      <NavBar/>
      
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
         <TextField  label="Enter Email"className={classes.input} />
         <TextField  label="Enter Password" className={classes.input}/>
         <Button variant="contained" color="primary" className={classes.input}>
       Submit
      </Button>
      </form>
        </Paper><br/><hr/>
        <h2 >Chart Js</h2>
        <Chart/>
        <PieChart/>
    </div>
  );
}

export default App;
