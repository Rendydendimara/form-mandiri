import React, { ReactNode } from 'react';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { classNames } from 'utils/classnames';
import useStyles from './styles';

interface IProps {
  checked?: boolean;
  checkedIcon?: ReactNode;
  classes?: any;
  color?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
  disableRipple?: boolean;
  icon?: ReactNode;
  id?: string;
  indeterminate?: boolean;
  indeterminateIcon?: ReactNode;
  inputProps?: any;
  inputRef?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: any) => void;
  required?: boolean;
  size?: 'medium' | 'small';
  value?: any;
  name?: string;
  className?: any;
}

// Inspired by blueprintjs
function StyledCheckbox(props: CheckboxProps) {
  const classes = useStyles();

  return (
    <Checkbox
      {...props}
      className={classes.root}
      disableRipple
      color='default'
      checkedIcon={
        <span className={classNames(classes.icon, classes.checkedIcon)} />
      }
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
    />
  );
}

const CheckBox: React.FC<IProps> = (props) => {
  return (
    <StyledCheckbox
      name={props.name}
      checked={props.checked}
      checkedIcon={props.checkedIcon}
      classes={props.classes}
      color={props.color}
      disabled={props.disabled}
      disableRipple={props.disableRipple}
      icon={props.icon}
      id={props.id}
      indeterminate={props.indeterminate}
      indeterminateIcon={props.indeterminateIcon}
      inputProps={props.inputProps}
      inputRef={props.inputRef}
      onChange={props.onChange}
      required={props.required}
      size={props.size}
      value={props.value}
      className={classNames(props.className)}
      {...props}
    />
  );
};

export default CheckBox;
