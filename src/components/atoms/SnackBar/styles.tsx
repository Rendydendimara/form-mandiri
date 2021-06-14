import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > .MuiPaper-root': {
      backgroundColor: 'var(--color-primary)',
      boxShadow: 'var(--box-shadow-primary)',
    },
  },
}));

export default useStyles;
