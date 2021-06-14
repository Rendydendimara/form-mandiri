import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none !important',
  },
  autocompleteTag: {
    color: 'white',
    backgroundColor: 'var(--color-dark-grey)',
    '& .MuiChip-deleteIcon': {
      color: 'white',
    },
  },
}));

export default useStyles;
