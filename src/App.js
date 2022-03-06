import React, { useState, useEffect } from 'react';
import StudentCard from './components/StudentCard';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'
import Axios from 'axios'
import './App.css';
import { TextField } from '@mui/material';

function App() {

  const [ allStudents, setAllStudents ] = useState(null)

  //GETS STUDENTS
  useEffect(()=>{
    let config = { //AXIOS CONFIG SETTINGS
      method: 'get',
      url: "https://api.hatchways.io/assessment/students",  //LOCAL http://localhost:9000/games/allNBA
      headers: { 'Content-Type': 'application/json' }
    };
    Axios( config ).then( res => { // BACKEND REQUEST
      //console.log(res.data.students);
      setAllStudents(res.data.students)
    }).catch( err => {
      console.log(err);
    })
  },[])

  return (
    <div className="App">
        {allStudents ? 
          <Grid container>
            {/* SEARCH BY NAME */}
            <Grid item sm={3} xs={0}></Grid> 
            <Grid item sm={6} xs={12} sx={{ padding: '10px', paddingBottom: '0px', backgroundColor: 'white' }}>
                <TextField
                  label="Search by name"
                  variant="standard"
                  fullWidth
                />
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            {/* SEARCH BY TAG */}
            <Grid item sm={3} xs={0}></Grid>
            <Grid item sm={6} xs={12} sx={{ padding: '10px', paddingTop: '0px', backgroundColor: 'white' }}>
                <TextField
                  label="Search by tag"
                  variant="standard"
                  fullWidth
                />
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            {/* DISPLAY STUDENTS */}
            <Grid item sm={3} xs={0}></Grid>
            <Grid item sm={6} xs={12} component={Paper} sx={{ maxHeight: '70vh', overflow: 'auto', backgroundColor: 'white', borderRadius: '10px' }}>
                <Grid item xs={12}>
                    {allStudents.map((each, index)=>{
                        return (<StudentCard studentObject={each} key={index} />)
                    })}
                  </Grid>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
          </Grid>
        : null}
    </div>
  );
}

export default App;
