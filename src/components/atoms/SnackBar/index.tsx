import { IconButton, Snackbar } from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import classNames from 'classnames';
import React from 'react';
import useStyles from './styles';

interface IProps {
  isOpen: boolean;
  messages: string;
  onClose: () => void;
  autoHideDuration?: number;
  className?: string;
}

const SnackBar: React.FC<IProps> = (props) => {
  const classes = useStyles();
  return (
    <Snackbar
      className={classNames(classes.root, props.className)}
      open={props.isOpen}
      autoHideDuration={props.autoHideDuration}
      onClose={props.onClose}
      message={props.messages}
      action={
        <IconButton color='inherit' onClick={props.onClose}>
          <CloseRounded />
        </IconButton>
      }
    />
  );
};

SnackBar.defaultProps = {
  autoHideDuration: 3000,
};

export default SnackBar;
