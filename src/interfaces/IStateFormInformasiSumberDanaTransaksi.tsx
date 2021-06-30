import { EnumSumberDanaTransaksi } from 'enum';
import { IPositionCompoent } from './IPositionComponent';

export interface IStateFormInformasiSumberDanaTransaksi {
  sumberDanaTransaksi: {
    value:
      | EnumSumberDanaTransaksi.DANA_PEMERINTAH
      | EnumSumberDanaTransaksi.GAJI_PENGHASILAN
      | EnumSumberDanaTransaksi.HASIL_USAHA
      | EnumSumberDanaTransaksi.HIBAH_HADIAH
      | EnumSumberDanaTransaksi.PENJUALAN_ASSET
      | EnumSumberDanaTransaksi.SUMBANGAN
      | EnumSumberDanaTransaksi.TABUNGAN_HASIL_INVESTASI
      | EnumSumberDanaTransaksi.WARISAN
      | '';
    position: IPositionCompoent;
  };
}
