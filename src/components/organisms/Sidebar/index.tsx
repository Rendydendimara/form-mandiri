import { Button } from 'components/atoms';
import {
  AddInformasiBiayaTransaksi,
  AddInformasiMetodeTransaksi,
  AddInformasiPenerimaDanValidasi,
  AddInformasiPengirim,
  AddInformasiSumberDanaTransaksi,
  AddInformasiTransaksi,
  AddInformasiUmum,
} from 'components/molecules';
import { IInformasiPenerimaDanValidasi } from 'interfaces/IInformasiPenerimaDanValidasi';
import { IStateFormInformasiSumberDanaTransaksi } from 'interfaces/IStateFormInformasiSumberDanaTransaksi';
import { IStateFormInformasiTransaksi } from 'interfaces/IStateFormInformasiTransaksi';
import { IStateFormInformasiUmum } from 'interfaces/IStateFormInformasiUmum';
import { IStateInformasiBiayaTransaksi } from 'interfaces/IStateInformasiBiayaTransaksi';
import { IStateInformasiMetodeTransaksi } from 'interfaces/IStateInformasiMetodeTransaksi';
import { IStateInformasiPengirim } from 'interfaces/IStateInformasiPengirim';
import React, { ReactElement } from 'react';
import useStyles from './styles';

interface IProps {
  changeDataGlobal: (
    type: string,
    data:
      | IStateFormInformasiUmum
      | IInformasiPenerimaDanValidasi
      | IStateFormInformasiTransaksi
      | IStateInformasiPengirim
      | IStateInformasiMetodeTransaksi
      | IStateFormInformasiSumberDanaTransaksi
      | IStateInformasiBiayaTransaksi
  ) => void;
}

const Sidebar: React.FC<IProps> = (props): ReactElement => {
  const handleChangeInformasiUmum = (data: IStateFormInformasiUmum): void => {
    props.changeDataGlobal('informasiUmum', data);
    // console.log('IStateFormInformasiUmum', data);
  };
  const handleChangeInformasiPenerimaDanValidasi = (
    data: IInformasiPenerimaDanValidasi
  ): void => {
    props.changeDataGlobal('informasiPenerimaDanValidasi', data);
    // console.log('IInformasiPenerimaDanValidasi', data);
  };
  const handleChangeInformasiTransaksi = (
    data: IStateFormInformasiTransaksi
  ): void => {
    props.changeDataGlobal('informasiTransaksi', data);
    // console.log('IStateFormInformasiTransaksi', data);
  };
  const handleChangeInformasiPengirim = (
    data: IStateInformasiPengirim
  ): void => {
    props.changeDataGlobal('informasiPengirim', data);
    // console.log('IStateInformasiPengirim', data);
  };
  const handleChangeInformasiMetodeTransaksi = (
    data: IStateInformasiMetodeTransaksi
  ): void => {
    props.changeDataGlobal('informasiMetodeTransaksi', data);
    // console.log('IStateInformasiMetodeTransaksi', data);
  };
  const handleChangeInformasiSumberDanaTransaksi = (
    data: IStateFormInformasiSumberDanaTransaksi
  ): void => {
    props.changeDataGlobal('informasiSumberDanaTransaksi', data);
    // console.log('IStateFormInformasiSumberDanaTransaksi', data);
  };
  const handleChangeInformasiBiayaTransaksi = (
    data: IStateInformasiBiayaTransaksi
  ): void => {
    props.changeDataGlobal('informasiBiayaTransaksi', data);
    // console.log('IStateInformasiBiayaTransaksi', data);
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
        <AddInformasiMetodeTransaksi
          changeInformasiMetodeTransaksi={handleChangeInformasiMetodeTransaksi}
        />
        <AddInformasiSumberDanaTransaksi
          changeInformasiSumberDanaTransaksi={
            handleChangeInformasiSumberDanaTransaksi
          }
        />
        <AddInformasiBiayaTransaksi
          changeInformasiBiayaTransaksi={handleChangeInformasiBiayaTransaksi}
        />
      </div>
      <Button
        fullWidth={true}
        classsNameLabel={classes.labelBtnPrint}
        className={classes.btnPrint}
      >
        Print
      </Button>
    </aside>
  );
};

export default Sidebar;
