import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  closeButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    // color: theme.palette.grey[500],
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContent: {
    padding: 16,
    minHeight: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogActions: {
    minHeight: 56,
    padding: 16,
    justifyContent: 'center',
  },
  dialogPaper: {
    minWidth: 318,
  },
}));

export default useStyles;
