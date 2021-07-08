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
    value: 'tunai' | 'debit_rekening' | '';
    position: {
      tunai: IPositionCompoent;
      debit_rekening: IPositionCompoent;
    };
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
