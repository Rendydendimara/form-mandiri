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

export const KEY_TUJUAN_TRANSAKSI = {
  BIAYA_HIDUP: 'biaya_hidup',
  BISNIS: 'bisnis',
  DONASI_ATAU_AMAL: 'donasi_atau_amal',
  PEMBAYARAN: 'pembayaran',
  PEMBELIAN_BARANG_ATAU_JASA: 'pembelian_barang_atau_jasa',
  TABUNGAN_ATAU_INVESTASI: 'tabungan_atau_investasi',
};

export const optionsSelecteTujuanTransaksi: ISelectTujuanTransaksi[] = [
  {
    value: 'biaya_hidup',
    item: EnumSelectTujuanTransaksi.BIAYA_HIDUP,
  },
  {
    value: 'bisnis',
    item: EnumSelectTujuanTransaksi.BISNIS,
  },
  {
    value: 'donasi_atau_amal',
    item: EnumSelectTujuanTransaksi.DONASI_ATAU_AMAL,
  },
  {
    value: 'pembayaran',
    item: EnumSelectTujuanTransaksi.PEMBAYARAN,
  },
  {
    value: 'pembelian_barang_atau_jasa',
    item: EnumSelectTujuanTransaksi.PEMBELIAN_BARANG_ATAU_JASA,
  },
  {
    value: 'tabungan_atau_investasi',
    item: EnumSelectTujuanTransaksi.TABUNGAN_ATAU_INVESTASI,
  },
];

export const optionsSelectJenisTransaksi: ISelectJenisTransaksi[] = [
  {
    value: 'debit_rekening',
    item: EnumJenisTransaksi.DEBIT_REKENING,
  },
  {
    value: 'tunai',
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
    value: 'nasabah',
    item: EnumTipePengirim.NASABAH,
  },
  {
    value: 'non_nasabah',
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
      value: 'dana_pemerintah',
      item: EnumSumberDanaTransaksi.DANA_PEMERINTAH,
    },
    {
      value: 'gaji_penghasilan',
      item: EnumSumberDanaTransaksi.GAJI_PENGHASILAN,
    },
    {
      value: 'hasil_usaha',
      item: EnumSumberDanaTransaksi.HASIL_USAHA,
    },
    {
      value: 'hibah_hadiah',
      item: EnumSumberDanaTransaksi.HIBAH_HADIAH,
    },
    {
      value: 'penjualan_asset',
      item: EnumSumberDanaTransaksi.PENJUALAN_ASSET,
    },
    {
      value: 'sumbangan',
      item: EnumSumberDanaTransaksi.SUMBANGAN,
    },
    {
      value: 'tabungan_hasil_investasi',
      item: EnumSumberDanaTransaksi.TABUNGAN_HASIL_INVESTASI,
    },
    {
      value: 'warisan',
      item: EnumSumberDanaTransaksi.WARISAN,
    },
  ];

