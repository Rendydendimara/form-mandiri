import { EnumBiayaKoresponded, EnumJenisTransaksi } from 'enum';

export interface IStateInformasiBiayaTransaksi {
  jenisTransaksi:
    | EnumJenisTransaksi.TUNAI
    | EnumJenisTransaksi.DEBIT_REKENING
    | '';
  totalBiayaTransaksi: string;
  biayaBankKoresponden:
    | EnumBiayaKoresponded.PENGIRIM
    | EnumBiayaKoresponded.PENERIMA
    | EnumBiayaKoresponded.LAINNYA
    | '';
  lainnya: string;
}
