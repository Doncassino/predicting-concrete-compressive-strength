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
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="My Outputs"
            subtitle="Section characteristics"
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
        </Grid>
      </Grid>
    </div>
  )
}

export default Outputs;
