import {
  EnumJenisTransaksi,
  EnumSelectJenisPengirim,
  EnumSelectTujuanTransaksi,
  EnumStatusKependudukan,
  EnumSumberDanaTransaksi,
  EnumTipePengirim,
  EnumSelectJenisPenerima,
} from 'enum';

export interface ISelectStatusKependudukan {
  value:
    | EnumStatusKependudukan.BUKAN_PENDUDUK
    | EnumStatusKependudukan.PENDUDUK;
  item: EnumStatusKependudukan.BUKAN_PENDUDUK | EnumStatusKependudukan.PENDUDUK;
}

export interface ISelectTipePengirim {
  value: EnumTipePengirim.NASABAH | EnumTipePengirim.NONSABAH;
  item: EnumTipePengirim.NASABAH | EnumTipePengirim.NONSABAH;
}

export interface ISelectJenisSumberDanaTransaksi {
  value:
    | EnumSumberDanaTransaksi.DANA_PEMERINTAH
    | EnumSumberDanaTransaksi.GAJI_PENGHASILAN
    | EnumSumberDanaTransaksi.HASIL_USAHA
    | EnumSumberDanaTransaksi.HIBAH_HADIAH
    | EnumSumberDanaTransaksi.PENJUALAN_ASSET
    | EnumSumberDanaTransaksi.SUMBANGAN
    | EnumSumberDanaTransaksi.TABUNGAN_HASIL_INVESTASI
    | EnumSumberDanaTransaksi.WARISAN;
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
  value: EnumJenisTransaksi.DEBIT_REKENING | EnumJenisTransaksi.TUNAI;
  item: EnumJenisTransaksi.DEBIT_REKENING | EnumJenisTransaksi.TUNAI;
}

export interface ISelectJenisPenerima {
  value:
    | EnumSelectJenisPenerima.PEMERINTAH
    | EnumSelectJenisPenerima.PERUSAHAAN
    | EnumSelectJenisPenerima.PERORANGAN;
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
    | EnumSelectTujuanTransaksi.TABUNGAN_ATAU_INVESTASI
    | EnumSelectTujuanTransaksi.BISNIS
    | EnumSelectTujuanTransaksi.PEMBAYARAN
    | EnumSelectTujuanTransaksi.PEMBELIAN_BARANG_ATAU_JASA
    | EnumSelectTujuanTransaksi.BIAYA_HIDUP
    | EnumSelectTujuanTransaksi.DONASI_ATAU_AMAL;
  item:
    | EnumSelectTujuanTransaksi.TABUNGAN_ATAU_INVESTASI
    | EnumSelectTujuanTransaksi.BISNIS
    | EnumSelectTujuanTransaksi.PEMBAYARAN
    | EnumSelectTujuanTransaksi.PEMBELIAN_BARANG_ATAU_JASA
    | EnumSelectTujuanTransaksi.BIAYA_HIDUP
    | EnumSelectTujuanTransaksi.DONASI_ATAU_AMAL;
}
