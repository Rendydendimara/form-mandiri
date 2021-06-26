import {
  EnumSelectJenisPengirim,
  EnumStatusKependudukan,
  EnumTipePengirim,
} from 'enum';

export interface IStateInformasiPengirim {
  tipePengirim: EnumTipePengirim.NASABAH | EnumTipePengirim.NONSABAH | '';
  nikOrPassporOrNpwpPerusahaan: string;
  jenisPengirim:
    | EnumSelectJenisPengirim.PEMERINTAH
    | EnumSelectJenisPengirim.PERORANGAN
    | EnumSelectJenisPengirim.PERUSAHAAN
    | '';
  statusKependudukan:
    | EnumStatusKependudukan.PENDUDUK
    | EnumStatusKependudukan.BUKAN_PENDUDUK
    | '';
  namaPengirim: string;
  alamatDanNomorTelepon: string;
}
