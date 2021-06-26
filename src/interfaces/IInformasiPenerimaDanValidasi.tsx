import { EnumSelectJenisPenerima, EnumStatusKependudukan } from 'enum';

export interface IInformasiPenerimaDanValidasi {
  validasi: string;
  namaPenerima: string;
  noRekening: string;
  bank: string;
  alamatDanTelepon: string;
  jenisDanNomorIdentitas: string;
  jenisPenerima:
    | EnumSelectJenisPenerima.PERORANGAN
    | EnumSelectJenisPenerima.PERUSAHAAN
    | EnumSelectJenisPenerima.PEMERINTAH
    | '';
  statusKependudukan:
    | EnumStatusKependudukan.PENDUDUK
    | EnumStatusKependudukan.BUKAN_PENDUDUK
    | '';
}
