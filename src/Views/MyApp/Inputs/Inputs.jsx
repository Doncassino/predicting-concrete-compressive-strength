import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartElem from '../../../Components/ChartElem';
import InputElem from '../../../Components/InputElem';
import CardElem from '../../../Components/CardElem';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Inputs = ({
  inputsData,
  updateValue
}) => {
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, []);


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <CardElem
            title="Concrete Composition"
            subtitle="Inputs"
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputElem 
                  data={inputsData.cement}
                  updateValue={updateValue}
                />
                <InputElem 
                  data={inputsData.furnace_slag}
                  updateValue={updateValue}
                /> 
                <InputElem 
                  data={inputsData.fly_ash}
                  updateValue={updateValue}
                />              
                <InputElem 
                  data={inputsData.water}
                  updateValue={updateValue}
                />
                <InputElem 
                  data={inputsData.super_plasticizer}
                  updateValue={updateValue}
                />   
                <InputElem 
                  data={inputsData.coarse_agg}
                  updateValue={updateValue}
                />  
                <InputElem 
                  data={inputsData.fine_agg}
                  updateValue={updateValue}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputElem 
                  data={inputsData.age}
                  updateValue={updateValue}
                />  
              </Grid>
            </Grid>
          </CardElem>
        </Grid>
      </Grid>
    </div>
  )
}

export default Inputs;
