import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  labelContainer: {
    display: 'flex',
    marginBottom: theme.spacing(0.625),
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  inputLabel: {
    position: 'initial',
    color: 'var(--color-mine-shaft)',
    fontSize: theme.spacing(2),
    fontWeight: 600,
    transform: 'none',
    letterSpacing: theme.spacing(0.04),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(1.375),
    },
    '&.Mui-focused': {
      color: 'var(--color-mine-shaft)',
    },
  },
  rootSelect: {
    height: 64,
    backgroundColor: 'white',
    borderRadius: theme.spacing(0.625),
    fontWeight: 700,
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-mine-shaft)',
    },
  },
  rootSelectOutlined: {
    padding: '0px 20px 0px 30px !important',
    color: 'var(--color-mine-shaft)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(1.375),
    },
    '&:focus': {
      backgroundColor: 'transparent',
    },
  },
  paperContainerMenuItem: {
    borderRadius: 8,
    boxShadow: 'var(--box-shadow-primary)',
  },
  containerItemProperty: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemSelect: {
    fontWeight: 600,
    display: 'block',
  },
}));

export default useStyles;
