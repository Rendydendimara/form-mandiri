import { EnumJenisTransaksi } from 'enum';
import { IPositionCompoent } from './IPositionComponent';

export interface IDataTabelInformasiMetodeTransaksi {
  bankTarik: {
    value: string;
    position: IPositionCompoent;
  };
  noCekAtauBg: {
    value: string;
    position: IPositionCompoent;
  };
  valuta: {
    value: string;
    position: IPositionCompoent;
  };
  nominal: {
    value: string;
    position: IPositionCompoent;
  };
}

export interface IStateInformasiMetodeTransaksi {
  jenisTransaksi: {
    value: EnumJenisTransaksi.TUNAI | EnumJenisTransaksi.DEBIT_REKENING | '';
    position: IPositionCompoent;
  };
  cekGiro: {
    value: string;
    position: IPositionCompoent;
  };
  dataTabel: IDataTabelInformasiMetodeTransaksi[];
  jumlahSetoran: {
    value: string;
    position: IPositionCompoent;
  };
  terbilang: {
    value: string;
    position: IPositionCompoent;
  };
}
