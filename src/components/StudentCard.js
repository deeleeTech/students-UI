import React from 'react';
import Grid from '@mui/material/Grid';
import '../App.css'

export default function StudentCard(props) {

  const gatherAverage = (grades) => {
    let allGrades = 0;
    grades.map((each)=>{
      allGrades += parseInt(each);
    })
    return allGrades/grades.length
  }

  const name = props.studentObject.firstName + " " + props.studentObject.lastName;
  const email = props.studentObject.email
  const company = props.studentObject.company
  const skill = props.studentObject.skill
  const average = gatherAverage(props.studentObject.grades)
  const imageURL = props.studentObject.pic


  return (
    <Grid container sx={{ padding: '5px' }}>
        <Grid item xs={3} sx={{ padding: '20px' }}>
          <img src={imageURL}  style={{ border: '1px solid grey', height: '100%', width: '100%', borderRadius: '90px' }} />
        </Grid>
        <Grid item xs={9}>
            <Grid container sx={{ textAlign: 'left', paddingLeft: '4px' }}>
                <Grid item xs={12} className="Student-Name">
                        {name}
                </Grid>
                <Grid item xs={12}>
                        {email}
                </Grid>
                <Grid item xs={12}>
                        {company}
                </Grid>
                <Grid item xs={12}>
                        {skill}
                </Grid>
                <Grid item xs={12}>
                        {average}
                </Grid>
            </Grid>
        </Grid>
        </Grid>
  )
}
