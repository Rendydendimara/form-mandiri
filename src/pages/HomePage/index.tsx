import {
  DEFAULT_DATA_AND_POSITION,
  INITIAL_STATE,
  INITIAL_STATE_JENIS_TRANSAKSI,
  VERSION_LOCAL_STORAGE_FORM_MANDIRI,
} from 'constant';
import { IInformasiPenerimaDanValidasi } from 'interfaces/IInformasiPenerimaDanValidasi';
import { IStateFormInformasiSumberDanaTransaksi } from 'interfaces/IStateFormInformasiSumberDanaTransaksi';
import { IStateFormInformasiTransaksi } from 'interfaces/IStateFormInformasiTransaksi';
import { IStateFormInformasiUmum } from 'interfaces/IStateFormInformasiUmum';
import { IStateInformasiBiayaTransaksi } from 'interfaces/IStateInformasiBiayaTransaksi';
import { IStateInformasiMetodeTransaksi } from 'interfaces/IStateInformasiMetodeTransaksi';
import { IStateInformasiPengirim } from 'interfaces/IStateInformasiPengirim';
import Splash from 'pages/Splash';
import React, { lazy, ReactElement, Suspense, useState } from 'react';
import useStyles from './styles';
import { getLocal, setLocal } from 'local/localStorage';

interface IProps {}

const PREVIEWCOMPONENT = lazy(
  () => import('../../components/organisms/Preview')
);
const SIDEBARCOMPONENT = lazy(
  () => import('../../components/organisms/Sidebar')
);

const HomePage: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const DATA_COOKIE_FORM_MANDIRI = getLocal(VERSION_LOCAL_STORAGE_FORM_MANDIRI);
  const [dataGlobal, setDataGlobal] = useState<any>(
    DATA_COOKIE_FORM_MANDIRI || {
      informasiUmum: {
        tanggal: INITIAL_STATE,
        jenisTransaksi: INITIAL_STATE_JENIS_TRANSAKSI,
      },
      informasiPenerimaDanValidasi: {
        validasi: INITIAL_STATE,
        namaPenerima: INITIAL_STATE,
        noRekening: INITIAL_STATE,
        bank: INITIAL_STATE,
        alamatDanTelepon: INITIAL_STATE,
        jenisDanNomorIdentitas: INITIAL_STATE,
        jenisPenerima: INITIAL_STATE,
        statusKependudukan: INITIAL_STATE,
      },
      informasiTransaksi: {
        tujuanTransaksi: INITIAL_STATE,
        beritaTransaksi: INITIAL_STATE,
      },
      informasiPengirim: {
        tipePengirim: INITIAL_STATE,
        nikOrPassporOrNpwpPerusahaan: INITIAL_STATE,
        jenisPengirim: INITIAL_STATE,
        statusKependudukan: INITIAL_STATE,
        namaPengirim: INITIAL_STATE,
        alamatDanNomorTelepon: INITIAL_STATE,
      },
      informasiMetodeTransaksi: {
        jenisTransaksi: INITIAL_STATE,
        cekGiro: INITIAL_STATE,
        dataTabel: [
          {
            bankTarik: INITIAL_STATE,
            noCekAtauBg: INITIAL_STATE,
            valuta: INITIAL_STATE,
            nominal: INITIAL_STATE,
          },
          {
            bankTarik: INITIAL_STATE,
            noCekAtauBg: INITIAL_STATE,
            valuta: INITIAL_STATE,
            nominal: INITIAL_STATE,
          },
        ],
        jumlahSetoran: INITIAL_STATE,
        terbilang: INITIAL_STATE,
      },
      informasiSumberDanaTransaksi: {
        sumberDanaTransaksi: INITIAL_STATE,
      },
      informasiBiayaTransaksi: {
        jenisTransaksi: INITIAL_STATE,
        totalBiayaTransaksi: INITIAL_STATE,
        biayaBankKoresponden: INITIAL_STATE,
        lainnya: INITIAL_STATE,
      },
    }
  );

  const handleChangeDataGlobal = (
    type: string,
    data:
      | IStateFormInformasiUmum
      | IInformasiPenerimaDanValidasi
      | IStateFormInformasiTransaksi
      | IStateInformasiPengirim
      | IStateInformasiMetodeTransaksi
      | IStateFormInformasiSumberDanaTransaksi
      | IStateInformasiBiayaTransaksi
  ): void => {
    setDataGlobal({
      ...dataGlobal,
      [type]: data,
    });
    setLocal(VERSION_LOCAL_STORAGE_FORM_MANDIRI, {
      ...dataGlobal,
      [type]: data,
    });
  };
  const handleResetDataForm = (): void => {
    setLocal(VERSION_LOCAL_STORAGE_FORM_MANDIRI, DEFAULT_DATA_AND_POSITION);
    const DATA_COOKIE_FORM_MANDIRI = getLocal(
      VERSION_LOCAL_STORAGE_FORM_MANDIRI
    );
    setDataGlobal(DATA_COOKIE_FORM_MANDIRI);
    window.location.reload();
  };
  return (
    <div className={classes.root}>
      <Suspense fallback={<Splash />}>
        <SIDEBARCOMPONENT
          changeDataGlobal={handleChangeDataGlobal}
          handleResetDataForm={handleResetDataForm}
        />
      </Suspense>
      <Suspense fallback={<Splash />}>
        <PREVIEWCOMPONENT dataGlobal={dataGlobal} />
      </Suspense>
    </div>
  );
};

export default HomePage;
