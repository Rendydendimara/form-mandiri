import { EnumSelectTujuanTransaksi } from 'enum';

export interface IStateFormInformasiTransaksi {
  tujuanTransaksi:
    | EnumSelectTujuanTransaksi.BIAYA_HIDUP
    | EnumSelectTujuanTransaksi.BISNIS
    | EnumSelectTujuanTransaksi.DONASI_ATAU_AMAL
    | EnumSelectTujuanTransaksi.PEMBAYARAN
    | EnumSelectTujuanTransaksi.PEMBELIAN_BARANG_ATAU_JASA
    | EnumSelectTujuanTransaksi.TABUNGAN_ATAU_INVESTASI
    | '';
  beritaTransaksi: string;
}
