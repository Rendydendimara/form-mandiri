import { Button } from 'components/atoms';
import PreviewInformasBiayaTransaksi from 'components/molecules/PreviewInformasBiayaTransaksi';
import PreviewInformasiMetodeTransaksi from 'components/molecules/PreviewInformasiMetodeTransaksi';
import PreviewInformasiPenerimaDanValidasi from 'components/molecules/PreviewInformasiPenerimaDanValidasi';
import PreviewInformasiPengirim from 'components/molecules/PreviewInformasiPengirim';
import PreviewInformasiSumberDanaTransaksi from 'components/molecules/PreviewInformasiSumberDanaTransaksi';
import PreviewInformasiTransaksi from 'components/molecules/PreviewInformasiTransaksi';
import PreviewInformasiUmum from 'components/molecules/PreviewInformasiUmum';
import { VERSION_LOCAL_STORAGE_FORM_MANDIRI } from 'constant';
import { IDataGlobal } from 'interfaces/IDataGlobal';
import { getLocal } from 'local/localStorage';
import React, { ReactElement } from 'react';
import { useHistory } from 'react-router';
import { classNames } from 'utils/classnames';
import useStyles from './styles';

interface IProps {}

const Print: React.FC<IProps> = (): ReactElement => {
  const classes = useStyles();
  const history = useHistory();
  const DATA_COOKIE_FORM_MANDIRI: IDataGlobal | undefined | null = getLocal(
    VERSION_LOCAL_STORAGE_FORM_MANDIRI
  );

  const handlePrint = () => {
    window.print();
  };
  const gotoBack = () => {
    history.goBack();
  };

  return (
    <div className={classes.root}>
      <div className={classes.containerPrintPage}>
        <PreviewInformasiUmum data={DATA_COOKIE_FORM_MANDIRI?.informasiUmum} />
        <PreviewInformasiPenerimaDanValidasi
          data={DATA_COOKIE_FORM_MANDIRI?.informasiPenerimaDanValidasi}
        />
        <PreviewInformasiTransaksi
          data={DATA_COOKIE_FORM_MANDIRI?.informasiTransaksi}
        />
        <PreviewInformasiPengirim
          data={DATA_COOKIE_FORM_MANDIRI?.informasiPengirim}
        />
        <PreviewInformasiMetodeTransaksi
          data={DATA_COOKIE_FORM_MANDIRI?.informasiMetodeTransaksi}
        />
        <PreviewInformasiSumberDanaTransaksi
          data={DATA_COOKIE_FORM_MANDIRI?.informasiSumberDanaTransaksi}
        />
        <PreviewInformasBiayaTransaksi
          data={DATA_COOKIE_FORM_MANDIRI?.informasiBiayaTransaksi}
        />
      </div>
      <div className={classes.containerActionButton}>
        <Button
          classsNameLabel={classes.labelBtnPrint}
          className={classNames('hideOnPrint')}
          onClick={gotoBack}
        >
          Back
        </Button>
        <Button
          classsNameLabel={classes.labelBtnPrint}
          className={classNames('hideOnPrint')}
          onClick={handlePrint}
        >
          Print
        </Button>
      </div>
    </div>
  );
};

export default Print;
