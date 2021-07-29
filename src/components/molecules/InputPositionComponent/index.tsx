import { Typography } from '@material-ui/core';
import TextField from 'components/atoms/Textfield';
import React from 'react';
import { classNames } from 'utils/classnames';
import styles from './styles';

interface IProps {
  dataPosition: any; // IPositionCompoent | IPositionJenisTransaksiCompoent;
  handleChange: (key: string, positionName: string, value: number) => void;
  classNameRoot?: string;
  classNameTextField?: string;
  name: string;
  type?: 'jenisTransaksi' | 'jenisPenerima' | 'default';
  keyActive?:
    | 'bank_draf'
    | 'kliring_inkaso'
    | 'rtgs'
    | 'setoran'
    | 'sknbi'
    | 'tt';
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
        <div>
          <TextField
            type='number'
            value={
              props.keyActive
                ? props.dataPosition[props.keyActive].top
                : props.dataPosition.top
            }
            label='top'
            name='top'
            onChange={handleChange}
            classNameLabel={classes.labelText}
            className={classes.with}
          />

          <TextField
            type='number'
            value={
              props.keyActive
                ? props.dataPosition[props.keyActive].right
                : props.dataPosition.right
            }
            name='right'
            label='right'
            classNameLabel={classes.labelText}
            className={classes.with}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            type='number'
            value={
              props.keyActive
                ? props.dataPosition[props.keyActive].bottom
                : props.dataPosition.bottom
            }
            name='bottom'
            label='bottom'
            onChange={handleChange}
            classNameLabel={classes.labelText}
            className={classes.with}
          />
          <TextField
            type='number'
            value={
              props.keyActive
                ? props.dataPosition[props.keyActive].left
                : props.dataPosition.left
            }
            name='left'
            label='left'
            onChange={handleChange}
            classNameLabel={classes.labelText}
            className={classes.with}
          />
        </div>
      </div>
    </div>
  );
};

export default InputPositionComponent;
