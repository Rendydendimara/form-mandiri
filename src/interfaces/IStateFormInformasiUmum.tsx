import { EnumTransaksi } from 'enum';
import { IPositionCompoent } from './IPositionComponent';

export interface IStateFormInformasiUmum {
  tanggal: {
    value: string;
    position: IPositionCompoent;
  };
  jenisTransaksi: {
    value:
      | EnumTransaksi.BANK_DRAF
      | EnumTransaksi.KLIRING_INKASO
      | EnumTransaksi.RTGS
      | EnumTransaksi.SETORAN
      | EnumTransaksi.SKNBI
      | EnumTransaksi.TT;
    position: {
      bank_draf: IPositionCompoent;
      kliring_inkaso: IPositionCompoent;
      rtgs: IPositionCompoent;
      setoran: IPositionCompoent;
      sknbi: IPositionCompoent;
      tt: IPositionCompoent;
    };
  };
  type: 'jenisTransaksi';
}
