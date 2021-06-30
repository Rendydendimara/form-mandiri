import { EnumBiayaKoresponded, EnumJenisTransaksi } from 'enum';
import { IPositionCompoent } from './IPositionComponent';

export interface IStateInformasiBiayaTransaksi {
  jenisTransaksi: {
    value: EnumJenisTransaksi.TUNAI | EnumJenisTransaksi.DEBIT_REKENING | '';
    position: IPositionCompoent;
  };
  totalBiayaTransaksi: {
    value: string;
    position: IPositionCompoent;
  };
  biayaBankKoresponden: {
    value:
      | EnumBiayaKoresponded.PENGIRIM
      | EnumBiayaKoresponded.PENERIMA
      | EnumBiayaKoresponded.LAINNYA
      | '';
    position: IPositionCompoent;
  };
  lainnya: {
    value: string;
    position: IPositionCompoent;
  };
}
