import { Button } from 'components/atoms';
import {
  AddInformasiPenerimaDanValidasi,
  AddInformasiPengirim,
  AddInformasiTransaksi,
  AddInformasiTujuan,
  AddInformasiUmum,
} from 'components/molecules';
import React, { ReactElement } from 'react';
import useStyles from './styles';

interface IProps {
  changeData: (data: any) => void;
}

const Sidebar: React.FC<IProps> = (props): ReactElement => {
  const handleChangeInformasiUmum = (data: any): void => {
    console.log('data', data);
  };
  const handleChangeInformasiPenerimaDanValidasi = (data: any): void => {
    console.log('data', data);
  };
  const handleChangeInformasiTransaksi = (data: any): void => {
    console.log('data', data);
  };
  const handleChangeInformasiPengirim = (data: any): void => {
    console.log('data', data);
  };
  const handleChangeInformasiTujuan = (data: any): void => {
    console.log('data', data);
  };

  const classes = useStyles();
  return (
    <aside className={classes.root}>
      <div className={classes.containerBtnAside}>
        <AddInformasiUmum changeInformasiUmum={handleChangeInformasiUmum} />
        <AddInformasiPenerimaDanValidasi
          changeInformasiPenerimaDanValidasi={
            handleChangeInformasiPenerimaDanValidasi
          }
        />
        <AddInformasiTransaksi
          changeInformasiTransaksi={handleChangeInformasiTransaksi}
        />
        <AddInformasiPengirim
          changeInformasiPengirim={handleChangeInformasiPengirim}
        />
        <AddInformasiTujuan
          changeInformasiTujuan={handleChangeInformasiTujuan}
        />
        <AddInformasiPengirim
          changeInformasiPengirim={handleChangeInformasiPengirim}
        />
      </div>
      <Button fullWidth={true} classsNameLabel={classes.labelBtnPrint}>
        Print
      </Button>
    </aside>
  );
};

export default Sidebar;
