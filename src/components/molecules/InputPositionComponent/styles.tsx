import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  containerContent: {
    display: 'flex',
    gap: 10,
  },
  label: {
    fontSize: 14,
    margin: '5px 0',
    fontWeight: 600,
  },
  labelText: {
    fontSize: 12,
    color: 'var(--color-black)',
  },
}));

export default useStyles;
