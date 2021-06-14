import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    backgroundColor: 'var(--bg-grey-1)',
    display: 'flex',
    padding: '24px 27px 45px 11px',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  containerBtnAside: {
    display: 'flex',
    flexDirection: 'column',
    gap: '21px',
  },
  labelBtnPrint: {
    color: 'var(--color-white)',
  },
}));

export default useStyles;
