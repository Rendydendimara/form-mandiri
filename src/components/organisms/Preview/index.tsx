import { Typography } from '@material-ui/core';
import { IDataGlobal } from 'interfaces/IDataGlobal';
import { IDataTabelInformasiMetodeTransaksi } from 'interfaces/IStateInformasiMetodeTransaksi';
import React, { ReactElement } from 'react';
import useStyles from './styles';

interface IProps {
  dataGlobal?: IDataGlobal;
}

const Preview: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Preview</Typography>
      <div>
        <Typography>Informasi Umum</Typography>
        <div>
          <Typography>{props.dataGlobal?.informasiUmum.tanggal}</Typography>
          <Typography>
            {props.dataGlobal?.informasiUmum.jenisTransaksi}
          </Typography>
        </div>
      </div>

      <div>
        <Typography>Informasi Penerima Dan Validasi</Typography>
        <div>
          <Typography>
            {props.dataGlobal?.informasiPenerimaDanValidasi.validasi}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPenerimaDanValidasi.namaPenerima}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPenerimaDanValidasi.noRekening}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPenerimaDanValidasi.bank}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPenerimaDanValidasi.alamatDanTelepon}
          </Typography>
          <Typography>
            {
              props.dataGlobal?.informasiPenerimaDanValidasi
                .jenisDanNomorIdentitas
            }
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPenerimaDanValidasi.jenisPenerima}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPenerimaDanValidasi.statusKependudukan}
          </Typography>
        </div>
      </div>

      <div>
        <Typography>Informasi Transaksi</Typography>
        <div>
          <Typography>
            {props.dataGlobal?.informasiTransaksi.tujuanTransaksi}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiTransaksi.beritaTransaksi}
          </Typography>
        </div>
      </div>

      <div>
        <Typography>Informasi Pengirim</Typography>
        <div>
          <Typography>
            {props.dataGlobal?.informasiPengirim.tipePengirim}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPengirim.jenisPengirim}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPengirim.statusKependudukan}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPengirim.nikOrPassporOrNpwpPerusahaan}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPengirim.namaPengirim}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiPengirim.alamatDanNomorTelepon}
          </Typography>
        </div>
      </div>

      <div>
        <Typography>Informasi Metode Transaksi</Typography>
        <div>
          <Typography>
            {props.dataGlobal?.informasiMetodeTransaksi.jenisTransaksi}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiMetodeTransaksi.cekGiro}
          </Typography>
          {props.dataGlobal?.informasiMetodeTransaksi.dataTabel.map(
            (data: IDataTabelInformasiMetodeTransaksi, index: number) => (
              <div key={index}>
                <Typography>{data.bankTarik}</Typography>
                <Typography>{data.noCekAtauBg}</Typography>
                <Typography>{data.valuta}</Typography>
                <Typography>{data.nominal}</Typography>
              </div>
            )
          )}
          <Typography>
            {props.dataGlobal?.informasiMetodeTransaksi.jumlahSetoran}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiMetodeTransaksi.terbilang}
          </Typography>
        </div>
      </div>

      <div>
        <Typography>Informasi Sumber Dana Transaksi</Typography>
        <div>
          <Typography>
            {props.dataGlobal?.informasiSumberDanaTransaksi.sumberDanaTransaksi}
          </Typography>
        </div>
      </div>

      <div>
        <Typography>Informasi Biaya Transaksi</Typography>
        <div>
          <Typography>
            {props.dataGlobal?.informasiBiayaTransaksi.jenisTransaksi}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiBiayaTransaksi.totalBiayaTransaksi}
          </Typography>
          <Typography>
            {props.dataGlobal?.informasiBiayaTransaksi.biayaBankKoresponden}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Preview;
