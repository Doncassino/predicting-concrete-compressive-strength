import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OutputElem from '../../../Components/OutputElem';
import TableElem from '../../../Components/TableElem';
import CardElem from '../../../Components/CardElem';
import ChartElem from '../../../Components/ChartElem';
import calculationFunctions from '../Calculations/calculations';
import axios from 'axios';
import * as tf from '@tensorflow/tfjs';

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

const Outputs = ({
  inputsData,
  outputsData,
  updateValue
}) => {
  const classes = useStyles();
  const [ chartData, setChartData ] = useState();
  
	useEffect(() => {
    const computeData = async () => {
      await calculationFunctions.predicitionsStressEvolution(inputsData)
      .then((res) => {
        console.log(res);
        setChartData(res);
      })
      .catch(error => {
        console.log(error);
      })
    }
    computeData();
  }, []);
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="Concrete Compressive Strength"
            subtitle="Results"
          >
            <div>
              <OutputElem 
                data={outputsData.compressive_strength}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.predicitions}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="Concrete Compressive Strength"
            subtitle="per days"
          >
            <ChartElem
              dataForChart={{
                chartTitle: '',
                value: chartData,
                axisName: {x: 'age ', y: 'Concrete compressive strength '},
                unit: {x: 'day', y: 'MPa, megapascals'}
              }}
              />
          </CardElem>
        </Grid>
      </Grid>
    </div>
  )
}

export default Outputs;
