import React, { ReactNode } from 'react';
import MUIAutocomplete, {
  AutocompleteGetTagProps,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
} from '@material-ui/lab/Autocomplete';
import { FilterOptionsState } from '@material-ui/lab';
import { Close } from '@material-ui/icons';

import useStyles from './styles';

interface Props {
  className?: string;
  classNameInputRoot?: string;
  defaultValue?: any;
  filterOptions?: (options: any[], state: FilterOptionsState<any>) => any[];
  filterSelectedOptions?: boolean;
  fullWidth?: boolean;
  getOptionLabel?: (option: any) => string;
  getOptionSelected?: (option: any, value: any) => boolean;
  loading?: boolean;
  multiple?: boolean;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  onInputChange?: (event: React.ChangeEvent<{}>, value: string) => void;
  options: any[];
  renderInput: (params: AutocompleteRenderInputParams) => ReactNode;
  renderOption?: (
    option: any,
    state: AutocompleteRenderOptionState
  ) => React.ReactNode;
  value?: any;
  id?: string;
  style?: any;
  renderTags?: (
    value: any[],
    getTagProps: AutocompleteGetTagProps
  ) => ReactNode;
  classTag?: string;
  popupIcon?: ReactNode;
  popupIndicator?: any;
  popupIndicatorOpen?: any;
  classNameEndAdornment?: string;
}

const AutoComplete: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <MUIAutocomplete
      id={props.id}
      popupIcon={props.popupIcon}
      ChipProps={{ deleteIcon: <Close fontSize='small' /> }}
      classes={{
        tag: props.classTag ? props.classTag : classes.autocompleteTag,
        popupIndicator: props.popupIndicator,
        popupIndicatorOpen: props.popupIndicatorOpen,
        noOptions: classes.hide,
        inputRoot: props.classNameInputRoot,
        endAdornment: props.classNameEndAdornment,
      }}
      className={props.className}
      defaultValue={props.defaultValue ?? (props.multiple ? [] : null)}
      filterOptions={props.filterOptions}
      filterSelectedOptions={props.filterSelectedOptions}
      fullWidth={props.fullWidth}
      getOptionLabel={props.getOptionLabel}
      getOptionSelected={props.getOptionSelected}
      loading={props.loading}
      multiple={props.multiple}
      onChange={props.onChange}
      onInputChange={props.onInputChange}
      options={props.options}
      renderInput={props.renderInput}
      renderOption={props.renderOption}
      value={props.value}
      style={props.style}
      renderTags={props.renderTags}
      autoComplete={false}
      autoHighlight={false}
      selectOnFocus={false}
      autoSelect={false}
      autoCorrect='off'
    />
  );
};

AutoComplete.defaultProps = {
  multiple: false,
  filterSelectedOptions: false,
  fullWidth: true,
  loading: false,
};

export default AutoComplete;
