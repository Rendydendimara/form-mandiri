import React, { ReactElement } from 'react';
import useStyles from './styles';
import { Spring, animated } from '@react-spring/web';

interface IProps {}

const Splash: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Spring
        loop
        from={{ opacity: 0, color: 'red' }}
        to={[
          { opacity: 1, color: 'var(--color-primary)' },
          { opacity: 0, color: 'var(--color-primary)' },
        ]}
      >
        {(styles) => (
          <animated.p style={styles} className={classes.textInfoOnLoading}>
            LOADING...
          </animated.p>
        )}
      </Spring>
    </div>
  );
};

export default Splash;
