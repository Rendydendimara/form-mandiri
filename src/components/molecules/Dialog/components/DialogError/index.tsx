import { Typography } from '@material-ui/core';
import { Button } from 'components/atoms';
import { Dialog } from 'components/molecules';
import React, { ReactElement } from 'react';

interface IProps {
  openDialog: boolean;
  dialogTitle?: string;
  onClose: () => void;
  message: string;
}

const DialogError: React.FC<IProps> = (props): ReactElement => {
  return (
    <Dialog
      onClose={props.onClose}
      openDialog={props.openDialog}
      title={props.dialogTitle}
      actions={
        <Button
          color='danger'
          textColor='light'
          fontSize='inherit'
          disableElevation={true}
          onClick={props.onClose}
        >
          Ok
        </Button>
      }
    >
      <Typography className='GlobalFontSuccess'>{props.message}</Typography>
    </Dialog>
  );
};

DialogError.defaultProps = {
  dialogTitle: 'Error',
  message: 'Error',
};

export default DialogError;
