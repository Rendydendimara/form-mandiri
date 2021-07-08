import { EnumSelectTujuanTransaksi } from 'enum';
import { IPositionCompoent } from './IPositionComponent';

export interface IStateFormInformasiTransaksi {
  tujuanTransaksi: {
    value:
      | 'biaya_hidup'
      | 'bisnis'
      | 'donasi_atau_amal'
      | 'pembayaran'
      | 'pembelian_barang_atau_jasa'
      | 'tabungan_atau_investasi'
      | '';

    position: {
      biaya_hidup: IPositionCompoent;
      bisnis: IPositionCompoent;
      donasi_atau_amal: IPositionCompoent;
      pembayaran: IPositionCompoent;
      pembelian_barang_atau_jasa: IPositionCompoent;
      tabungan_atau_investasi: IPositionCompoent;
    };
  };
  beritaTransaksi: {
    value: string;
    position: IPositionCompoent;
  };
}
