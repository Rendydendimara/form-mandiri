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
    // color: 'var(--color-mine-shaft)',
    // fontSize: theme.spacing(2),
    // fontWeight: 600,
    transform: 'none',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'var(--color-dark-grey-label)',
    letterSpacing: theme.spacing(0.04),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(1.375),
    },
    '&.Mui-focused': {
      color: 'var(--color-mine-shaft)',
    },
  },
  charCounter: {
    fontSize: theme.spacing(1.5),
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(1),
    },
  },
  hintText: {
    marginBottom: theme.spacing(0.625),
    color: 'var(--color-black)',
    fontSize: theme.spacing(1.5),
    fontWeight: 700,
    letterSpacing: theme.spacing(0.04),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(1),
    },
  },
  rootInputFilled: {
    backgroundColor: 'var(--color-gallery)',
    '&.MuiAutocomplete-inputRoot[class*="MuiFilledInput-root"]': {
      padding: 0,
      paddingLeft: theme.spacing(2),
      paddingRight: '16px !important',
      fontSize: theme.spacing(1.75),
    },
  },
  rootInputNoFill: {
    backgroundColor: 'transparent',
    '&.Mui-focused': {
      backgroundColor: 'transparent',
    },
    '&.MuiAutocomplete-inputRoot[class*="MuiFilledInput-root"]': {
      padding: 0,
      paddingLeft: theme.spacing(2),
      paddingRight: '16px !important',
      fontSize: theme.spacing(1.75),
    },
  },
  rootInput: {
    width: '100%',
    minHeight: theme.spacing(5.25),
    borderRadius: theme.spacing(0.625),
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(3.625),
    },
  },
  rootInputOutlined: {
    backgroundColor: 'white',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-mine-shaft)',
    },
    '&.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      padding: 0,
      paddingLeft: theme.spacing(2),
      paddingRight: '16px !important',
      fontSize: theme.spacing(1.75),
    },
  },
  input: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.625),
      fontSize: theme.spacing(1.375),
    },
    '&::placeholder': {
      fontSize: '14px',
      // padding: theme.spacing(1),
    },
  },
  errorText: {
    marginTop: theme.spacing(0.625),
    color: 'var(--color-warning-1)',
    fontSize: theme.spacing(1.5),
    fontWeight: 700,
    letterSpacing: theme.spacing(0.04),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(1),
    },
  },
  textRed: {
    color: 'red',
  },
}));

export default useStyles;
