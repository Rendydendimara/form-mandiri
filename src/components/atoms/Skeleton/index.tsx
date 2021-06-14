import React from 'react';
import SkeletonMUI from '@material-ui/lab/Skeleton';
import { classNames } from 'utils/classnames';
import useStyles from './styles';

interface IProps {
  animation?: 'pulse' | 'wave' | false;
  height: number;
  width: number;
  variant?: 'text' | 'rect' | 'circle';
  className?: string;
}

const Skeleton: React.FC<IProps> = (props) => {
  const classes = useStyles();
  return (
    <SkeletonMUI
      animation={props.animation}
      height={props.height}
      width={props.width}
      variant={props.variant}
      className={classNames(classes.root, props.className)}
    />
  );
};

Skeleton.defaultProps = {
  variant: 'text',
  animation: 'pulse',
};

export default Skeleton;
