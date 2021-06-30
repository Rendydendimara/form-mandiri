import { EnumSelectTujuanTransaksi } from 'enum';
import { IPositionCompoent } from './IPositionComponent';

export interface IStateFormInformasiTransaksi {
  tujuanTransaksi: {
    value:
      | EnumSelectTujuanTransaksi.BIAYA_HIDUP
      | EnumSelectTujuanTransaksi.BISNIS
      | EnumSelectTujuanTransaksi.DONASI_ATAU_AMAL
      | EnumSelectTujuanTransaksi.PEMBAYARAN
      | EnumSelectTujuanTransaksi.PEMBELIAN_BARANG_ATAU_JASA
      | EnumSelectTujuanTransaksi.TABUNGAN_ATAU_INVESTASI
      | '';

    position: IPositionCompoent;
  };
  beritaTransaksi: {
    value: string;
    position: IPositionCompoent;
  };
}
