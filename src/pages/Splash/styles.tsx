import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'var(--color-sencodary)',
  },
  textInfoOnLoading: {
    fontSize: 26,
    fontWeight: 900,
    letterSpacing: 3,
  },
}));

export default useStyles;
