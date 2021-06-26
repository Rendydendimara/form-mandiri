import { EnumJenisTransaksi } from 'enum';

export interface IDataTabelInformasiMetodeTransaksi {
  bankTarik: string;
  noCekAtauBg: string;
  valuta: string;
  nominal: string;
}

export interface IStateInformasiMetodeTransaksi {
  jenisTransaksi:
    | EnumJenisTransaksi.TUNAI
    | EnumJenisTransaksi.DEBIT_REKENING
    | '';
  cekGiro: '';
  dataTabel: IDataTabelInformasiMetodeTransaksi[];
  jumlahSetoran: string;
  terbilang: string;
}
