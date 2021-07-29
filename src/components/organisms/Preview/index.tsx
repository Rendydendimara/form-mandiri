import PreviewInformasBiayaTransaksi from 'components/molecules/PreviewInformasBiayaTransaksi';
import PreviewInformasiMetodeTransaksi from 'components/molecules/PreviewInformasiMetodeTransaksi';
import PreviewInformasiPenerimaDanValidasi from 'components/molecules/PreviewInformasiPenerimaDanValidasi';
import PreviewInformasiPengirim from 'components/molecules/PreviewInformasiPengirim';
import PreviewInformasiSumberDanaTransaksi from 'components/molecules/PreviewInformasiSumberDanaTransaksi';
import PreviewInformasiTransaksi from 'components/molecules/PreviewInformasiTransaksi';
import PreviewInformasiUmum from 'components/molecules/PreviewInformasiUmum';
import { IDataGlobal } from 'interfaces/IDataGlobal';
import React, { ReactElement } from 'react';
import { compareDataStateComponent } from 'utils/compareDataStateComponent';
import useStyles from './styles';

interface IProps {
  dataGlobal?: IDataGlobal;
}

const Preview: React.FC<IProps> = (props): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.dataGlobal && (
        <div id='previewForm'>
          <MemoizePreviewInformasiUmumComponent
            data={props.dataGlobal?.informasiUmum}
          />
          <MemoizePreviewInformasiPenerimaDanValidasiComponent
            data={props.dataGlobal?.informasiPenerimaDanValidasi}
          />
          <MemoizePreviewPreviewInformasiTransaksiComponent
            data={props.dataGlobal?.informasiTransaksi}
          />
          <MemoizePreviewInformasiPengirimComponent
            data={props.dataGlobal?.informasiPengirim}
          />
          <MemoizePreviewInformasiMetodeTransaksiComponent
            data={props.dataGlobal?.informasiMetodeTransaksi}
          />
          <MemoizePreviewInformasiSumberDanaTransaksiComponent
            data={props.dataGlobal?.informasiSumberDanaTransaksi}
          />
          <MemoizePreviewInformasBiayaTransaksiComponent
            data={props.dataGlobal?.informasiBiayaTransaksi}
          />
        </div>
      )}
    </div>
  );
};

export default Preview;

const MemoizePreviewInformasiUmumComponent = React.memo(
  PreviewInformasiUmum,
  compareDataStateComponent
);
const MemoizePreviewInformasiPenerimaDanValidasiComponent = React.memo(
  PreviewInformasiPenerimaDanValidasi,
  compareDataStateComponent
);
const MemoizePreviewPreviewInformasiTransaksiComponent = React.memo(
  PreviewInformasiTransaksi,
  compareDataStateComponent
);
const MemoizePreviewInformasiPengirimComponent = React.memo(
  PreviewInformasiPengirim,
  compareDataStateComponent
);
const MemoizePreviewInformasiMetodeTransaksiComponent = React.memo(
  PreviewInformasiMetodeTransaksi,
  compareDataStateComponent
);
const MemoizePreviewInformasiSumberDanaTransaksiComponent = React.memo(
  PreviewInformasiSumberDanaTransaksi,
  compareDataStateComponent
);
const MemoizePreviewInformasBiayaTransaksiComponent = React.memo(
  PreviewInformasBiayaTransaksi,
  compareDataStateComponent
);
