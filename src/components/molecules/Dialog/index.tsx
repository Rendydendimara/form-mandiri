import DialogMUI from '@material-ui/core/Dialog';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';
import React, { ReactNode } from 'react';
import useStyles from './styles';

interface IProps {
  title?: string;
  openDialog: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClose: () => void;
  className?: string;
  classNameDialogTitle?: string;
  classNameDialogContent?: string;
  classNameDialogAction?: string;
  hideCloseIcon?: boolean;
  closeAfterTransition?: boolean;
  isHaveDividers?: boolean;
  isShowLabelTitleDialog?: boolean;
  children: ReactNode;
  actions: ReactNode;
}

const Dialog: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <DialogMUI
      onClose={props.onClose}
      aria-labelledby='customized-dialog-title'
      open={props.openDialog}
      maxWidth={props.maxWidth}
      closeAfterTransition={props.closeAfterTransition}
      classes={{
        paper: classes.dialogPaper,
      }}
    >
      <MuiDialogTitle
        disableTypography
        className={classNames(classes.dialogTitle, props.classNameDialogTitle)}
      >
        <Typography className={classes.dialogTitle}>{props.title}</Typography>
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={props.onClose}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <MuiDialogContent
        dividers
        className={classNames(
          classes.dialogContent,
          props.classNameDialogContent
        )}
      >
        {props.children}
      </MuiDialogContent>
      <MuiDialogActions
        className={classNames(
          classes.dialogActions,
          props.closeAfterTransition
        )}
      >
        {props.actions}
      </MuiDialogActions>
    </DialogMUI>
  );
};

Dialog.defaultProps = {
  maxWidth: 'xs',
  closeAfterTransition: true,
};

export default Dialog;
