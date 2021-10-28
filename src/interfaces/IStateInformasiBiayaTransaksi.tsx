import { IPositionCompoent } from './IPositionComponent';

export interface IStateInformasiBiayaTransaksi {
  jenisTransaksi: {
    value: 'tunai' | 'debit_rekening';
    position: {
      tunai: IPositionCompoent;
      debit_rekening: IPositionCompoent;
    };
  };
  totalBiayaTransaksi: {
    value: string;
    position: IPositionCompoent;
  };
  biayaBankKoresponden: {
    value: 'pengirim' | 'penerima' | 'lainnya';
    position: {
      pengirim: IPositionCompoent;
      penerima: IPositionCompoent;
      lainnya: IPositionCompoent;
    };
  };
  lainnya: {
    value: string;
    position: IPositionCompoent;
  };
}
