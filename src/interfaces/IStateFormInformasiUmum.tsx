import { IPositionCompoent } from './IPositionComponent';

export interface IStateFormInformasiUmum {
  tanggal: {
    value: string;
    position: IPositionCompoent;
  };
  jenisTransaksi: {
    value: string;
    position: IPositionCompoent;
  };
}
