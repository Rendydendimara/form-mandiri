import { CircularProgress } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { classNames } from 'utils/classnames';
import useStyles from './styles';

interface Props {
  color?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'grey'
    | 'white'
    | 'success'
    | 'dangerOutlined';
  textColor?: 'dark' | 'light' | 'danger';
  fontSize?: 'default' | 'inherit';
  disabled?: boolean;
  fullRounded?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
  disableElevation?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  className?: string;
  onClick?: (e: any) => void;
  form?: string;
  onKeyDown?: (e: any) => void;
  id?: string;
  autoFocus?: boolean;
  styleType?: string;
  classsNameLabel?: string;
  classNameStartIcon?: string;
  classNameEndIcon?: string;
}

const Button: React.FC<Props> = (props) => {
  const classes = useStyles();
  let colorStyle, textColorStyle;

  if (props.color === 'primary') {
    colorStyle = classes.colorPrimary;
  } else if (props.color === 'secondary') {
    colorStyle = classes.colorSecondary;
  } else if (props.color === 'danger') {
    colorStyle = classes.colorDanger;
  } else if (props.color === 'grey') {
    colorStyle = classes.colorGrey;
  } else if (props.color === 'success') {
    colorStyle = classes.colorSuccess;
  } else if (props.color === 'white') {
    colorStyle = classes.colorWhite;
  } else if (props.color === 'dangerOutlined') {
    colorStyle = classes.colorDangerOutlined;
  }

  if (props.textColor === 'dark') {
    textColorStyle = classes.textColorDark;
  } else if (props.textColor === 'light') {
    textColorStyle = classes.textColorLight;
  } else if (props.textColor === 'danger') {
    textColorStyle = classes.textColorDanger;
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={classNames(
        classes.root,
        colorStyle,
        props.disabled ? classes.textColorDark : textColorStyle,
        props.disableElevation && classes.disableElevation,
        props.fullRounded && classes.fullRounded,
        props.fullWidth && classes.fullWidth,
        props.fullHeight && classes.fullHeight,
        props.styleType === 'btn-aside' && classes.btnAside,
        props.className
      )}
      disabled={props.disabled}
      onClick={(e) => {
        !props.isLoading && props.onClick && props.onClick(e);
      }}
      form={props.form}
      autoFocus={props.autoFocus}
      onKeyDown={props.onKeyDown}
      id={props.id}
    >
      {props.isLoading ? (
        <CircularProgress size={24} className={classes.loadingSpinner} />
      ) : (
        <span
          className={classNames(
            classes.label,
            props.classsNameLabel,
            props.styleType === 'btn-aside' && classes.labelBtnAside,
            props.fontSize === 'inherit' && classes.fontSizeInherit
          )}
        >
          {props.startIcon && (
            <span
              className={classNames(
                classes.startIcon,
                props.styleType === 'btn-aside' && classes.startIconBtnAside,
                props.classNameStartIcon
              )}
            >
              {props.startIcon}
            </span>
          )}
          {props.children}
          {props.endIcon && (
            <span
              className={classNames(
                classes.endIcon,
                props.styleType === 'btn-aside' && classes.endIconBtnAside,
                props.classNameEndIcon
              )}
            >
              {props.endIcon}
            </span>
          )}
        </span>
      )}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary',
  textColor: 'dark',
  fontSize: 'default',
  disabled: false,
  fullRounded: false,
  fullWidth: false,
  disableElevation: false,
  autoFocus: false,
};

export default Button;
