import { Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import useStyles from './styles';

interface IProps {
  data: any;
}

const Preview: React.FC<IProps> = (props): ReactElement => {
  console.log('data', props.data);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Preview</Typography>
    </div>
  );
};

export default Preview;
