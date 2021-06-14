import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    backgroundColor: 'var(--color-white)',
    border: 'solid 1px var(--color-black)',
    'input:hover ~ &': {
      backgroundColor: 'var(--color-white)',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
    },
  },
  checkedIcon: {
    backgroundColor: 'var(--color-primary)',
    backgroundImage: 'var(--color-primary)',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundColor: 'gray',
    },
    'input:hover ~ &': {
      backgroundColor: 'var(--color-primary)',
    },
  },
}));

export default useStyles;
