import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartElem from '../../../Components/ChartElem';
import InputElem from '../../../Components/InputElem';
import ButtonElem from '../../../Components/ButtonElem';
import CardElem from '../../../Components/CardElem';
import calculationFunctions from '../Calculations/calculations';
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
  updateValue,
}) => {
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const { data } = await axios.get(`http://localhost:8500/data`);
        // console.log(data)
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
            title="Composition of the concrete"
            subtitle=""
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
                <ButtonElem>
                  Prediction
                </ButtonElem>
              </Grid>
            </Grid>
          </CardElem>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <CardElem
            title="Prediction of Concrete Compressive Strength"
            subtitle=""
          >
            <div>
              <OutputElem 
                data={outputsData.compressive_strength}
                inputsData={inputsData}
                calculationFunctions={pred}
              />
            </div>
          </CardElem>
          <CardElem
            title="Concrete Compressive Strength"
            subtitle="per days"
          >
            <ChartElem
                dataForChart={{
                  chartTitle: '',
                  value: [
                    {x: 0, y: 0},
                    {x: 28, y: 30},
                    {x: 365, y: 60}
                  ],
                  axisName: {x: 'age ', y: 'Concrete compressive strength '},
                  unit: {x: 'day', y: 'MPa, megapascals'}
                }}
              />
          </CardElem>
        </Grid> */}
      </Grid>
    </div>
  )
}

export default Inputs;
