import {
  EnumBiayaKoresponded,
  EnumJenisTransaksi,
  EnumSelectJenisPenerima,
  EnumSelectJenisPengirim,
  EnumSelectTujuanTransaksi,
  EnumStatusKependudukan,
  EnumSumberDanaTransaksi,
  EnumTipePengirim,
  EnumTransaksi,
} from 'enum';
import {
  ISelectJenisPenerima,
  ISelectJenisPengirim,
  ISelectJenisSumberDanaTransaksi,
  ISelectJenisTransaksi,
  ISelectStatusKependudukan,
  ISelectTipePengirim,
  ISelectTransaksi,
  ISelectTujuanTransaksi,
} from 'interfaces/ISelect';

export const optionsSelecteTujuanTransaksi: ISelectTujuanTransaksi[] = [
  {
    value: EnumSelectTujuanTransaksi.BIAYA_HIDUP,
    item: EnumSelectTujuanTransaksi.BIAYA_HIDUP,
  },
  {
    value: EnumSelectTujuanTransaksi.BISNIS,
    item: EnumSelectTujuanTransaksi.BISNIS,
  },
  {
    value: EnumSelectTujuanTransaksi.DONASI_ATAU_AMAL,
    item: EnumSelectTujuanTransaksi.DONASI_ATAU_AMAL,
  },
  {
    value: EnumSelectTujuanTransaksi.PEMBAYARAN,
    item: EnumSelectTujuanTransaksi.PEMBAYARAN,
  },
  {
    value: EnumSelectTujuanTransaksi.PEMBELIAN_BARANG_ATAU_JASA,
    item: EnumSelectTujuanTransaksi.PEMBELIAN_BARANG_ATAU_JASA,
  },
  {
    value: EnumSelectTujuanTransaksi.TABUNGAN_ATAU_INVESTASI,
    item: EnumSelectTujuanTransaksi.TABUNGAN_ATAU_INVESTASI,
  },
];

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

