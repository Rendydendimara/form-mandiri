import { EnumSelectJenisPenerima, EnumStatusKependudukan } from 'enum';
import { IPositionCompoent } from './IPositionComponent';

export interface IInformasiPenerimaDanValidasi {
  validasi: {
    value: string;
    position: IPositionCompoent;
  };
  namaPenerima: {
    value: string;
    position: IPositionCompoent;
  };
  noRekening: {
    value: string;
    position: IPositionCompoent;
  };
  bank: {
    value: string;
    position: IPositionCompoent;
  };
  alamatDanTelepon: {
    value: string;
    position: IPositionCompoent;
  };
  jenisDanNomorIdentitas: {
    value: string;
    position: IPositionCompoent;
  };
  jenisPenerima: {
    value:
      | EnumSelectJenisPenerima.PERORANGAN
      | EnumSelectJenisPenerima.PERUSAHAAN
      | EnumSelectJenisPenerima.PEMERINTAH
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
}
