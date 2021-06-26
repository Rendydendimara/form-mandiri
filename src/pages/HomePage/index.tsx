import { IDataGlobal } from 'interfaces/IDataGlobal';
import Splash from 'pages/Splash';
import React, { lazy, ReactElement, Suspense, useState } from 'react';
import useStyles from './styles';
import { IInformasiPenerimaDanValidasi } from 'interfaces/IInformasiPenerimaDanValidasi';
import { IStateFormInformasiSumberDanaTransaksi } from 'interfaces/IStateFormInformasiSumberDanaTransaksi';
import { IStateFormInformasiTransaksi } from 'interfaces/IStateFormInformasiTransaksi';
import { IStateFormInformasiUmum } from 'interfaces/IStateFormInformasiUmum';
import { IStateInformasiBiayaTransaksi } from 'interfaces/IStateInformasiBiayaTransaksi';
import { IStateInformasiMetodeTransaksi } from 'interfaces/IStateInformasiMetodeTransaksi';
import { IStateInformasiPengirim } from 'interfaces/IStateInformasiPengirim';

interface IProps {}

const PREVIEWCOMPONENT = lazy(
  () => import('../../components/organisms/Preview')
);
const SIDEBARCOMPONENT = lazy(
  () => import('../../components/organisms/Sidebar')
);

const HomePage: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const [dataGlobal, setDataGlobal] = useState<IDataGlobal>({
    informasiUmum: {
      tanggal: '',
      jenisTransaksi: '',
    },
    informasiPenerimaDanValidasi: {
      validasi: '',
      namaPenerima: '',
      noRekening: '',
      bank: '',
      alamatDanTelepon: '',
      jenisDanNomorIdentitas: '',
      jenisPenerima: '',
      statusKependudukan: '',
    },
    informasiTransaksi: {
      tujuanTransaksi: '',
      beritaTransaksi: '',
    },
    informasiPengirim: {
      tipePengirim: '',
      nikOrPassporOrNpwpPerusahaan: '',
      jenisPengirim: '',
      statusKependudukan: '',
      namaPengirim: '',
      alamatDanNomorTelepon: '',
    },
    informasiMetodeTransaksi: {
      jenisTransaksi: '',
      cekGiro: '',
      dataTabel: [
        {
          bankTarik: '',
          noCekAtauBg: '',
          valuta: '',
          nominal: '',
        },
        {
          bankTarik: '',
          noCekAtauBg: '',
          valuta: '',
          nominal: '',
        },
      ],
      jumlahSetoran: '',
      terbilang: '',
    },
    informasiSumberDanaTransaksi: {
      sumberDanaTransaksi: '',
    },
    informasiBiayaTransaksi: {
      jenisTransaksi: '',
      totalBiayaTransaksi: '',
      biayaBankKoresponden: '',
      lainnya: '',
    },
  });

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
    console.log(type, data);
    setDataGlobal({
      ...dataGlobal,
      [type]: data,
    });
  };

  return (
    <div className={classes.root}>
      <Suspense fallback={<Splash />}>
        <SIDEBARCOMPONENT changeDataGlobal={handleChangeDataGlobal} />
      </Suspense>
      <Suspense fallback={<Splash />}>
        <PREVIEWCOMPONENT dataGlobal={dataGlobal} />
      </Suspense>
    </div>
  );
};

export default HomePage;
