import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // position: 'relative',
    overflow: 'hidden',
    padding: '0 20px',
    alignItems: 'center',
  },
}));

export default useStyles;
