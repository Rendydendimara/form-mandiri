import { IInformasiPenerimaDanValidasi } from './IInformasiPenerimaDanValidasi';
import { IStateFormInformasiSumberDanaTransaksi } from './IStateFormInformasiSumberDanaTransaksi';
import { IStateFormInformasiTransaksi } from './IStateFormInformasiTransaksi';
import { IStateFormInformasiUmum } from './IStateFormInformasiUmum';
import { IStateInformasiBiayaTransaksi } from './IStateInformasiBiayaTransaksi';
import { IStateInformasiMetodeTransaksi } from './IStateInformasiMetodeTransaksi';
import { IStateInformasiPengirim } from './IStateInformasiPengirim';

export interface IDataGlobal {
  informasiUmum: IStateFormInformasiUmum;
  informasiPenerimaDanValidasi: IInformasiPenerimaDanValidasi;
  informasiTransaksi: IStateFormInformasiTransaksi;
  informasiPengirim: IStateInformasiPengirim;
  informasiMetodeTransaksi: IStateInformasiMetodeTransaksi;
  informasiSumberDanaTransaksi: IStateFormInformasiSumberDanaTransaksi;
  informasiBiayaTransaksi: IStateInformasiBiayaTransaksi;
}
