import {
  FilledInput,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import { AutocompleteRenderInputParams } from '@material-ui/lab';
import React from 'react';
import { classNames } from 'utils/classnames';
import useStyles from './styles';

interface Props {
  label?: string;
  placeholder?: string;
  hintText?: string;
  maxLength?: number;
  name?: string;
  type?: 'text' | 'password' | 'date' | 'number';
  value?: any;
  required?: boolean;
  defaultValue?: any;
  error?: boolean;
  errorText?: string;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  autoCompleteParams?: AutocompleteRenderInputParams;
  variant?: 'filled' | 'outlined' | 'nofill';
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
  classNameInput?: string;
  classNameLabel?: string;
  classesMultiline?: string;
  inputRef?: any;
  inputProps?: any;
  rows?: any;
  autoFocus?: any;
  helperText?: any;
  multiline?: boolean;
  rowsMax?: number;
  classNameTextMaxLenght?: string;
  classNameLabelContainer?: string;
  classNameContainer?: string;
  isDisable?: boolean;
}

const TextField: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <FormControl
      fullWidth
      required={props.required}
      className={props.classNameContainer}
    >
      {(props.label || props.maxLength) && (
        <div
          className={classNames(
            classes.labelContainer,
            props.classNameLabelContainer
          )}
        >
          {props.label && (
            <InputLabel
              shrink
              classes={{
                shrink: classNames(classes.inputLabel, props.classNameLabel),
              }}
            >
              {props.label}
            </InputLabel>
          )}
          {props.maxLength && (
            <span
              className={classNames(
                classes.charCounter,
                props.classNameTextMaxLenght,
                props.value.length === props.maxLength && classes.textRed
              )}
            >
              {props.value.length ?? 0}/{props.maxLength}
            </span>
          )}
        </div>
      )}
      {props.hintText && (
        <span className={classes.hintText}>{props.hintText}</span>
      )}
      {props.variant === 'filled' || props.variant === 'nofill' ? (
        <FilledInput
          disabled={props.isDisable}
          autoComplete='off'
          innerRef={props.autoCompleteParams?.InputProps.ref}
          placeholder={props.placeholder ?? ''}
          value={props.value}
          defaultValue={props.defaultValue}
          autoFocus={props.autoFocus}
          name={props.name}
          error={props.error}
          classes={{
            root: classNames(
              props.className,
              classes.rootInput,
              props.variant === 'filled'
                ? classes.rootInputFilled
                : classes.rootInputNoFill,
              props.classesMultiline
            ),
            //input: classes.input,
            input: classNames(classes.input, props.classNameInput),
          }}
          inputProps={{
            maxLength: props.maxLength,
            ...props.autoCompleteParams?.inputProps,
          }}
          type={props.type ?? 'text'}
          disableUnderline
          endAdornment={props.endAdornment}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          inputRef={props.inputRef}
          rows={props.rows}
          {...props.autoCompleteParams?.InputProps}
          multiline={props.multiline}
          rowsMax={props.rowsMax}
          startAdornment={props.startAdornment}
        />
      ) : (
        <OutlinedInput
          disabled={props.isDisable}
          autoComplete='off'
          innerRef={props.autoCompleteParams?.InputProps.ref}
          value={props.value}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder ?? ''}
          autoFocus={props.autoFocus}
          name={props.name}
          error={props.error}
          classes={{
            root: classNames(
              props.className,
              classes.rootInput,
              classes.rootInputOutlined,
              props.classesMultiline
            ),
            input: classNames(classes.input, props.classNameInput),
          }}
          inputProps={{
            maxLength: props.maxLength,
            ...props.autoCompleteParams?.inputProps,
          }}
          type={props.type ?? 'text'}
          endAdornment={props.endAdornment}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          inputRef={props.inputRef}
          rows={props.rows}
          {...props.autoCompleteParams?.InputProps}
          multiline={props.multiline}
          rowsMax={props.rowsMax}
          startAdornment={props.startAdornment}
        />
      )}
      {props.error && props.errorText && (
        <div className={classes.errorText}>{props.errorText}</div>
      )}
    </FormControl>
  );
};

TextField.defaultProps = {
  variant: 'outlined',
};

export default TextField;
