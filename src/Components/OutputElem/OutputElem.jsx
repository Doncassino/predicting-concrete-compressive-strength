import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from '@material-ui/core';
import ToolTips from '../ToolTips';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '35ch',
  },
  input: {
    color: 'blue',
    // backgroundColor: 'lightblue'
  },
  inputAdornment: {
    paddingRight: '1em',
    color: 'black'
  }
}));

const OutputElem = ({
  data,
  inputsData,
  calculationFunctions,
  // updateValue
}) => {
  const classes = useStyles();
  const [ outputValue, setOutputValue ] = useState(data.value);

	useEffect(() => {
    const computeData = async () => {
      await calculationFunctions(inputsData)
      .then((res) => {
        setOutputValue(res);
      })
      .catch(error => {
        console.log(error);
      })
    }
    computeData();
	}, []);

  //const outputValue = calculationFunctions(inputsData);
  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.withoutLabel, classes.textField)}
        // variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-amount">{data.description}</InputLabel>
        <Input
          className={classes.input}
          name={data.name}
          placeholder={data.name}
          value={outputValue}
          startAdornment={
          <InputAdornment
            position="start"
            className={classes.inputAdornment}
          >
            {data.text}
            <ToolTips
              description={data.description}
              target={data.text}
            />
          </InputAdornment>}
          endAdornment={<InputAdornment position="end">{data.unit}</InputAdornment>}
        />
      </FormControl>
    </div>
  );
};

export default OutputElem;