export const optionsSelectTransaksi: ISelectTransaksi[] = [
  {
    value: EnumTransaksi.BANK_DRAF,
    item: EnumTransaksi.BANK_DRAF,
  },
  {
    value: EnumTransaksi.KLIRING_INKASO,
    item: EnumTransaksi.KLIRING_INKASO,
  },
  {
    value: EnumTransaksi.RTGS,
    item: EnumTransaksi.RTGS,
  },
  {
    value: EnumTransaksi.SETORAN,
    item: EnumTransaksi.SETORAN,
  },
  {
    value: EnumTransaksi.SKNBI,
    item: EnumTransaksi.SKNBI,
  },
  {
    value: EnumTransaksi.TTT,
    item: EnumTransaksi.TTT,
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

export const DEFAULT_DATA_AND_POSITION = {
  informasiUmum: {
    tanggal: {
      value: '2021-07-06',
      position: { top: 60, right: 0, bottom: 0, left: 372 },
    },
    jenisTransaksi: {
      value: 'rtgs',
      position: { top: 94, right: 0, bottom: 0, left: 193 },
    },
  },
  informasiPenerimaDanValidasi: {
    validasi: {
      value: 'Validasi form',
      position: { top: 170, right: 0, bottom: 0, left: 26 },
    },
    namaPenerima: {
      value: 'John doe',
      position: { top: 324, right: 0, bottom: 0, left: 162 },
    },
    noRekening: {
      value: '010 642 703 5',
      position: { top: 347, right: 0, bottom: 0, left: 162 },
    },
    bank: {
      value: 'Mandiri utama',
      position: { top: 367, right: 0, bottom: 0, left: 162 },
    },
    alamatDanTelepon: {
      value: 'Jalan perdamainya',
      position: { top: 384, right: 0, bottom: 0, left: 162 },
    },
    jenisDanNomorIdentitas: {
      value: '511234563223',
      position: { top: 402, right: 0, bottom: 0, left: 162 },
    },
    jenisPenerima: {
      value: 'perorangan',
      position: { top: 278, right: 0, bottom: 0, left: 158 },
    },
    statusKependudukan: {
      value: 'bukan penduduk',
      position: { top: 300, right: 0, bottom: 0, left: 158 },
    },
  },
  informasiTransaksi: {
    tujuanTransaksi: {
      value: 'bisnis',
      position: { top: 459, right: 0, bottom: 0, left: 126 },
    },
    beritaTransaksi: {
      value: 'Berita transaksi',
      position: { top: 483, right: 0, bottom: 0, left: 122 },
    },
  },
  informasiPengirim: {
    tipePengirim: {
      value: 'nasabah',
      position: { top: 72, right: 0, bottom: 0, left: 599 },
    },
    nikOrPassporOrNpwpPerusahaan: {
      value: '756432343656323',
      position: { top: 96, right: 0, bottom: 0, left: 628 },
    },
    jenisPengirim: {
      value: 'perorangan',
      position: { top: 122, right: 0, bottom: 0, left: 599 },
    },
    statusKependudukan: {
      value: 'penduduk',
      position: { top: 144, right: 0, bottom: 0, left: 599 },
    },
    namaPengirim: {
      value: 'John doe',
      position: { top: 168, right: 0, bottom: 0, left: 598 },
    },
    alamatDanNomorTelepon: {
      value: 'Jalan perdamain, wangga',
      position: { top: 189, right: 0, bottom: 0, left: 598 },
    },
  },
  informasiMetodeTransaksi: {
    jenisTransaksi: {
      value: 'tunai',
      position: { top: 253, right: 0, bottom: 0, left: 473 },
    },
    cekGiro: {
      value: '12345678912345',
      position: { top: 253, right: 0, bottom: 0, left: 615 },
    },
    dataTabel: [
      {
        bankTarik: {
          value: 'Bank tarik 1',
          position: { top: 297, right: 0, bottom: 0, left: 480 },
        },
        noCekAtauBg: {
          value: '12345678912345',
          position: { top: 297, right: 0, bottom: 0, left: 619 },
        },
        valuta: {
          value: 'valuta 1',
          position: { top: 297, right: 0, bottom: 0, left: 750 },
        },
        nominal: {
          value: 'Nomimal 1',
          position: { top: 297, right: 0, bottom: 0, left: 840 },
        },
      },
      {
        bankTarik: {
          value: 'Bank tarik 2',
          position: { top: 315, right: 0, bottom: 0, left: 480 },
        },
        noCekAtauBg: {
          value: '12345678912345',
          position: { top: 316, right: 0, bottom: 0, left: 619 },
        },
        valuta: {
          value: 'valuta 2',
          position: { top: 316, right: 0, bottom: 0, left: 750 },
        },
        nominal: {
          value: 'Nomimal 2',
          position: { top: 316, right: 0, bottom: 0, left: 840 },
        },
      },
    ],
    jumlahSetoran: {
      value: '3.000.000',
      position: { top: 336, right: 0, bottom: 0, left: 658 },
    },
    terbilang: {
      value: 'Tiga juta rupiah',
      position: { top: 360, right: 0, bottom: 0, left: 520 },
    },
  },
  informasiSumberDanaTransaksi: {
    sumberDanaTransaksi: {
      value: 'gaji / penghasilan',
      position: { top: 449, right: 0, bottom: 0, left: 472 },
    },
  },
  informasiBiayaTransaksi: {
    jenisTransaksi: {
      value: 'tunai',
      position: { top: 539, right: 0, bottom: 0, left: 473 },
    },
    totalBiayaTransaksi: {
      value: '12345678912345',
      position: { top: 538, right: 0, bottom: 0, left: 660 },
    },
    biayaBankKoresponden: {
      value: 'pengirim',
      position: { top: 585, right: 0, bottom: 0, left: 474 },
    },
    lainnya: { value: '', position: { top: 0, right: 0, bottom: 0, left: 0 } },
  },
};
