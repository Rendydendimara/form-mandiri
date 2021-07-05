import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    backgroundColor: 'var(--bg-grey-1)',
    display: 'flex',
    padding: '24px 27px 45px 11px',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflowY: 'scroll',
  },
  containerBtnAside: {
    display: 'flex',
    flexDirection: 'column',
    gap: '21px',
  },
  labelBtnPrint: {
    color: 'var(--color-white)',
  },
  containerBtnAsideAction: {
    marginTop: 20,
    display: 'flex',
    gap: 20,
    flexDirection: 'column',
  },
  btnPrint: {
    minHeight: 40,
  },
  btnReset: {
    minHeight: 40,
    display: 'none',
  },
}));

export default useStyles;
