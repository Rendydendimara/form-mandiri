import {
  EnumSelectJenisPengirim,
  EnumStatusKependudukan,
  EnumTipePengirim,
} from 'enum';
import { IPositionCompoent } from './IPositionComponent';

export interface IStateInformasiPengirim {
  tipePengirim: {
    value: EnumTipePengirim.NASABAH | EnumTipePengirim.NONSABAH | '';
    position: IPositionCompoent;
  };
  nikOrPassporOrNpwpPerusahaan: {
    value: string;
    position: IPositionCompoent;
  };
  jenisPengirim: {
    value:
      | EnumSelectJenisPengirim.PEMERINTAH
      | EnumSelectJenisPengirim.PERORANGAN
      | EnumSelectJenisPengirim.PERUSAHAAN
      | '';
    position: IPositionCompoent;
  };
  statusKependudukan: {
    value:
      | EnumStatusKependudukan.PENDUDUK
      | EnumStatusKependudukan.BUKAN_PENDUDUK
      | '';
    position: IPositionCompoent;
  };
  namaPengirim: {
    value: string;
    position: IPositionCompoent;
  };
  alamatDanNomorTelepon: {
    value: string;
    position: IPositionCompoent;
  };
}
