import { EnumSumberDanaTransaksi } from 'enum';

export interface IStateFormInformasiSumberDanaTransaksi {
  sumberDanaTransaksi:
    | EnumSumberDanaTransaksi.DANA_PEMERINTAH
    | EnumSumberDanaTransaksi.GAJI_PENGHASILAN
    | EnumSumberDanaTransaksi.HASIL_USAHA
    | EnumSumberDanaTransaksi.HIBAH_HADIAH
    | EnumSumberDanaTransaksi.PENJUALAN_ASSET
    | EnumSumberDanaTransaksi.SUMBANGAN
    | EnumSumberDanaTransaksi.TABUNGAN_HASIL_INVESTASI
    | EnumSumberDanaTransaksi.WARISAN
    | '';
}
