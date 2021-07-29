import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
  containerPrintPage: {
    padding: 50,
  },
  labelBtnPrint: {},
  btnPrint: {
    // position: 'absolute',
    // bottom: 40,
    // right: 50,
    minWidth: 100,
  },
  containerActionButton: {
    display: 'flex',
    width: '100%',
    marginTop: 40,
    padding: '0 40px',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
