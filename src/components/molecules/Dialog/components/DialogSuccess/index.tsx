import { Typography } from '@material-ui/core';
import { Button } from 'components/atoms';
import { Dialog } from 'components/molecules';
import React, { ReactElement } from 'react';

interface IProps {
  openDialog: boolean;
  dialogTitle?: string;
  onCloseDialog: () => void;
  message: string;
}

const DialogSuccess: React.FC<IProps> = (props): ReactElement => {
  return (
    <Dialog
      onClose={props.onCloseDialog}
      openDialog={props.openDialog}
      title={props.dialogTitle}
      actions={
        <Button
          color='success'
          textColor='light'
          fontSize='inherit'
          disableElevation={true}
          onClick={props.onCloseDialog}
        >
          Ok
        </Button>
      }
    >
      <Typography className='GlobalFontSuccess'>{props.message}</Typography>
    </Dialog>
  );
};

DialogSuccess.defaultProps = {
  dialogTitle: 'Success',
  message: 'Success',
};

export default DialogSuccess;
