import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { 
	Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonElem = ({
	text
}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
      <Button variant="contained" color="primary">
        {text}
      </Button>
		</div>
	);
};

export default ButtonElem;
