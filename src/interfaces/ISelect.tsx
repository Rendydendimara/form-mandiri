import {
  EnumJenisTransaksi,
  EnumSelectJenisPenerima,
  EnumSelectJenisPengirim,
  EnumSelectTujuanTransaksi,
  EnumStatusKependudukan,
  EnumSumberDanaTransaksi,
  EnumTipePengirim,
  EnumTransaksi,
} from 'enum';

export interface ISelectStatusKependudukan {
  value: 'penduduk' | 'bukan_penduduk';
  item: EnumStatusKependudukan.BUKAN_PENDUDUK | EnumStatusKependudukan.PENDUDUK;
}

export interface ISelectTipePengirim {
  value: 'nasabah' | 'non_nasabah';
  item: EnumTipePengirim.NASABAH | EnumTipePengirim.NONSABAH;
}

export interface ISelectJenisSumberDanaTransaksi {
  value:
    | 'dana_pemerintah'
    | 'gaji_penghasilan'
    | 'hasil_usaha'
    | 'hibah_hadiah'
    | 'penjualan_asset'
    | 'sumbangan'
    | 'tabungan_hasil_investasi'
    | 'warisan';

  item:
    | EnumSumberDanaTransaksi.DANA_PEMERINTAH
    | EnumSumberDanaTransaksi.GAJI_PENGHASILAN
    | EnumSumberDanaTransaksi.HASIL_USAHA
    | EnumSumberDanaTransaksi.HIBAH_HADIAH
    | EnumSumberDanaTransaksi.PENJUALAN_ASSET
    | EnumSumberDanaTransaksi.SUMBANGAN
    | EnumSumberDanaTransaksi.TABUNGAN_HASIL_INVESTASI
    | EnumSumberDanaTransaksi.WARISAN;
}

export interface ISelectJenisTransaksi {
  value: 'debit_rekening' | 'tunai';
  item: EnumJenisTransaksi.DEBIT_REKENING | EnumJenisTransaksi.TUNAI;
}

export interface ISelectJenisPenerima {
  value: 'pemerintah' | 'perorangan' | 'perusahaan';
  item:
    | EnumSelectJenisPenerima.PERORANGAN
    | EnumSelectJenisPenerima.PERUSAHAAN
    | EnumSelectJenisPenerima.PEMERINTAH;
}

export interface ISelectJenisPengirim {
  value:
    | EnumSelectJenisPengirim.PERORANGAN
    | EnumSelectJenisPengirim.PERUSAHAAN
    | EnumSelectJenisPengirim.PEMERINTAH;
  item:
    | EnumSelectJenisPengirim.PERORANGAN
    | EnumSelectJenisPengirim.PERUSAHAAN
    | EnumSelectJenisPengirim.PEMERINTAH;
}

export interface ISelectTujuanTransaksi {
  value:
    | 'biaya_hidup'
    | 'bisnis'
    | 'donasi_atau_amal'
    | 'pembayaran'
    | 'pembelian_barang_atau_jasa'
    | 'tabungan_atau_investasi';
  item:
    | EnumSelectTujuanTransaksi.TABUNGAN_ATAU_INVESTASI
    | EnumSelectTujuanTransaksi.BISNIS
    | EnumSelectTujuanTransaksi.PEMBAYARAN
    | EnumSelectTujuanTransaksi.PEMBELIAN_BARANG_ATAU_JASA
    | EnumSelectTujuanTransaksi.BIAYA_HIDUP
    | EnumSelectTujuanTransaksi.DONASI_ATAU_AMAL;
}

export interface ISelectTransaksi {
  value:
    | EnumTransaksi.BANK_DRAF
    | EnumTransaksi.KLIRING_INKASO
    | EnumTransaksi.RTGS
    | EnumTransaksi.SETORAN
    | EnumTransaksi.SKNBI
    | EnumTransaksi.TT;
  item:
    | EnumTransaksi.BANK_DRAF
    | EnumTransaksi.KLIRING_INKASO
    | EnumTransaksi.RTGS
    | EnumTransaksi.SETORAN
    | EnumTransaksi.SKNBI
    | EnumTransaksi.TT;
}
