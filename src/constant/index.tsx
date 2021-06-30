import {
  EnumBiayaKoresponded,
  EnumJenisTransaksi,
  EnumSelectJenisPenerima,
  EnumSelectJenisPengirim,
  EnumStatusKependudukan,
  EnumSumberDanaTransaksi,
  EnumTipePengirim,
} from 'enum';
import {
  ISelectJenisPenerima,
  ISelectJenisPengirim,
  ISelectJenisSumberDanaTransaksi,
  ISelectJenisTransaksi,
  ISelectStatusKependudukan,
  ISelectTipePengirim,
} from 'interfaces/ISelect';

export const optionsSelectJenisTransaksi: ISelectJenisTransaksi[] = [
  {
    value: EnumJenisTransaksi.DEBIT_REKENING,
    item: EnumJenisTransaksi.DEBIT_REKENING,
  },
  {
    value: EnumJenisTransaksi.TUNAI,
    item: EnumJenisTransaksi.TUNAI,
  },
];

export const optionsSelectBiayaKoresponded = [
  {
    value: EnumBiayaKoresponded.PENGIRIM,
    item: EnumBiayaKoresponded.PENGIRIM,
  },
  {
    value: EnumBiayaKoresponded.PENERIMA,
    item: EnumBiayaKoresponded.PENERIMA,
  },
  {
    value: EnumBiayaKoresponded.LAINNYA,
    item: EnumBiayaKoresponded.LAINNYA,
  },
];

export const optionsSelectJenisPenerima: ISelectJenisPenerima[] = [
  {
    value: EnumSelectJenisPenerima.PERORANGAN,
    item: EnumSelectJenisPenerima.PERORANGAN,
  },
  {
    value: EnumSelectJenisPenerima.PERUSAHAAN,
    item: EnumSelectJenisPenerima.PERUSAHAAN,
  },
  {
    value: EnumSelectJenisPenerima.PEMERINTAH,
    item: EnumSelectJenisPenerima.PEMERINTAH,
  },
];

export const optionsSelectStatusKependudukan: ISelectStatusKependudukan[] = [
  {
    value: EnumStatusKependudukan.PENDUDUK,
    item: EnumStatusKependudukan.PENDUDUK,
  },
  {
    value: EnumStatusKependudukan.BUKAN_PENDUDUK,
    item: EnumStatusKependudukan.BUKAN_PENDUDUK,
  },
];

export const optionsJenisPengirim: ISelectJenisPengirim[] = [
  {
    value: EnumSelectJenisPengirim.PERORANGAN,
    item: EnumSelectJenisPengirim.PERORANGAN,
  },
  {
    value: EnumSelectJenisPengirim.PERUSAHAAN,
    item: EnumSelectJenisPengirim.PERUSAHAAN,
  },
  {
    value: EnumSelectJenisPengirim.PEMERINTAH,
    item: EnumSelectJenisPengirim.PEMERINTAH,
  },
];

export const optionsTipePengirim: ISelectTipePengirim[] = [
  {
    value: EnumTipePengirim.NASABAH,
    item: EnumTipePengirim.NASABAH,
  },
  {
    value: EnumTipePengirim.NONSABAH,
    item: EnumTipePengirim.NONSABAH,
  },
];
export const optionsStatusKependudukan: ISelectStatusKependudukan[] = [
  {
    value: EnumStatusKependudukan.PENDUDUK,
    item: EnumStatusKependudukan.PENDUDUK,
  },
  {
    value: EnumStatusKependudukan.BUKAN_PENDUDUK,
    item: EnumStatusKependudukan.BUKAN_PENDUDUK,
  },
];

export const optionsSelectSumberDanaTransaksi: ISelectJenisSumberDanaTransaksi[] =
  [
    {
      value: EnumSumberDanaTransaksi.DANA_PEMERINTAH,
      item: EnumSumberDanaTransaksi.DANA_PEMERINTAH,
    },
    {
      value: EnumSumberDanaTransaksi.GAJI_PENGHASILAN,
      item: EnumSumberDanaTransaksi.GAJI_PENGHASILAN,
    },
    {
      value: EnumSumberDanaTransaksi.HASIL_USAHA,
      item: EnumSumberDanaTransaksi.HASIL_USAHA,
    },
    {
      value: EnumSumberDanaTransaksi.HIBAH_HADIAH,
      item: EnumSumberDanaTransaksi.HIBAH_HADIAH,
    },
    {
      value: EnumSumberDanaTransaksi.PENJUALAN_ASSET,
      item: EnumSumberDanaTransaksi.PENJUALAN_ASSET,
    },
    {
      value: EnumSumberDanaTransaksi.SUMBANGAN,
      item: EnumSumberDanaTransaksi.SUMBANGAN,
    },
    {
      value: EnumSumberDanaTransaksi.TABUNGAN_HASIL_INVESTASI,
      item: EnumSumberDanaTransaksi.TABUNGAN_HASIL_INVESTASI,
    },
    {
      value: EnumSumberDanaTransaksi.WARISAN,
      item: EnumSumberDanaTransaksi.WARISAN,
    },
  ];

export const INITIAL_STATE = {
  value: '',
  position: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};
