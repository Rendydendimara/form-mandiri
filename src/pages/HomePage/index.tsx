import Splash from 'pages/Splash';
import React, { lazy, ReactElement, Suspense, useState } from 'react';
import useStyles from './styles';

interface IProps {}

const PREVIEWCOMPONENT = lazy(
  () => import('../../components/organisms/Preview')
);
const SIDEBARCOMPONENT = lazy(
  () => import('../../components/organisms/Sidebar')
);

const HomePage: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const [dataGlobal, setDataGlobal] = useState<any>();

  const handleChangeDataGlobal = (data: any): void => {
    console.log('data', data);
    setDataGlobal(data);
  };

  return (
    <div className={classes.root}>
      <Suspense fallback={<Splash />}>
        <SIDEBARCOMPONENT changeData={handleChangeDataGlobal} />
      </Suspense>
      <Suspense fallback={<Splash />}>
        <PREVIEWCOMPONENT data={dataGlobal} />
      </Suspense>
    </div>
  );
};

export default HomePage;
