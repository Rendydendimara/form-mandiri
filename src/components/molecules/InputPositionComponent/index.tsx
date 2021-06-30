import { Typography } from '@material-ui/core';
import TextField from 'components/atoms/Textfield';
import { IPositionCompoent } from 'interfaces/IPositionComponent';
import React from 'react';
import { classNames } from 'utils/classnames';
import styles from './styles';

interface IProps {
  dataPosition: IPositionCompoent;
  handleChange: (key: string, positionName: string, value: number) => void;
  classNameRoot?: string;
  classNameTextField?: string;
  name: string;
}

const InputPositionComponent: React.FC<IProps> = (props) => {
  const classes = styles();
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.handleChange(
      props.name,
      String(event.target.name),
      Number(event.target.value)
    );
  };
  return (
    <div className={classNames(props.classNameRoot)}>
      <Typography className={classes.label}>Position (px)</Typography>
      <div className={classes.containerContent}>
        <TextField
          type='number'
          value={props.dataPosition.top}
          label='top'
          name='top'
          onChange={handleChange}
          classNameLabel={classes.labelText}
        />
        <TextField
          type='number'
          value={props.dataPosition.right}
          name='right'
          label='right'
          classNameLabel={classes.labelText}
          onChange={handleChange}
        />
        <TextField
          type='number'
          value={props.dataPosition.bottom}
          name='bottom'
          label='bottom'
          onChange={handleChange}
          classNameLabel={classes.labelText}
        />
        <TextField
          type='number'
          value={props.dataPosition.left}
          name='left'
          label='left'
          onChange={handleChange}
          classNameLabel={classes.labelText}
        />
      </div>
    </div>
  );
};

export default InputPositionComponent;