export const INITIAL_STATE_SUMBER_DANA_TRANKSASI = {
  value: 'dana_pemerintah',
  position: {
    dana_pemerintah: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    gaji_penghasilan: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    hasil_usaha: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    hibah_hadiah: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    penjualan_asset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    sumbangan: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    tabungan_hasil_investasi: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    warisan: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

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
    value: EnumTransaksi.TT,
    item: EnumTransaksi.TT,
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

export const INTIAL_JENIS_TRANSAKSI_METODE_TRANSAKSI = {
  value: 'tunai',
  position: {
    tunai: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    debit_rekening: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const INITIAL_BIAYA_BANK_KORESPONDEN = {
  value: 'pengirim',
  position: {
    pengirim: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    penerima: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    lainnya: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const INITIAL_STATE_JENIS_TRANSAKSI = {
  value: '',
  position: {
    bank_draf: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    kliring_inkaso: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    rtgs: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    setoran: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    sknbi: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    tt: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const INITIAL_STATE_JENIS_PENERIMA = {
  value: '',
  position: {
    perorangan: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    perusahaan: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    pemerintah: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const INITIAL_STATE_STATUS_KEPENDUDUKAN = {
  value: '',
  position: {
    penduduk: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    bukan_penduduk: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const INITIAL_STATE_TUJUAN_TRANSAKSI = {
  value: '',
  postion: {
    biaya_hidup: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    bisnis: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    donasi_atau_amal: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    pembayaran: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    pembelian_barang_atau_jasa: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    tabungan_atau_investasi: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const INITIAL_STATE_TIPE_PENGIRIM = {
  value: 'nasabah',
  position: {
    nasabah: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    non_nasabah: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
};

export const INITIAL_STATE_JENIS_PENGIRIM = {
  jenisPengirim: {
    value: 'perorangan',
    position: {
      perorangan: {
        top: 122,
        right: 0,
        bottom: 0,
        left: 599,
      },
      perusahaan: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      pemerintah: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  },
};

export const DEFAULT_DATA_AND_POSITION = {
  informasiUmum: {
    tanggal: {
      value: '2021-07-06',
      position: { top: 60, right: 0, bottom: 0, left: 372 },
    },
    jenisTransaksi: {
      value: 'tt',
      position: {
        bank_draf: { top: 93, right: 0, bottom: 0, left: 397 },
        kliring_inkaso: { top: 93, right: 0, bottom: 0, left: 301 },
        rtgs: { top: 94, right: 0, bottom: 0, left: 192 },
        setoran: { top: 94, right: 0, bottom: 0, left: 88 },
        sknbi: { top: 94, right: 0, bottom: 0, left: 246 },
        tt: { top: 94, right: 0, bottom: 0, left: 151 },
      },
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
      value: 'Jalan perdamainya wangga',
      position: { top: 384, right: 0, bottom: 0, left: 162 },
    },
    jenisDanNomorIdentitas: {
      value: '511234563223',
      position: { top: 402, right: 0, bottom: 0, left: 162 },
    },
    jenisPenerima: {
      value: 'perorangan',
      position: {
        perorangan: { top: 278, right: 0, bottom: 0, left: 158 },
        perusahaan: { top: 278, right: 0, bottom: 0, left: 253 },
        pemerintah: { top: 278, right: 0, bottom: 0, left: 362 },
      },
    },
    statusKependudukan: {
      value: 'bukan_penduduk',
      position: {
        penduduk: { top: 302, right: 0, bottom: 0, left: 158 },
        bukan_penduduk: { top: 302, right: 0, bottom: 0, left: 253 },
      },
    },
  },
  informasiTransaksi: {
    tujuanTransaksi: {
      value: 'biaya_hidup',
      position: {
        bisnis: { top: 461, right: 0, bottom: 0, left: 126 },
        biaya_hidup: { top: 438, right: 0, bottom: 0, left: 366 },
        donasi_atau_amal: { top: 461, right: 0, bottom: 0, left: 366 },
        pembayaran: { top: 438, right: 0, bottom: 0, left: 238 },
        pembelian_barang_atau_jasa: {
          top: 461,
          right: 0,
          bottom: 0,
          left: 238,
        },
        tabungan_atau_investasi: { top: 437, right: 0, bottom: 0, left: 126 },
      },
    },
    beritaTransaksi: {
      value: 'Berita transaksi',
      position: { top: 483, right: 0, bottom: 0, left: 122 },
    },
  },
  informasiPengirim: {
    tipePengirim: {
      value: 'nasabah',
      position: {
        nasabah: { top: 72, right: 0, bottom: 0, left: 599 },
        non_nasabah: { top: 73, right: 0, bottom: 0, left: 695 },
      },
    },
    nikOrPassporOrNpwpPerusahaan: {
      value: '756432343656323',
      position: { top: 96, right: 0, bottom: 0, left: 628 },
    },
    jenisPengirim: {
      value: 'pemerintah',
      position: {
        perorangan: { top: 122, right: 0, bottom: 0, left: 599 },
        perusahaan: { top: 122, right: 0, bottom: 0, left: 694 },
        pemerintah: { top: 122, right: 0, bottom: 0, left: 786 },
      },
    },
    statusKependudukan: {
      value: 'bukan_penduduk',
      position: {
        penduduk: { top: 144, right: 0, bottom: 0, left: 599 },
        bukan_penduduk: { top: 144, right: 0, bottom: 0, left: 695 },
      },
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
      value: 'debit_rekening',
      position: {
        tunai: { top: 253, right: 0, bottom: 0, left: 473 },
        debit_rekening: { top: 254, right: 0, bottom: 0, left: 518 },
      },
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
      value: 'gaji_penghasilan',
      position: {
        dana_pemerintah: { top: 0, right: 0, bottom: 0, left: 0 },
        gaji_penghasilan: { top: 449, right: 0, bottom: 0, left: 472 },
        hasil_usaha: { top: 0, right: 0, bottom: 0, left: 0 },
        hibah_hadiah: { top: 0, right: 0, bottom: 0, left: 0 },
        penjualan_asset: { top: 0, right: 0, bottom: 0, left: 0 },
        sumbangan: { top: 0, right: 0, bottom: 0, left: 0 },
        tabungan_hasil_investasi: { top: 0, right: 0, bottom: 0, left: 0 },
        warisan: { top: 0, right: 0, bottom: 0, left: 0 },
      },
    },
  },
  informasiBiayaTransaksi: {
    jenisTransaksi: {
      value: 'tunai',
      position: {
        tunai: { top: 540, right: 0, bottom: 0, left: 472 },
        debit_rekening: { top: 540, right: 0, bottom: 0, left: 556 },
      },
    },
    totalBiayaTransaksi: {
      value: '12345678912345',
      position: { top: 538, right: 0, bottom: 0, left: 660 },
    },
    biayaBankKoresponden: {
      value: 'pengirim',
      position: {
        pengirim: { top: 583, right: 0, bottom: 0, left: 474 },
        penerima: { top: 583, right: 0, bottom: 0, left: 558 },
        lainnya: { top: 4, right: 0, bottom: 0, left: 0 },
      },
    },
    lainnya: {
      value: 'lainnya',
      position: { top: 582, right: 0, bottom: 0, left: 714 },
    },
  },
};

export const VERSION_LOCAL_STORAGE_FORM_MANDIRI = 'form_mandiri_v.1.0';

export const MINLEFT = -60;
export const MINTOP = -30;
export const MINRIGTH = -60;
export const MINBOTTOM = -40;
