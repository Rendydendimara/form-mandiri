import React, { ReactNode, useState } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';
import { classNames } from 'utils/classnames';

interface IOption {
  value: any;
  item: any;
  description?: string;
  action?: string;
}
interface Props {
  label?: string;
  labelId?: string;
  options: IOption[];
  value: number | boolean | string; // 0 define is empty, no item selected
  error?: boolean;
  errorMessage?: string;
  onOpen?: () => void;
  onClose?: () => void;
  onChange?: (e: React.ChangeEvent<{ value: unknown }>) => void;
  classNamesRootSelect?: string;
  classNamesContainerDropwdown?: string;
  classNamesIconSelect?: string;
  classNamesRootSelectOutlined?: string;
  classNamesItemTitle?: string;
  classNamesItemDescription?: string;
  classNamesItemAction?: string;
  classNamesPlaceholder?: string;
  placeholder?: string;
  isItemEmptyInfo?: ReactNode;
  classNamesPaper?: string;
  classNamesMenuItem?: string;
  renderChildren?: ReactNode;
  open?: boolean;
}

const Dropdown: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [openSelect, setOpenSelect] = useState<boolean>(false);

  const handleCloseSelect = () => {
    setOpenSelect(false);
  };

  const handleOpenSelect = () => {
    setOpenSelect(true);
  };

  return (
    <FormControl
      fullWidth
      error={props.error}
      className={props.classNamesContainerDropwdown}
    >
      <div className={classes.labelContainer}>
        <InputLabel shrink classes={{ shrink: classes.inputLabel }}>
          {props.label}
        </InputLabel>
      </div>
      <Select
        labelId={props.labelId}
        variant='outlined'
        value={props.value}
        onChange={props.onChange}
        onOpen={props.onOpen !== undefined ? props.onOpen : handleOpenSelect}
        open={props.open !== undefined ? props.open : openSelect}
        onClose={
          props.onClose !== undefined ? props.onClose : handleCloseSelect
        }
        displayEmpty
        className={classNames(classes.rootSelect, props.classNamesRootSelect)}
        classes={{
          outlined: classNames(
            classes.rootSelectOutlined,
            props.classNamesRootSelectOutlined
          ),
          icon: props.classNamesIconSelect,
        }}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          // anchorOrigin: {
          //   vertical: 'bottom',
          //   horizontal: 'center',
          // },
          // transformOrigin: {
          //   vertical: 'top',
          //   horizontal: 'center',
          // },
          classes: {
            paper: classNames(
              classes.paperContainerMenuItem,
              props.classNamesPaper
            ),
          },
        }}
        renderValue={(value: any) => {
          return (
            <Typography className={props.classNamesItemTitle}>
              {typeof props.value === 'string'
                ? props.value.length === 0
                  ? props.placeholder !== undefined
                    ? props.placeholder
                    : props.value
                  : props.value
                  ? props.placeholder !== undefined
                    ? props.placeholder
                    : props.value
                  : props.value
                : props.value}
            </Typography>
          );
        }}
      >
        {props.renderChildren
          ? props.renderChildren
          : props.options.length === 0 && props.isItemEmptyInfo
          ? props.isItemEmptyInfo
          : props.options.map((option: IOption, index: number) => {
              return (
                <MenuItem
                  value={option.value}
                  key={index}
                  className={classNames(
                    classes.menuItemSelect,
                    props.classNamesMenuItem
                  )}
                >
                  <Typography className={props.classNamesItemTitle}>
                    {option.item}
                  </Typography>
                  <div className={classes.containerItemProperty}>
                    <Typography className={props.classNamesItemDescription}>
                      {option?.description}
                    </Typography>
                    <Typography className={props.classNamesItemAction}>
                      {option?.action}
                    </Typography>
                  </div>
                </MenuItem>
              );
            })}
      </Select>
      {props.error && <FormHelperText>{props.errorMessage}</FormHelperText>}
    </FormControl>
  );
};

Dropdown.defaultProps = {
  error: false,
  errorMessage: 'Error',
};

export default Dropdown;
