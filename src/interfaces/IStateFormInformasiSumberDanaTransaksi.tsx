import { IPositionCompoent } from './IPositionComponent';

export interface IStateFormInformasiSumberDanaTransaksi {
  sumberDanaTransaksi: {
    value:
      | 'dana_pemerintah'
      | 'gaji_penghasilan'
      | 'hasil_usaha'
      | 'hibah_hadiah'
      | 'penjualan_asset'
      | 'sumbangan'
      | 'tabungan_hasil_investasi'
      | 'warisan';
    position: {
      dana_pemerintah: IPositionCompoent;
      gaji_penghasilan: IPositionCompoent;
      hasil_usaha: IPositionCompoent;
      hibah_hadiah: IPositionCompoent;
      penjualan_asset: IPositionCompoent;
      sumbangan: IPositionCompoent;
      tabungan_hasil_investasi: IPositionCompoent;
      warisan: IPositionCompoent;
    };
  };
}
